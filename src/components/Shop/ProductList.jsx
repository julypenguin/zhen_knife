import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import catData from './categories.json'
import productData from './products.json'

const ProductList = ({
    match,
}) => {
    const cats_sid = Number(match.params.cats_sid) || 0
    const [newCatData] = catData.categories.filter(category => category.cats_sid === cats_sid)

    return (
        <div className='pt-4'>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {newCatData.product.map((id, i) => (
                    <li key={i} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                        <div className="w-full flex items-center justify-between p-6 space-x-6">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-gray-900 text-sm font-medium">
                                        {productData[id] &&
                                            <FormattedMessage id={`shop.products.${productData[id].intl_id}`} />
                                        }
                                    </h3>
                                    {/* <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">Admin</span> */}
                                </div>
                                <p className="mt-1 text-gray-500 text-sm truncate">Regional Paradigm Technician</p>
                            </div>
                        </div>

                        <div>

                        </div>
                    </li>
                ))}




            </ul>
        </div>
    );
};

export default ProductList;