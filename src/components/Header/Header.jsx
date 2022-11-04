import React, { useState, Fragment } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { matchPath } from 'react-router'
import { FormattedMessage } from 'react-intl';
import { getAuth, signOut } from "firebase/auth"
import Navbar from '../../containers/Header/Navbar'
import data from './nav.json'
import categoriesData from '../Shop/categories.json'
import cateData from '../Shop/categories.json'
import NavIcon from '../../containers/Header/NavIcon'
import NavSearch from '../../containers/Header/NavSearch'
import SettingLanguage from './SettingLanguage'
import Profile from './Profile'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ProductImg from '../Shop/ProductImg'

const Header = (props) => {
    const {
        cart,
        profile,
        updateProfile,
        push,
    } = props

    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [open, setOpen] = useState(false)

    const logOut = () => {
        const auth = getAuth();

        signOut(auth).then(() => {
            updateProfile({})
        }).catch((error) => {
            console.error(error)
        });
    }

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
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="py-4 space-y-8">
                                    <div className="px-4 grid grid-cols-2 gap-x-4">
                                        {data.preview_list.map((preview) => (
                                            <div key={preview.cat_sid} className="relative text-sm">
                                                <div
                                                    className="mb-4 rounded-lg bg-gray-100 overflow-hidden hover:opacity-75"
                                                    onClick={() => {
                                                        setOpen(false)
                                                        push(preview.href)
                                                    }}
                                                >
                                                    <div className='border'>
                                                        <ProductImg img={preview.img} className="object-center object-cover rounded-lg p-1 bg-white" />
                                                    </div>
                                                </div>
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

                            {!profile.email ? null
                                :
                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    <div className="flow-root">
                                        <span
                                            className='cursor-pointer -m-2 p-2 font-medium text-gray-900 hover:font-bold'
                                            onClick={logOut}
                                        >
                                            <FormattedMessage id='nav.log_out' defaultMessage='登出' />
                                        </span>
                                    </div>
                                </div>
                            }
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white border-b border-gray-200">
                <nav aria-label="Top" className="container mx-auto px-2 sm:px-6">
                    <div className="flex items-center">
                        <div className="h-16 flex items-center flex-1">
                            <button
                                type="button"
                                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-0 flex">
                                <Link to="/">
                                    <NavIcon />
                                </Link>
                            </div>

                            <div className='flex items-center h-full flex-1 group'>

                                <Navbar {...props} />

                                <div className="ml-auto flex items-center group-focus-within:flex-1">
                                    {/* 登入 */}
                                    <div className="ml-4 hidden lg:flex lg:items-center lg:justify-end group-focus-within:hidden">
                                        {!profile.email ?
                                            <Link to="/vip" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                <FormattedMessage id='nav.sign_in' defaultMessage='登入' />
                                            </Link>
                                            :
                                            <span
                                                className='cursor-pointer'
                                                onClick={logOut}
                                            >
                                                <FormattedMessage id='nav.log_out' defaultMessage='登出' />
                                            </span>
                                        }
                                    </div>

                                    <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                                        <NavSearch />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* 多國語系 */}
                        <SettingLanguage />

                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-6">
                            <Link to="/cart" className="group -m-2 p-2 flex items-center">
                                <ShoppingCartIcon
                                    className="flex-shink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
                                <span className="ml-2 text-sm font-medium text-gray-400 group-hover:text-gray-500">{cart.length}</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    );
};

export default Header;