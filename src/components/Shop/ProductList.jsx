import React, { useEffect, useRef, useState } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import catData from './categories.json'
import productData from './products.json'
import ProductImg from './ProductImg'
import Pagination from '../Pagination/Pagination'
import { numberWithCommas } from 'lib/numberWithCommas'
import { htmlScrollIntoView } from 'lib/scroll'
import BaseModal from '../Base/BaseModal'

const ProductList = ({
    match,
    cart,
    updateCart,
    push,
}) => {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(12)
    const [showAddCartModal, setShowAddCartModal] = useState(false)

    const ulRef = useRef()

    const qs = new URLSearchParams(window.location.search)
    const qs_obj = {}
    qs.forEach((val, name) => {
        qs_obj[name] = val
    })

    const cats_sid = Number(match.params.cats_sid) || 0
    const [category] = catData.categories
        .filter(category => category.cats_sid === cats_sid)

    const newCatData = JSON.parse(JSON.stringify(category || { product: [] }))
    const newProductList = newCatData.product.filter(id => qs_obj.search ? productData[id].name.includes(qs_obj.search) : true)

    newCatData.product = newProductList

    const addCart = (data, count = 1) => {
        const haveAlready = !!cart.filter(bag => bag.cat_sid === data.cat_sid).length
        let newCart = [...cart]
        if (haveAlready) {
            newCart = newCart.map((bag) => {
                if (bag.cat_sid !== data.cat_sid) return bag
                return {
                    ...bag,
                    buyCount: bag.buyCount + count
                }
            })
        } else {
            newCart.push({
                ...data,
                buyCount: count,
            })
        }
        localStorage.setItem('cart', JSON.stringify(newCart))
        updateCart(newCart)
    }

    const gotoDetail = id => {
        push(`/shop/detail/${id}`)
    }

    const getdata = (page) => {
        setPage(page)
    }

    const formatData = (list) => {
        if (!Array.isArray(list)) return []
        const start = ((page - 1) * limit) + 1
        const end = (page) * limit
        const newList = list.slice(start - 1, end)
        return newList
    }

    const closeModal = () => {
        setShowAddCartModal(false)
    }

    const openModal = () => {
        setShowAddCartModal(true)
    }

    useEffect(() => {
        ulRef.current.scrollTo(0, 0)
    }, [cats_sid])

    useEffect(() => {
        setPage(1)
    }, [match.url])

    useEffect(() => {
        htmlScrollIntoView(true)
    }, [page])

    return (
        <div className='relative h-full pl-4'>
            <BaseModal
                show={showAddCartModal}
                onHide={closeModal}
                size='xs'
                timeout={1000}
            >
                <div className='flex justify-center items-center'>
                    <FormattedMessage id='shop.result.add_success' defaultMessage='加入成功' />
                </div>
            </BaseModal>
            <h1 className='text-lg font-bold'>{newCatData.name}</h1>
            {/* absolute h-full overflow-auto scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 */}
            <ul
                className="pr-12 mb-12 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                ref={ulRef}
            >
                {!newCatData.product.length ?
                    < div className='mt-8 col-span-3 mx-auto'>
                        <FormattedMessage id='shop.item_not_found' defaultMessage='找不到商品' />
                        ...
                    </div>
                    :
                    formatData(newCatData.product).map((id, i) => (
                        !productData[id] ? null :
                            <li
                                key={i}
                                className="col-span-1 bg-white rounded-lg divide-gray-200 cursor-pointer flex flex-col"
                                style={{ maxHeight: '400px' }}
                            >
                                <div className="w-full flex flex-1">
                                    <div className="text-gray-900 text-sm font-medium flex flex-col justify-between">
                                        <div>
                                            <div
                                                className='w-full flex justify-center mb-4'
                                                onClick={() => gotoDetail(id)}
                                            >
                                                <div className='relative w-56 pt-56'>
                                                    <ProductImg
                                                        img={productData[id].detail && productData[id].detail.product_img && productData[id].detail.product_img[0]}
                                                    />
                                                    {productData[id].discount &&
                                                        <span className="flex-shrink-0 inline-block py-2 px-4 text-white text-sm font-medium bg-black absolute top-0 right-0">
                                                            <FormattedMessage id='shop.discount' />
                                                        </span>
                                                    }
                                                </div>

                                            </div>

                                            <h3
                                                className='text-lg text-center'
                                                onClick={() => gotoDetail(id)}
                                            >
                                                <FormattedMessage id={`shop.products.${productData[id].intl_id}`} />
                                            </h3>
                                        </div>

                                        <h3
                                            className='text-center text-red-600'
                                            onClick={() => gotoDetail(id)}
                                        >
                                            <span className={`mr-4 ${!productData[id].discount ? '' : 'text-yellow-600 line-through'}`}>
                                                <span className='text-xl'>NT$</span>
                                                <span className='text-xl'>{numberWithCommas(productData[id].price)}</span>
                                            </span>

                                            {productData[id].discount &&
                                                <span className=''>
                                                    <span className='text-xl'>NT$</span>
                                                    <span className='text-xl'>{numberWithCommas(productData[id].discount)}</span>
                                                </span>
                                            }
                                        </h3>
                                    </div>
                                </div>

                                <div className=''>
                                    {/* <div className='flex-1'></div> */}
                                    <div className="flex-auto flex space-x-3 mt-4">
                                        <button
                                            className="w-1/2 flex items-center justify-center rounded-md bg-gray-700 hover:bg-black text-white p-2"
                                            type="submit"
                                            onClick={() => {
                                                addCart(productData[id])
                                                push('/cart')
                                            }}
                                        >
                                            <FormattedMessage id='shop.buy_now' defaultMessage='直接結帳' />
                                        </button>
                                        <button
                                            className="w-1/2 flex items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-50"
                                            type="button"
                                            onClick={() => {
                                                addCart(productData[id])
                                                openModal()
                                            }}
                                        >
                                            <FormattedMessage id='shop.add_to_bag' defaultMessage='加入購物車' />
                                        </button>
                                    </div>
                                </div>
                            </li>
                    ))}

            </ul >

            {/* 翻頁 */}
            < Pagination
                count={newCatData.product.length}
                limit={limit}
                page={page}
                length={10}
                getdata={getdata}
            />

        </div >
    );
};

export default ProductList;