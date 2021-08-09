import React from 'react';
import classNames from 'classNames'
import { injectIntl, FormattedMessage } from 'react-intl'
import { tabCompare } from 'lib/tabCompare'

const ShoppingProcessMenu = ({
    nav,
    intl_name,
    to,
    exact,
    strict,
    extpath,
    handleClick,
}) => {

    const isMatch = tabCompare({ to, extpath, exact, strict })

    return (
        <li
            className={classNames('flex justify-center py-2 px-8 cursor-pointer transition-all select-none text-xl lg:justify-start', {
                'bg-black': isMatch,
                'text-white': isMatch,
                'hover:bg-gray-700': !isMatch,
                'hover:text-white': !isMatch,
                'hover:duration-200': !isMatch,
            })}
            onClick={handleClick}
        >
            <FormattedMessage id={`shoppingProcess.list.${intl_name}`} />
        </li>
    );
};

export default ShoppingProcessMenu;