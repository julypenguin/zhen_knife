import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { push } from 'connected-react-router';
import formdata from 'lib/formdata'
import catData from '../Shop/categories.json'
import { useEffect } from 'react';

const NavSearch = ({
    router,
    push,
    intl,
}) => {
    const qs = new URLSearchParams(window.location.search)
    const qs_obj = {}
    qs.forEach((val, name) => {
        qs_obj[name] = val
    })
    const pathname = window.location.pathname
    const isShopPath = pathname === '/shop' || pathname.includes('/shop/') && !pathname.includes('/shop/detail')
    let categoryId = !isShopPath ? 0 : Number(pathname.slice(6))
    categoryId = isNaN(categoryId) ? 0 : categoryId
    const [category] = catData.categories.filter(cate => cate.cats_sid === categoryId)
    const categoryName = category && category.name || ''
    
    const [search, setSearch] = useState(qs_obj.search || '')

    const getIntlMsg = (id, defaultMessage, values) => intl.formatMessage({ id, defaultMessage }, { ...values })

    const msgintl = {
        search: getIntlMsg('global.search', '搜尋', { name: categoryName || '' }),
    }

    useEffect(() => {
        if (pathname.includes('/shop/detail')) return
        if (router.action === "POP" && isShopPath) return
        setSearch('')
    }, [pathname])

    return (
        <div className="max-w-lg w-full ease-in duration-75 lg:max-w-xs group-focus-within:max-w-full">
            <label htmlFor="search" className="sr-only">
                <FormattedMessage id='global.search' defaultMessage='搜尋' />
            </label>
            <form
                className="relative"
                onSubmit={e => {
                    e.preventDefault()
                    if (!!search) {
                        if (isShopPath) {
                            push(`${pathname}?search=${search}`)
                        } else {
                            push(`/shop?search=${search}`)
                        }
                    } else {
                        push(`/shop`)
                    }
                }}
                autoComplete='false'
            >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 truncate focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder={msgintl.search}
                    type="search"
                    autoComplete='false'
                    value={search}
                    onChange={e => {
                        if (e.nativeEvent.data === undefined) {
                            if (isShopPath) {
                                push(`${pathname}`)
                            } else {
                                push(`/shop`)
                            }
                        }
                        setSearch(e.target.value)
                    }}
                />
            </form>
        </div>
    );
};

export default injectIntl(NavSearch);