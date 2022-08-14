import React from 'react';
import { matchPath } from 'react-router'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'
import classnames from 'classnames'

const Tab = ( {
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

    const tabCompare = () => {
        const path = typeof to === 'object' ? to.pathname : to

        if (Array.isArray(extpath)) {
            for (let i = 0; i < extpath.length; i++) {
                const res = matchPath(location.pathname, { path: extpath[i], exact, strict })
                if (res) return true
            }
        }
        return matchPath(location.pathname, { path, exact, strict })
    }

    const isMatch = typeof compare === 'function' ? compare() : tabCompare()
    const linkClass = classnames('tab', { 'tab-clickable': !isMatch  }, className)

    return (
        <li className={linkClass} key={index}>
            {isMatch ?
                <span>{children}</span>
                :
                <NavLink to={to} {...otherProps}>{children}</NavLink>
            }
        </li>
    );
};

export default Tab;