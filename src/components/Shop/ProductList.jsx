import React, { useEffect, useRef } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import catData from './categories.json'
import productData from './products.json'
import ProductImg from './ProductImg'

const ProductList = ({
    match,
    push,
}) => {
    const UlRef = useRef()

    const cats_sid = Number(match.params.cats_sid) || 0
    const [newCatData] = catData.categories.filter(category => category.cats_sid === cats_sid)

    const gotoDetail = id => {
        push(`/shop/detail/${id}`)

    }

    useEffect(() => {
        UlRef.current.scrollTo(0, 0)
    }, [cats_sid])

    return (
        <div className='relative h-full pl-4'>
            <h1 className='text-lg font-bold'>{newCatData.name}</h1>
            <ul
                className="pr-12 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 absolute h-full overflow-auto scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                ref={UlRef}
            >
                {newCatData.product.map((id, i) => (
                    <li
                        key={i}
                        className="col-span-1 bg-white rounded-lg divide-gray-200 cursor-pointer flex flex-col"
                        style={{ maxHeight: '400px' }}
                    >
                        <div className="w-full flex flex-1">
                            <div className="text-gray-900 text-sm font-medium flex flex-col justify-between">
                                {!productData[id] ? null :
                                    <>
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
                                            {productData[id].discount &&
                                                <span className='mr-4 text-yellow-600 line-through'>
                                                    <span className='mr-2 text-xl'>NT$</span>
                                                    <span className='text-xl'>{productData[id].discount}</span>
                                                </span>
                                            }
                                            <span>
                                                <span className='mr-2 text-xl'>NT$</span>
                                                <span className='text-xl'>{productData[id].price}</span>
                                            </span>
                                        </h3>
                                    </>
                                }
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