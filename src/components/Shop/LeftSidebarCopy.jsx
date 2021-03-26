import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import data from './categories.json'
import market_17 from '../../img/market_17.jpg'

const LeftSidebarCopy = ({
    push,
}) => {
    return (
        <div>
            {/* 商品分類 */}
            <div className='text-lg font-bold pl-4 pb-4'>
                <FormattedMessage id='shop.product_categories' />
            </div>

            <ul className="divide-y divide-gray-200">
                {data.categories.map(category => (
                    <li key={category.cats_sid} className="p-4 flex items-center cursor-pointer hover:bg-gray-200 rounded-md" onClick={() => push(`/shop${!category.cats_sid ? '' : `/${category.cats_sid}`}`)}>
                        <img className="h-10 w-10 rounded-full" src={market_17} alt="" />
                        <div className="ml-3">
                            <p className="text-sm font-medium text-blue-500 hover:text-black">
                                <FormattedMessage id={`shop.categories.${category.intl_id}`} />
                            </p>
                            {/* <p className="text-sm text-gray-500">calvin.hawkins@example.com</p> */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftSidebarCopy;