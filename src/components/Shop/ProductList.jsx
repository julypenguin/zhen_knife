import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import catData from './categories.json'
import productData from './products.json'
import ProductImg from './ProductImg'

const ProductList = ({
    match,
    push,
}) => {
    const cats_sid = Number(match.params.cats_sid) || 0
    const [newCatData] = catData.categories.filter(category => category.cats_sid === cats_sid)

    const gotoDetail = id => {
        push(`/shop/detail/${id}`)

    }

    return (
        <div className='pt-4'>
            <h1 className='text-4xl'>{newCatData.name}</h1>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {newCatData.product.map((id, i) => (
                    <li
                        key={i}
                        className="col-span-1 bg-white rounded-lg divide-gray-200 cursor-pointer flex flex-col"
                    >
                        <div className="w-full flex items-center justify-between p-6 space-x-6 flex-1">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3">
                                    <div className="text-gray-900 text-sm font-medium">
                                        {!productData[id] ? null :
                                            <>
                                                <div
                                                    className='w-full flex justify-center'
                                                    onClick={() => gotoDetail(id)}
                                                >
                                                    <div className='relative w-56 pt-56'>
                                                        <ProductImg
                                                            img={productData[id].detail && productData[id].detail.product_img && productData[id].detail.product_img[0]}
                                                        />
                                                    </div>

                                                </div>

                                                <h3
                                                    className='text-lg text-center'
                                                    onClick={() => gotoDetail(id)}
                                                >
                                                    <FormattedMessage id={`shop.products.${productData[id].intl_id}`} />
                                                </h3>

                                                <h3
                                                    className='text-center text-red-600'
                                                    onClick={() => gotoDetail(id)}
                                                >
                                                    <span className='mr-2 text-xl'>NT$</span>
                                                    <span className='text-xl'>{productData[id].price}</span>
                                                </h3>
                                            </>
                                        }
                                    </div>
                                    {/* <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">Admin</span> */}
                                </div>
                                {/* <p className="mt-1 text-gray-500 text-sm truncate">Regional Paradigm Technician</p> */}
                            </div>
                        </div>

                        <div className=''>
                            {/* <div className='flex-1'></div> */}
                            <div className="flex-auto flex space-x-3 mt-4">
                                <button className="w-1/2 flex items-center justify-center rounded-md bg-gray-700 hover:bg-black text-white p-2" type="submit">
                                    <FormattedMessage id='shop.buy_now' />
                                </button>
                                <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300 p-2 hover:bg-gray-50" type="button">
                                    <FormattedMessage id='shop.add_to_bag' />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}




            </ul>
        </div>
    );
};

export default ProductList;