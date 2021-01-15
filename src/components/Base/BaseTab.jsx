import React from 'react';
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { tabCompare } from 'lib/tabCompare'

const BaseTab = ({
    location,
    to,
    exact,
    strict,
    extpath,
    className,
    compare,
    children,
    index,
    ...otherProps
}) => {
    const isMatch = typeof compare === 'function' ? compare() : tabCompare({ to, extpath, exact, strict })

    const linkClass = classNames(
        'inline-flex',
        'items-center',
        'px-1',
        'pt-1',
        'border-b-2',
        'text-sm',
        'font-medium',
        'transition-all',
        {
            'border-indigo-500': isMatch,
            'text-gray-900': isMatch,
            'border-transparent': !isMatch,
            'text-gray-500': !isMatch,
            'hover:border-gray-300': !isMatch,
            ' hover:text-gray-700': !isMatch,
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
                >
                    {children}
                </NavLink>
            }
        </>
    );
};

export default BaseTab;