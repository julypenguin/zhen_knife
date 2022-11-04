import React, { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { FormattedMessage } from 'react-intl'
import data from './shoppingCart.json'
import productsData from '../Shop/products.json'
import ProductImg from '../Shop/ProductImg'
import Counter from '../Shop/Counter'
import { numberWithCommas } from 'lib/numberWithCommas'
import BaseModal from '../Base/BaseModal'

const ShoppingCartPage = ({
    cart,
    updateCart,
    push,
}) => {
    const [removeItem, setRemoveItem] = useState({})
    const [showRemoveModal, setShowRemoveModal] = useState(false)

    const relatedProducts = cart
        .filter((product, productIdx) => productIdx === 0)
        .reduce((acc, product) => {
            return [...acc, ...product.detail.relation]
        }, [])

    const setCount = productIdx => count => {
        if (!cart[productIdx]) return
        if (!count || count <= 0) {
            const newCart = cart.filter((bag, bagIdx) => bagIdx !== productIdx)
            localStorage.setItem('cart', JSON.stringify(newCart))
            updateCart(newCart)
        } else {
            const newCart = cart.map((bag, bagIdx) => {
                if (bagIdx !== productIdx) return bag
                return {
                    ...bag,
                    buyCount: count,
                }
            })
            localStorage.setItem('cart', JSON.stringify(newCart))
            updateCart(newCart)
        }
    }

    // type=1: 小計, type=2: 運費, type=3: 總計
    const calculateCost = (type) => {
        const productCost = cart.reduce((acc, product) => {
            const price = Number(product.price)
            if (isNaN(price)) return acc
            return acc + price
        }, 0)

        const shippingEstimate = 0
        const orderTotal = productCost + shippingEstimate

        switch (type) {
            case 1: return <span>
                <span>$</span>
                {numberWithCommas(productCost)}
            </span>
            case 2: return shippingEstimate ?
                <span>
                    <span>$</span>
                    {numberWithCommas(shippingEstimate)}
                </span> :
                <FormattedMessage id='shoppingCart.free_transportation' defaultMessage='免運' />
            case 3: return <span>
                <span>$</span>
                {numberWithCommas(orderTotal)}
            </span>
            default: return 0
        }
    }

    const closeModal = () => {
        setShowRemoveModal(false)
    }

    const openModal = () => {
        setShowRemoveModal(true)
    }

    return (
        <div className="bg-white">
            <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <FormattedMessage id={`shoppingCart.${data.title_intl}`} defaultMessage={data.title} />
                </h1>

                {!cart.length ?
                    <div className='mt-12'>
                        <div className='mb-12 bg-blue-600 text-white px-8 py-6 border-l-8 border-blue-800 text-lg'>
                            <FormattedMessage id='shoppingCart.no_products_in_your_shopping_cart' defaultMessage='您的購物車裡還沒有任何商品。' />
                        </div>
                        <div>
                            <button
                                className='bg-gray-500 text-white px-4 py-3 hover:bg-gray-600 rounded cursor-pointer'
                                onClick={() => push('/shop')}
                            >
                                <FormattedMessage id='shoppingCart.back_to_the_store' defaultMessage='回到商店' />
                            </button>
                        </div>
                    </div>
                    :
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>

                            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                                {cart.map((product, productIdx) => (
                                    <li key={product.cat_sid} className="flex py-6 sm:py-10">
                                        <div className="flex-shrink-0">
                                            <ProductImg
                                                img={product.intl_id}
                                                alt={product.name}
                                                className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                                            />
                                        </div>

                                        <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-5 sm:gap-x-6 sm:pr-0">
                                                <div className='col-span-4'>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm">
                                                            <a href={`/shop/detail/${product.intl_id}`} className="font-medium text-gray-700 hover:text-gray-800">
                                                                {product.name}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <div className="mt-4">
                                                        <span className='text-sm font-medium text-gray-900 mr-1'>NT $</span>
                                                        <span className='text-sm font-medium text-gray-900'>{numberWithCommas(product.price)}</span>
                                                    </div>
                                                </div>

                                                <div className="mt-4 sm:mt-0 sm:pr-9">
                                                    <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                                                        Quantity, {product.name}
                                                    </label>

                                                    <div className="absolute top-0 right-0">
                                                        <button
                                                            type="button"
                                                            className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                                                            onClick={() => {
                                                                setRemoveItem({
                                                                    ...product,
                                                                    productIdx,
                                                                })
                                                                openModal()
                                                            }}
                                                        >
                                                            <span className="sr-only">Remove</span>
                                                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4 flex text-sm text-gray-700 space-x-2">
                                                <Counter
                                                    defaultCount={product.buyCount}
                                                    handleCount={setCount(productIdx)}
                                                    handleRemove={() => {
                                                        setRemoveItem({
                                                            ...product,
                                                            productIdx,
                                                        })
                                                        openModal()
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Order summary */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                        >
                            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                                <FormattedMessage id='shoppingCart.order_summary' defaultMessage='購物車總計' />
                            </h2>

                            <dl className="mt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-base text-gray-600">
                                        <FormattedMessage id='shoppingCart.subtotal' defaultMessage='小計' />
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">{calculateCost(1)}</dd>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                    <dt className="flex items-center text-sm text-gray-600">
                                        <span>
                                            <FormattedMessage id='shoppingCart.shipping_estimate' defaultMessage='運費' />
                                        </span>
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">{calculateCost(2)}</dd>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                    <dt className="text-base font-medium text-gray-900">
                                        <FormattedMessage id='shoppingCart.order_total' defaultMessage='總計' />
                                    </dt>
                                    <dd className="text-base font-medium text-gray-900">{calculateCost(3)}</dd>
                                </div>
                            </dl>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                >
                                    <FormattedMessage id='shoppingCart.checkout' defaultMessage='前往結帳' />
                                </button>
                            </div>
                        </section>
                    </form>
                }

                {/* Related products */}
                {!relatedProducts.length ? null :
                    <section aria-labelledby="related-heading" className="mt-24">
                        <h2 id="related-heading" className="text-lg font-medium text-gray-900">
                            <FormattedMessage id='shoppingCart.you_may_also_like' defaultMessage='你可能會喜歡' />
                            &hellip;
                        </h2>

                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {relatedProducts.map((relatedProduct) => (
                                <div key={relatedProduct.intl_id} className="group relative">
                                    <div className="w-full min-h-56 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-56 lg:aspect-none">
                                        <ProductImg
                                            img={relatedProduct}
                                            className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href={`/shop/detail/${relatedProduct}`}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    <FormattedMessage id={`shop.products.${relatedProduct}`} defaultMessage={productsData[relatedProduct].name} />
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="">
                                        <span className='mr-1 text-sm font-medium text-gray-900'>NT $</span>
                                        <span className='text-sm font-medium text-gray-900'>{numberWithCommas(productsData[relatedProduct].price)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                }
            </main>

            <BaseModal
                show={showRemoveModal}
                onHide={closeModal}
            >
                <div className=''>
                    <div className='mb-8'>
                        <span className='mr-4'>
                            <FormattedMessage id='shoppingCart.are_you_sure_you_want_to_remove' defaultMessage='是否確定要移除' />
                        </span>
                        <span>{removeItem.name}</span>
                    </div>

                    <div className='flex justify-end'>
                        <button
                            className='rounded-md bg-gray-600 bg-opacity-90 px-4 py-2 mr-2  text-sm font-medium text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
                            onClick={closeModal}
                        >
                            <FormattedMessage id='global.cancel' defaultMessage='取消' />
                        </button>
                        <button
                            className='rounded-md bg-blue-600 bg-opacity-90 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
                            onClick={() => {
                                setCount(removeItem.productIdx)(0)
                                setRemoveItem({})
                                setShowRemoveModal(false)
                            }}
                        >
                            <FormattedMessage id='global.ok' defaultMessage='確定' />
                        </button>
                    </div>
                </div>

            </BaseModal>
        </div>
    )
}

export default ShoppingCartPage;