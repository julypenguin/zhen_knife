import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import LoginForm from '../../containers/Vip/LoginForm'
import { getAuth, signOut } from "firebase/auth"

const VipPage = ({
    profile,
    updateProfile,
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
    }

    return (
        <div className='p-12 container'>
            {profile.email ?
                <div>
                    <div className='text-3xl font-bold w-full px-6 pb-4 lg:pb-8'>{msgintl.member_area}</div>
                    <div className='flex'>
                        <ul role="list" className="left w-60 divide-y divide-gray-200 border-t border-b">
                            <li className="text-lg px-6 py-2 lg:py-6 cursor-pointer text-blue-500 hover:text-blue-700">{msgintl.order}</li>
                            <li className="text-lg px-6 py-2 lg:py-6 cursor-pointer text-blue-500 hover:text-blue-700">{msgintl.address}</li>
                            <li className="text-lg px-6 py-2 lg:py-6 cursor-pointer text-blue-500 hover:text-blue-700">{msgintl.account_detail}</li>
                            <li className="text-lg px-6 py-2 lg:py-6 cursor-pointer text-blue-500 hover:text-blue-700">{msgintl.log_out}</li>
                        </ul>

                        <div className='right flex-1'>
                            <div className='ml-8  lg:ml-24'>
                                <div className='mb-4'>
                                    <span className='mr-1'>{userName}</span>
                                    <span className='mr-1'>您好</span>
                                    <span>(</span>
                                    <span className='mr-2'>不是 {userName} 嗎？</span>
                                    <span
                                        className='cursor-pointer text-blue-500 hover:text-blue-700'
                                        onClick={e => logOut()}
                                    >
                                        請登出
                                    </span>
                                    <span>)</span>
                                </div>
                                <div>
                                    <span className='mr-1'>在您的帳號控制台裡，您可以檢視</span>
                                    <span className='cursor-pointer text-blue-500 hover:text-blue-700'>近期的訂單</span>
                                    <span className='mr-1'>，管理您的</span>
                                    <span className='cursor-pointer text-blue-500 hover:text-blue-700'>收貨地址</span>
                                    <span className='mr-1'>和</span>
                                    <span className='cursor-pointer text-blue-500 hover:text-blue-700'>更改密碼或修改帳號資料</span>
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