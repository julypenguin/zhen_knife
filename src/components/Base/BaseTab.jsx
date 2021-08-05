import React from 'react';
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { tabCompare } from 'lib/tabCompare'
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux'

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
    const dispatch = useDispatch();

    const isMatch = typeof compare === 'function' ? compare() : tabCompare({ to, extpath, exact, strict })

    const linkClass = classNames(
        'flex',
        'items-center',
        'px-4',
        'text-sm',
        'font-medium',
        'cursor-pointer',
        {
            'bg-black': isMatch,
            'text-white': isMatch,
            'bg-white': !isMatch,
            'text-black': !isMatch,
            'hover:text-white': !isMatch,
            'hover:bg-gray-300': !isMatch,

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
                <div
                    // to={to}
                    onClick={() => dispatch(push(to))}
                    className={linkClass}
                >
                    {children}
                </div>
            }
        </>
    );
};

export default BaseTab;