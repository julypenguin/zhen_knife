import React from 'react';
import classnames from 'classnames';
import { injectIntl, FormattedMessage } from 'react-intl'
import data from './categories.json'
import market_17 from '../../img/market_17.jpg'
import ProductImg from './ProductImg'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'


const LeftSidebarCopy = ({
    match,
    push,
}) => {
    const [all_series] = data.categories.filter(category => category.cats_sid === 0)

    const cats_sid = Number(match.params.cats_sid) || 0

    return (
        <div className='hidden lg:block'>
            {/* 商品分類 */}
            <div className='text-lg font-bold mx-2 py-1 mb-4 bg-gray-200 text-center'>
                <FormattedMessage id='shop.product_categories' />
            </div>

            <ul className="mb-4 select-none">
                <li
                    className="ml-3 mb-2 pb-2 flex items-center cursor-pointer hover:text-blue-500 rounded-md border-b-2"
                    onClick={() => push(`/shop`)}
                >
                    <div className="">
                        <p className="">
                            <span className='mr-1 text-lg font-bold'>
                                <FormattedMessage id={`shop.categories.${all_series.intl_id}`} />
                            </span>
                            <Icon icon='caret-down' />
                        </p>
                    </div>
                </li>

                {data.categories.map(category => (
                    !category.main || !category.cats_sid ? null :
                        <li
                            key={category.cats_sid}
                            className={classnames("px-4 py-1 flex items-center cursor-pointer rounded-md ", {
                                "hover:bg-blue-400 hover:text-white": category.cats_sid !== cats_sid,
                                "bg-blue-500 text-white": category.cats_sid === cats_sid,
                            })}
                            onClick={() => push(`/shop${!category.cats_sid ? '' : `/${category.cats_sid}`}`)}
                        >
                            {/* <img className="h-10 w-10 rounded-full" src={market_17} alt="" /> */}
                            <div className="ml-3">
                                <p className="text-base font-medium">
                                    <FormattedMessage id={`shop.categories.${category.intl_id}`} />
                                </p>
                                {/* <p className="text-sm text-gray-500">calvin.hawkins@example.com</p> */}
                            </div>
                        </li>
                ))}
            </ul>

            <ul className="select-none cursor-auto">
                <li
                    className="ml-3 mb-2 pb-2 flex items-center rounded-md border-b-2"
                >
                    <div className="">
                        <p className="text-lg font-bold">
                            <FormattedMessage id={`shop.categories.other_categories`} />
                        </p>
                    </div>
                </li>

                {data.categories.map(category => (
                    category.main ? null :
                        <li
                            key={category.cats_sid}
                            className={classnames("px-4 py-1 flex items-center cursor-pointer rounded-md", {
                                "hover:bg-blue-400 hover:text-white": category.cats_sid !== cats_sid,
                                "bg-blue-500 text-white": category.cats_sid === cats_sid,
                            })}
                            onClick={() => push(`/shop${!category.cats_sid ? '' : `/${category.cats_sid}`}`)}
                        >
                            {/* <img className="h-10 w-10 rounded-full" src={market_17} alt="" /> */}
                            <div className="ml-3">
                                <p className="text-base font-medium">
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