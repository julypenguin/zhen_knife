import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import Counter from './Counter'
import ProductImg from './ProductImg'
import productData from './products.json'
import noticeData from './notice.json'
import BaseModal from '../Base/BaseModal'

const ProductDetail = ({
    match,
    cart,
    updateCart,
    push,
}) => {
    const [count, setCount] = useState(1)
    const [showAddCartModal, setShowAddCartModal] = useState(false)

    const intl_id = match.params.intl_id || ''
    const data = productData[intl_id]
    const detail = (data && data.detail) || ''

    const addCart = () => {
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

    const returnDetailDesc = ({ id, data, intl }) => {
        if (!data && !intl) return null

        return (
            <div className='pb-1'>
                <FormattedMessage id={`shop.${id}`} />
                <span className='px-2'>:</span>
                {intl ?
                    <FormattedMessage id={`shop.detail.${intl}`} />
                    :
                    <span>{data}</span>
                }
            </div>
        )
    }

    const closeModal = () => {
        setShowAddCartModal(false)
    }

    const openModal = () => {
        setShowAddCartModal(true)
    }

    if (!data) return <FormattedMessage id='shop.no_information_found' defaultMessage='找不到資料' />

    return (
        <div>
            <div className="flex pt-4 flex-wrap">
                <div className="flex-none w-96 pt-96 relative">
                    <ProductImg
                        img={detail.product_img && detail.product_img[0]}
                    />
                </div>
                <form className="flex-auto p-6 flex flex-col content-between w-full lg:w-auto">
                    <div className="">
                        <h1 className="flex-auto text-xl font-semibold pb-4">
                            {
                                <FormattedMessage id={`shop.products.${data.intl_id}`} />
                            }
                        </h1>
                        <div className="text-xl font-semibold text-gray-500 pb-2">
                            <span className='mr-2'>NT$</span>
                            <span>{data.price}</span>
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                            {detail.desc_list.map((desc, i) => (
                                <div key={i}>
                                    {!desc.show ? null : <FormattedMessage id={`shop.detail.${desc.desc_intl}`} />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-baseline mt-4 mb-6">
                    </div>
                    <div className='flex-1'></div>
                    <div className="flex text-sm font-medium flex-wrap">
                        <Counter
                            handleCount={setCount}
                        />
                        <div className="flex-auto flex space-x-3 mb-4">
                            <button
                                className="flex items-center justify-center rounded-md bg-gray-700 hover:bg-black text-white px-3 py-2"
                                type="button"
                                onClick={() => {
                                    addCart()
                                    push('/cart')
                                }}
                            >
                                <FormattedMessage id='shop.buy_now' defaultMessage='直接結帳' />
                            </button>
                            <button
                                className="flex items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-50"
                                type="button"
                                onClick={() => {
                                    addCart()
                                    openModal()
                                }}
                            >
                                <FormattedMessage id='shop.add_to_bag' defaultMessage='加入購物車' />
                            </button>
                        </div>
                    </div>
                    <p className="text-md text-red-500 font-bold">
                        <FormattedMessage id='shop.detail.bid_not_mean_deal_must_be_confirmed_by_seller' />
                    </p>
                </form>
            </div>

            {/* 規格前描述 */}
            {detail.desc && <div className='px-8 mt-8 text-lg'>
                <FormattedMessage id={`shop.detail.${detail.desc_intl}`} defaultMessage={detail.desc} />
            </div>}


            {/* 詳細介紹 */}
            <div className='p-8'>
                {/* 品名 */}
                {returnDetailDesc({ id: 'name', intl: detail.name_intl })}

                {/* 型號 */}
                {returnDetailDesc({ id: 'id', data: detail.id })}

                {/* 用途 */}
                {returnDetailDesc({ id: 'use', intl: detail.use_intl })}

                {/* 刃長 */}
                {returnDetailDesc({ id: 'blade_length', data: detail.blade_length })}

                {/* 全長 */}
                {returnDetailDesc({ id: 'total_length', data: detail.total_length })}

                {/* 刀寬 */}
                {returnDetailDesc({ id: 'blade_width', data: detail.blade_width })}

                {/* 厚度 */}
                {returnDetailDesc({ id: 'thickness', data: detail.thickness })}

                {/* 重量 */}
                {returnDetailDesc({ id: 'weight', data: detail.weight })}

                {/* 鋼材 */}
                {returnDetailDesc({ id: 'steel', intl: detail.steel_intl })}

                {/* 握柄 */}
                {returnDetailDesc({ id: 'handle', intl: detail.handle_intl })}

                {/* 材質 */}
                {returnDetailDesc({ id: 'material', intl: detail.material_intl })}

                {/* 色系 */}
                {returnDetailDesc({ id: 'color', intl: detail.color_intl })}
            </div>

            {/* 同標題描述 */}
            <div className='px-8'>
                {detail.desc_list.map((desc, i) => (
                    <div key={i} className='pb-1'>
                        <FormattedMessage id={`shop.detail.${desc.desc_intl}`} />
                    </div>
                ))}
            </div>

            {noticeData[detail.show_notice] &&
                <div className='px-8 mt-8 text-red-500'>
                    <div className='font-bold text-xl'>
                        <span className='mr-1'>※</span>
                        <FormattedMessage id='shop.notice.notice' defaultMessage='注意事項' />
                        <span className='ml-1'>※</span>
                    </div>

                    {noticeData[detail.show_notice].map((notice, i) => (
                        notice.show && <div key={i} className='pt-1 text-red-500'>
                            <span className='mr-1'>{i + 1}.</span>
                            <FormattedMessage id={`shop.notice.${notice.notice_intl}`} />
                        </div>
                    ))}
                </div>
            }

            {detail.note_list.length &&
                <div className='px-8 mt-8 text-red-500'>

                </div>
            }

            <div className='p-8 flex items-center flex-wrap flex-col'>
                {detail.marketing_img.map(img => (
                    <div key={img} className="flex-none w-96 pt-96 sm:w-144 sm:pt-144 md:w-176 md:pt-176 relative">
                        <ProductImg
                            img={img}
                        />
                    </div>
                ))}
            </div>

            <BaseModal
                show={showAddCartModal}
                onHide={closeModal}
                size='xs'
                timeout={500}
            >
                <div className='flex justify-center items-center'>
                    <FormattedMessage id='shop.result.add_success' defaultMessage='加入成功' />
                </div>
            </BaseModal>
        </div>
    );
};

export default ProductDetail;