import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

// TODO - dropdown 內容實作

const Profile = ({
    className,
    showProfileDropdown,
    setShowProfileDropdown,
}) => {


    const dropDownClass = classNames(
        'origin-top-right',
        'absolute',
        'right-0',
        'mt-2',
        'w-48',
        'rounded-md',
        'shadow-lg',
        'py-1',
        'bg-white',
        'ring-1',
        'ring-black',
        'ring-opacity-5',
        'transition',
        'ease-out',
        'duration-75',
        'transform',
        'opacity-0',
        'scale-95',
        'z-10',
        {
            'transform': showProfileDropdown,
            'opacity-100': showProfileDropdown,
            'scale-100': showProfileDropdown,
        },
        className,
    )

    return (
        <div className="ml-4 relative flex-shrink-0">
            <div>
                <button
                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu"
                    aria-haspopup="true"
                    onClick={() => setShowProfileDropdown(true)}
                >
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
            </div>

            {/* 點擊畫面可以取消 dropdown */}
            {showProfileDropdown && ReactDOM.createPortal(
                <div className="fixed h-full w-full top-0" onClick={() => setShowProfileDropdown(false)} />,
                document.body
            )}

            <div
                className={dropDownClass}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
            >
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</NavLink>
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</NavLink>
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</NavLink>
            </div>
        </div>
    );
};

export default Profile;