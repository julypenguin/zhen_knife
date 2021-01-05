import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import data from './product.json'

const LeftSidebar = ({
    push,
    intl,
}) => {

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        search: getIntlMsg('global.search', '搜尋'),
        categories: getIntlMsg('shop.categories', '商品分類'),
    }

    return (
        <div className='left-sidebar'>
            {/* 搜尋 */}
            <input
                className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                type="text"
                aria-label="Filter projects"
                placeholder={`${msgintl.search}...`}
            />
            {/* 商品分類 */}
            <div className='py-6'>{msgintl.categories}</div>

            {/* 類別 */}
            <ul className="list-disc space-y-1">
                {data.categories.map(category => (
                    <li key={category.cats_sid} className="flex items-start">
                        <p className="cursor-pointer" onClick={() => push('/shop/1234')}>
                            {`${category.name} (${category.product.length})`}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default injectIntl(LeftSidebar);