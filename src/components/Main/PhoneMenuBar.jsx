import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { HomeIcon, ChatBubbleOvalLeftEllipsisIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon, EnvelopeIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'

// 手機板底部 chat
const PhoneMenuBar = ({
    intl,
}) => {
    const [showchatBottom, setShowChatBottom] = useState(false)

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        front_page: getIntlMsg('phoneMenu.front_page', '首頁'),
        customer_service: getIntlMsg('phoneMenu.customer_service', '客服'),
        product_list: getIntlMsg('phoneMenu.product_list', '商品列表'),
        shopping_cart: getIntlMsg('phoneMenu.shopping_cart', '購物車'),
        member: getIntlMsg('phoneMenu.member', '會員'),
    }

    return (
        <div className='text-white flex flex-col-reverse flex-wrap fixed z-10 bottom-0 w-full bg-menu-phone md:hidden'>
            <div className='flex w-full'>
                {/* 下層按鈕 */}
                <Link
                    to='/'
                    className='h-16 flex-1 text-center text-white flex justify-center items-center flex-col cursor-pointer bg-menu-phone'
                    onClick={() => setShowChatBottom(false)}
                >
                    <HomeIcon className='w-8 h-8' />
                    <div className='text-sm'>{msgintl.front_page}</div>
                </Link>
                <span
                    className='h-16 flex-1 text-center text-white flex justify-center items-center flex-col cursor-pointer bg-menu-phone'
                    onClick={() => setShowChatBottom(!showchatBottom)}
                >
                    <ChatBubbleOvalLeftEllipsisIcon className='w-8 h-8' />
                    <div className='text-sm'>{msgintl.customer_service}</div>
                </span>
                <Link
                    to='/shop'
                    className='h-16 flex-1 text-center text-white flex justify-center items-center flex-col cursor-pointer bg-menu-phone'
                    onClick={() => setShowChatBottom(false)}
                >
                    <ShoppingBagIcon className='w-8 h-8' />
                    <div className='text-sm'>{msgintl.product_list}</div>
                </Link>
                <Link
                    to='/cart'
                    className='h-16 flex-1 text-center text-white flex justify-center items-center flex-col cursor-pointer bg-menu-phone'
                    onClick={() => setShowChatBottom(false)}
                >
                    <ShoppingCartIcon className='w-8 h-8' />
                    <div className='text-sm'>{msgintl.shopping_cart}</div>
                </Link>
                <Link
                    to='/vip'
                    className='h-16 flex-1 text-center text-white flex justify-center items-center flex-col cursor-pointer bg-menu-phone'
                    onClick={() => setShowChatBottom(false)}
                >
                    <UserIcon className='w-8 h-8' />
                    <div className='text-sm'>{msgintl.member}</div>
                </Link>
                {/* 上層按鈕 */}
                <div className={`fixed flex w-full transition-all duration-300 ease-in-out ${!showchatBottom ? 'bottom-0' : 'bottom-16'}`} style={{ zIndex: '-1' }}>
                    {/* email */}
                    <a
                        href="mailto:zhen.knife@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className='h-16 flex-1 text-center text-white flex justify-center items-center flex-col cursor-pointer bg-blue-600'
                    >
                        <EnvelopeIcon className='w-8 h-8' />
                        <div className='text-sm'>Email</div>
                    </a>
                    {/* tel */}
                    <a
                        href="tel:423508566"
                        target="_blank"
                        rel="noreferrer"
                        className='h-16 flex-1 text-center text-white flex justify-center items-center flex-col cursor-pointer bg-purple-600'
                    >
                        <PhoneArrowUpRightIcon className='w-8 h-8' />
                        <div className='text-sm'>Phone</div>
                    </a>
                    {/* line */}
                    <a
                        href="https://line.me/ti/p/@vlm0153e"
                        target="_blank"
                        rel="noreferrer"
                        className='h-16 flex-1 text-center text-white flex justify-center items-center flex-col cursor-pointer bg-green-line'
                    >
                        <Icon
                            className='w-8 h-8'
                            style={{ width: '1.5rem' }}
                            icon={['fab', 'line']}
                        />
                        <div className='text-sm'>Line</div>
                    </a>
                    {/* facebook */}
                    <a
                        href="https://m.me/112474420116080"
                        target="_blank"
                        rel="noreferrer"
                        className='h-16 flex-1 text-center text-white flex justify-center items-center flex-col cursor-pointer bg-blue-facebook'
                    >
                        <Icon
                            className='h-8'
                            style={{ width: '1.5rem' }}
                            icon={['fab', 'facebook-messenger']}
                        />
                        <div className='text-sm'>Facebook</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default injectIntl(PhoneMenuBar);