import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { getAuth, signOut } from "firebase/auth"

const VipDefaultPage = ({
    profile,
    updateProfile,
    intl,
}) => {

    const userName = profile.email && profile.email.slice(0, profile.email.indexOf('@')) || ''

    const logOut = () => {
        const auth = getAuth();

        signOut(auth).then(() => {
            updateProfile({})
        }).catch((error) => {
            console.error(error)
        });
    }

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
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
        <div className='right flex-1'>
            <div className='mx-8'>
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
    );
};

export default injectIntl(VipDefaultPage);