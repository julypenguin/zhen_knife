import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { MailIcon, PhoneOutgoingIcon } from '@heroicons/react/solid'

// 桌面板右下角 chat
const DesktopChatMenu = ({
    intl,
}) => {
    const [showChatsButton, setShowChatsButton] = useState(false)

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        front_page: getIntlMsg('phoneMenu.front_page', '首頁'),
        customer_service: getIntlMsg('phoneMenu.customer_service', '客服'),
        product_list: getIntlMsg('phoneMenu.product_list', '商品列表'),
        shopping_cart: getIntlMsg('phoneMenu.shopping_cart', '購物車'),
        member: getIntlMsg('phoneMenu.member', '會員'),
    }

    return (
        <div className='hidden fixed right-5 bottom-24 z-10 w-10  md:flex md:flex-col'>
            {/* 上層按鈕 */}
            <div className={`${showChatsButton ? 'block' : 'hidden'}`}>
                {/* email */}
                <a
                    href="mailto:zhen.knife@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className='group w-12 h-12 flex justify-center items-center rounded-full cursor-pointer mt-2 bg-blue-500 text-white hover:menu-button hover:justify-start'
                >
                    <MailIcon className='w-8 h-8 group-hover:mr-2' />
                    <span className='hidden group-hover:inline'>Email</span>
                </a>
                {/* tel */}
                <a
                    href="tel:423508566"
                    target="_blank"
                    rel="noreferrer"
                    className='group w-12 h-12 flex justify-center items-center rounded-full cursor-pointer mt-2 bg-purple-600 text-white hover:menu-button'
                >
                    <PhoneOutgoingIcon className='w-8 h-8 group-hover:mr-2' />
                    <span className='hidden group-hover:inline'>Phone</span>
                </a>
                {/* line */}
                <a
                    href="https://line.me/ti/p/@vlm0153e"
                    target="_blank"
                    rel="noreferrer"
                    className='group w-12 h-12 flex justify-center items-center rounded-full cursor-pointer mt-2 bg-green-line text-white hover:menu-button'
                >
                    <Icon
                        className='h-8 group-hover:mr-2'
                        style={{ width: '2rem' }}
                        icon={['fab', 'line']}
                    />
                    <span className='hidden group-hover:inline'>Line</span>
                </a>
                {/* facebook */}
                <a
                    href="https://m.me/112474420116080"
                    target="_blank"
                    rel="noreferrer"
                    className='group w-12 h-12 flex justify-center items-center rounded-full cursor-pointer mt-2 bg-blue-facebook text-white hover:menu-button'
                >
                    <Icon
                        className='h-8 group-hover:mr-2'
                        style={{ width: '2rem' }}
                        icon={['fab', 'facebook-messenger']}
                    />
                    <span className='hidden group-hover:inline'>Facebook</span>
                </a>
            </div>

            {/* 桌面預設按鈕 */}
            <span
                className='w-12 h-12 flex justify-center items-center rounded-full bg-blue-500 cursor-pointer mt-2'
                onClick={e => setShowChatsButton(!showChatsButton)}
            >
                <Icon
                    className='h-8 text-white'
                    style={{ width: '2rem' }}
                    icon='comments' />
            </span>

        </div>
    );
};

export default injectIntl(DesktopChatMenu);