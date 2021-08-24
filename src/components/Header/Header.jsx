import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { matchPath } from 'react-router'
import Navbar from '../../containers/Header/Navbar'
import data from './nav.json'
import categoriesData from '../Shop/categories.json'
import cateData from '../Shop/categories.json'
import NavIcon from '../../containers/Header/NavIcon'
import NavSearch from './NavSearch'
import NavMenuBtn from './NavMenuBtn'
import Profile from './Profile'
import ProfileMobileMenu from './ProfileMobileMenu'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, XIcon as XIconOutline } from '@heroicons/react/outline'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XIcon as XIconSolid } from '@heroicons/react/solid'
import ProductImg from '../Shop/ProductImg'
import { FormattedMessage } from 'react-intl';

const Header = (props) => {
    const {
        cart,
        push,
    } = props

    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white sticky top-0 z-10">

            {/* 手機 menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XIconOutline className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="py-4 space-y-8">
                                    <div className="px-4 grid grid-cols-2 gap-x-4">
                                        {data.preview_list.map((preview) => (
                                            <div key={preview.cat_sid} className="group relative text-sm">
                                                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                    <div className='border'>
                                                        <ProductImg img={preview.img} className="object-center object-cover rounded-lg p-1 bg-white" />
                                                    </div>
                                                </div>
                                                <Link
                                                    to={preview.href}
                                                    className="mt-6 block font-medium text-gray-900"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                    {/* {preview.name} */}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>

                                    {data.navList.map((nav) => (
                                        nav.name_intl !== 'zhen_series' ? null :
                                            <div key={nav.id}>
                                                <p className="px-4 mb-4 font-bold text-gray-900">
                                                    <FormattedMessage id={`nav.${nav.name_intl}`} />
                                                </p>
                                                <ul
                                                    role="list"
                                                    className="mt-2 flex flex-col"
                                                >
                                                    {categoriesData.categories.map((cate) => (
                                                        <li key={cate.cats_sid} className="flow-root">
                                                            <Link
                                                                to={`/shop/${cate.cats_sid}`}
                                                                className="px-4 py-2 block text-gray-500 hover:bg-blue-400 hover:text-white"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                <FormattedMessage id={`shop.categories.${cate.intl_id}`} />
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                    ))}
                                </div>
                            </Tab.Group>

                            {/* side nav */}
                            <div className="py-4 border-t border-gray-200">
                                {data.navList.map((nav) => (
                                    nav.sections.length ? null :
                                        <div key={nav.id}>
                                            <Link
                                                to={nav.to}
                                                className="px-4 py-2 block font-medium text-gray-900 hover:bg-blue-400 hover:text-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                <FormattedMessage id={`nav.${nav.name_intl}`} />
                                            </Link>
                                        </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                <div className="flow-root">
                                    <Link
                                        to="login"
                                        className="-m-2 p-2 block font-medium text-gray-900"
                                        onClick={() => setOpen(false)}
                                    >
                                        <FormattedMessage id='nav.sign_in' defaultMessage='登入' />
                                    </Link>
                                </div>
                                <div className="flow-root">
                                    <Link
                                        to="create_account"
                                        className="-m-2 p-2 block font-medium text-gray-900"
                                        onClick={() => setOpen(false)}
                                    >
                                        Create account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <nav aria-label="Top" className="max-w-7xl mx-auto px-2 sm:px-6">
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center">
                            <button
                                type="button"
                                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/">
                                    <NavIcon />
                                </Link>
                            </div>

                            <Navbar {...props} />

                            <div className="ml-auto flex items-center">
                                {/* 登入 */}
                                <div className="ml-4 hidden lg:flex lg:items-center lg:justify-end">
                                    <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        <FormattedMessage id='nav.sign_in' defaultMessage='登入' />
                                    </Link>
                                </div>

                                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                                    <NavSearch />
                                </div>

                                {/* 多國語系 */}
                                <button className="mr-2 flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">globe</span>
                                    <Icon className='mr-2' icon='globe' />
                                    <span>
                                        <FormattedMessage id='nav.traditional_chinese' defaultMessage='繁體中文' />
                                    </span>
                                </button>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link to="/cart" className="group -m-2 p-2 flex items-center">
                                        <ShoppingCartIcon
                                            className="flex-shink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cart.length}</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    );
};

export default Header;