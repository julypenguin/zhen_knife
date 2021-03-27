import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import Counter from './Counter'
import ProductImg from './ProductImg'
import productData from './products.json'
import kh_01 from '../../img/kh_01/kh_01.jpg'

const ProductDetail = ({
    match,
}) => {
    const intl_id = match.params.intl_id || ''
    const data = productData[intl_id]
    const detail = (data && data.detail) || ''

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

    if (!data) return '找不到資料'

    return (
        <div>
            <div className="flex pt-4 flex-wrap">
                <div className="flex-none w-96 pt-96 relative">
                    <ProductImg
                        img={detail.product_img && detail.product_img[0]}
                    />
                    {/* <img src='' alt="" className="absolute inset-0 w-full h-full object-cover" /> */}
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
                        {/* <div className="space-x-2 flex">
                        <label>
                            <input className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg" name="size" type="radio" value="xs" checked />
                                XS
                        </label>
                        <label>
                            <input className="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="s" />
                                    S
                            </label>
                        <label>
                            <input className="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="m" />
                                        M
                                </label>
                        <label>
                            <input className="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="l" />
                                            L
                                    </label>
                        <label>
                            <input className="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="xl" />
                                                XL
                                        </label>
                    </div> */}
                        {/* <div className="ml-auto text-sm text-gray-500 underline">Size Guide</div> */}
                    </div>
                    <div className='flex-1'></div>
                    <div className="flex space-x-3 mb-4 text-sm font-medium">
                        <Counter />
                        <div className="flex-auto flex space-x-3">
                            <button className="w-1/2 flex items-center justify-center rounded-md bg-gray-700 hover:bg-black text-white p-2" type="submit">
                                <FormattedMessage id='shop.buy_now' />
                            </button>
                            <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-50" type="button">
                                <FormattedMessage id='shop.add_to_bag' />
                            </button>
                        </div>
                        {/* <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                        <svg width="20" height="20" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button> */}
                    </div>
                    <p className="text-md text-red-500 font-bold">
                        <FormattedMessage id='shop.detail.bid_not_mean_deal_must_be_confirmed_by_seller' />
                    </p>
                </form>
            </div>

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

            <div className='px-8'>
                {detail.desc_list.map((desc, i) => (
                    <div key={i} className='pb-1'>
                        <FormattedMessage id={`shop.detail.${desc.desc_intl}`} />
                    </div>
                ))}
            </div>

            <div className='p-8 flex items-center flex-wrap flex-col'>
                {detail.marketing_img.map(img => (
                    <div key={img} className="flex-none w-96 pt-96 sm:w-144 sm:pt-144 md:w-176 md:pt-176 relative">
                        <ProductImg
                            img={img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetail;