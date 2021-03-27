import React from 'react';
import classNames from 'classnames'
import { injectIntl, FormattedMessage } from 'react-intl'
import data from './data.json'
import BaseMobileTab from '../Base/BaseMobileTab'
import { NavLink } from 'react-router-dom'

// TODO - dropdown 內容實作

const ProfileMobileMenu = ({
    showProfileDropdown,
    setShowProfileDropdown,
}) => {

    return (
        <>
            {showProfileDropdown &&
                <div className="block xl:hidden z-10">
                    <div className="pt-2 pb-3 space-y-1">
                        {data.navList.map((nav, i) => (
                            <BaseMobileTab
                                key={i}
                                exact={nav.exact}
                                to={nav.to}
                                strict={nav.strict}
                                handleClick={setShowProfileDropdown}
                            >
                                <FormattedMessage id={`nav.${nav.intl_name}`} />
                            </BaseMobileTab>
                        ))}
                    </div>

                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">Tom Cook</div>
                                <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                            </div>
                            <button className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">View notifications</span>
                                {/* Heroicon name: bell */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-3 space-y-1">
                            <NavLink to="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Your Profile</NavLink>
                            <NavLink to="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Settings</NavLink>
                            <NavLink to="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign out</NavLink>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ProfileMobileMenu;