import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { matchPath } from 'react-router'
import Tab from '../Base/Tab'
import Navbar from '../../containers/Header/Navbar'
import data from './data.json'
import NavIcon from '../../containers/Header/NavIcon'
import NavSearch from './NavSearch'
import NavMenuBtn from './NavMenuBtn'
import Profile from './Profile'
import ProfileMobileMenu from './ProfileMobileMenu'


import { Popover, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    QuestionMarkCircleIcon,
    ReplyIcon,
    SparklesIcon,
    TrashIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Messaging',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: AnnotationIcon,
    },
    { name: 'Live Chat', description: "Your customers' data will be safe and secure.", href: '#', icon: ChatAlt2Icon },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]

const Header = (props) => {
    const {
        push,
    } = props

    const [showProfileDropdown, setShowProfileDropdown] = useState(false)

    return (
        <header className="bg-white">

            <nav className="shadow sticky top-0 z-10" onClick={() => setShowProfileDropdown(false)}>
                <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-16">
                    <div className="flex justify-between h-16">
                        <div className="flex px-2 lg:px-0">
                            <NavIcon />
                            {/* <div onClick={() => push('/')}>首頁</div>
                        <div onClick={() => push('/SS-01BG')}>限時搶購活動</div> */}
                            <Navbar {...props} />
                        </div>
                        <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                            <NavSearch />
                        </div>
                        <NavMenuBtn
                            showProfileDropdown={showProfileDropdown}
                            setShowProfileDropdown={setShowProfileDropdown}
                        />

                        <div className="hidden xl:ml-4 xl:flex xl:items-center select-none">

                            {/* 多國語系 */}
                            <button className="mr-2 flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">globe</span>
                                {/* Heroicon name: bell */}
                                {/* <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg> */}

                                <Icon className='mr-2' icon='globe' />
                                <span>繁體中文</span>
                            </button>

                            {/* 購物車 */}
                            <button className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none">
                                <span className="sr-only">shop car</span>
                                {/* Heroicon name: bell */}
                                {/* <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg> */}

                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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

        </header>
    );
};

export default Header;