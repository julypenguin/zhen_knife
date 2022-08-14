import React from 'react';
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { tabCompare } from 'lib/tabCompare'

const BaseMobileTab = ({
    location,
    to,
    exact,
    strict,
    extpath,
    className,
    compare,
    handleClick,
    children,
    index,
    ...otherProps
}) => {
    const isMatch = typeof compare === 'function' ? compare() : tabCompare({ to, extpath, exact, strict })

    const linkClass = classnames(
        'block',
        'pl-3',
        'pr-4',
        'py-2',
        'border-l-4',
        'text-base',
        'font-medium',
        {
            'bg-indigo-50': isMatch,
            'border-indigo-500': isMatch,
            'text-indigo-700': isMatch,
            'border-transparent': !isMatch,
            'text-gray-600': !isMatch,
            'hover:bg-gray-50': !isMatch,
            'hover:border-gray-300': !isMatch,
            'hover:text-gray-800': !isMatch,
        },
        className
    )

    return (
        <>
            {isMatch ?
                <span
                    className={linkClass}
                >
                    {children}
                </span>
                :
                <NavLink
                    to={to}
                    className={linkClass}
                    onClick={() => typeof handleClick === 'function' ? handleClick() : {}}
                >
                    {children}
                </NavLink>

            }
        </>
    );
};

export default BaseMobileTab;