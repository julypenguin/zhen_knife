import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import data from './categories.json'

const LeftSidebar = ({
    push,
    intl,
}) => {

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        search: getIntlMsg('global.search', '搜尋'),
        product_categories: getIntlMsg('shop.product_categories', '商品分類'),
    }

    return (
        <div className='left-sidebar'>
            {/* 搜尋 */}
            <form className='relative'>
                <svg width="20px" height="20px" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                {/* <Icon icon='search' className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/> */}
                <input
                    className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                    type="text"
                    aria-label="Filter projects"
                    placeholder={`${msgintl.search}...`}
                />
            </form>
            {/* 商品分類 */}
            <div className='py-6 text-lg font-bold pl-4'>{msgintl.product_categories}</div>

            {/* 類別 */}
            <ul className="list-disc space-y-3 pl-4">
                {data.categories.map(category => (
                    <li key={category.cats_sid} className="flex items-start select-none text-blue-600 hover:text-black">
                        <p className="cursor-pointer" onClick={() => push(`/shop${!category.cats_sid ? '' : `/${category.cats_sid}`}`)}>
                            {`${category.name} (${category.product.length})`}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default injectIntl(LeftSidebar);