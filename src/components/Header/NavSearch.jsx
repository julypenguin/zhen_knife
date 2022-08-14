import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { SearchIcon } from '@heroicons/react/outline'

const NavSearch = ({
    intl,
}) => {

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        search: getIntlMsg('global.search', '搜尋'),
    }

    return (
        <div className="max-w-lg w-full lg:max-w-xs">
            <label htmlFor="search" className="sr-only">
                <FormattedMessage id='global.search' />
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder={msgintl.search}
                    type="search"
                    autoComplete='false'
                />
            </div>
        </div>
    );
};

export default injectIntl(NavSearch);