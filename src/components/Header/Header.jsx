import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { matchPath } from 'react-router'
import Tab from '../Base/Tab'
import Navbar from '../../containers/Header/Navbar'
import data from './data.json'
import NavIcon from './NavIcon'
import NavSearch from './NavSearch'
import NavMenuBtn from './NavMenuBtn'
import Profile from './Profile'
import ProfileMobileMenu from './ProfileMobileMenu'

const Header = (props) => {
    const {
        push,
    } = props

    const [showProfileDropdown, setShowProfileDropdown] = useState(false)

    return (
        <nav className="bg-white shadow">
            <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-16">
                <div className="flex justify-between h-16">
                    <div className="flex px-2 lg:px-0">
                        <NavIcon />
                        <Navbar {...props} />
                    </div>
                    <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                        <NavSearch />
                    </div>
                    <NavMenuBtn
                        setShowProfileDropdown={setShowProfileDropdown}
                    />

                    <div className="hidden lg:ml-4 lg:flex lg:items-center">
                        <button className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">View notifications</span>
                            {/* Heroicon name: bell */}
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                        {/* Profile dropdown */}
                        <Profile
                            showProfileDropdown={showProfileDropdown}
                            setShowProfileDropdown={setShowProfileDropdown}
                        />

                    </div>
                </div>
            </div>

            <ProfileMobileMenu
                showProfileDropdown={showProfileDropdown}
                setShowProfileDropdown={setShowProfileDropdown}
            />
        </nav>
    );
};

export default Header;