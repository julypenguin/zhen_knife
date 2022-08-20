import React, { useEffect } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import LoginForm from '../../containers/Vip/LoginForm'
import { getAuth, signOut } from "firebase/auth"

const VipPage = ({
    profile,
    updateProfile,
    push,
    intl,
}) => {

    const logOut = () => {
        const auth = getAuth();

        signOut(auth).then(() => {
            updateProfile({})
        }).catch((error) => {
            console.error(error)
        });
    }

    const userName = profile.email && profile.email.slice(0, profile.email.indexOf('@')) || ''

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        member_area: getIntlMsg('vip.member_area', '會員專區'),
        order: getIntlMsg('vip.order', '訂單'),
        address: getIntlMsg('vip.address', '地址'),
        account_detail: getIntlMsg('vip.account_detail', '帳戶詳細資料'),
        log_out: getIntlMsg('vip.log_out', '登出'),
        hello: getIntlMsg('vip.hello', '您好'),
        please_log_out: getIntlMsg('vip.please_log_out', '請登出'),
        in_your_account_control_panel_you_can_view: getIntlMsg('vip.in_your_account_control_panel_you_can_view', '在您的帳號控制台裡，您可以檢視'),
        recent_orders: getIntlMsg('vip.recent_orders', '近期的訂單'),
        manage_your: getIntlMsg('vip.manage_your', '管理您的'),
        shipping_address: getIntlMsg('vip.shipping_address', '收貨地址'),
        and: getIntlMsg('vip.and', '和'),
        change_password_or_modify_account_info: getIntlMsg('vip.change_password_or_modify_account_info', '更改密碼或修改帳號資料'),
    }

    return (
        <div className='p-12 container'>
            {profile.email ?
                <div>
                    <div className='text-3xl font-bold w-full px-6 pb-4 lg:pb-8'>{msgintl.member_area}</div>
                    <div className='flex'>
                        <ul role="list" className="left w-60 divide-y divide-gray-200 border-t border-b">
                            <li
                                className="text-lg px-6 py-2 lg:py-6 cursor-pointer text-blue-500 hover:text-blue-700"
                                onClick={e => push('/vip/orders')}
                            >
                                {msgintl.order}
                            </li>
                            <li
                                className="text-lg px-6 py-2 lg:py-6 cursor-pointer text-blue-500 hover:text-blue-700"
                                onClick={e => push('/vip/edit-address')}
                            >
                                {msgintl.address}
                            </li>
                            <li
                                className="text-lg px-6 py-2 lg:py-6 cursor-pointer text-blue-500 hover:text-blue-700"
                                onClick={e => push('/vip/edit-account')}
                            >
                                {msgintl.account_detail}
                            </li>
                            <li
                                className="text-lg px-6 py-2 lg:py-6 cursor-pointer text-blue-500 hover:text-blue-700"
                                onClick={logOut}
                            >
                                {msgintl.log_out}
                            </li>
                        </ul>

                        <div className='right flex-1'>
                            <div className='ml-8  lg:ml-24'>
                                <div className='mb-4'>
                                    <span className='mr-1'>{userName}</span>
                                    <span className='mr-1'>{msgintl.hello}</span>
                                    <span>(</span>
                                    <span className='mr-2'>
                                        <FormattedMessage
                                            id='vip.isnt_username'
                                            defaultMessage='不是 {userName} 嗎？'
                                            values={{ userName }}
                                        />

                                    </span>
                                    <span
                                        className='cursor-pointer text-blue-500 hover:text-blue-700'
                                        onClick={e => logOut()}
                                    >
                                        {msgintl.please_log_out}
                                    </span>
                                    <span>)</span>
                                </div>
                                <div>
                                    <span className='mr-1'>
                                        {msgintl.in_your_account_control_panel_you_can_view}
                                    </span>
                                    <span
                                        className='cursor-pointer text-blue-500 hover:text-blue-700'
                                    >
                                        {msgintl.recent_orders}
                                    </span>
                                    <FormattedMessage id='global.comma' defaultMessage='，' />
                                    <span className='mr-1'>{msgintl.manage_your}</span>
                                    <span
                                        className='cursor-pointer text-blue-500 hover:text-blue-700'
                                    >
                                        {msgintl.shipping_address}
                                    </span>
                                    <span className='mr-1'>{msgintl.and}</span>
                                    <span
                                        className='cursor-pointer text-blue-500 hover:text-blue-700'
                                    >
                                        {msgintl.change_password_or_modify_account_info}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <LoginForm />
            }
        </div>
    );
};

export default injectIntl(VipPage);