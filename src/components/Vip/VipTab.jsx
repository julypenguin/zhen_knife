import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { getAuth, signOut } from "firebase/auth"

const VipTab = ({
    updateProfile,
    push,
    intl,
}) => {

    const pathname = window.location.pathname
    const tab = pathname.slice(pathname.lastIndexOf('/'))

    const [tabName, setTabName] = useState(tab)

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
    }

    return (
        <ul role="list" className="left mr-0 w-60 divide-y divide-gray-200 border-t border-b select-none sm:mr-8">
            <li
                className={`text-lg px-6 py-2 lg:py-6 ${tabName === '/orders' ? 'text-black' : 'cursor-pointer text-blue-500 hover:text-blue-700'}`}
                onClick={e => {
                    setTabName('/orders')
                    push('/vip/orders')
                }}
            >
                {msgintl.order}
            </li>
            <li
                className={`text-lg px-6 py-2 lg:py-6 ${tabName === '/edit-address' ? 'text-black' : 'cursor-pointer text-blue-500 hover:text-blue-700'}`}
                onClick={e => {
                    setTabName('/edit-address')
                    push('/vip/edit-address')
                }}
            >
                {msgintl.address}
            </li>
            <li
                className={`text-lg px-6 py-2 lg:py-6 ${tabName === '/edit-account' ? 'text-black' : 'cursor-pointer text-blue-500 hover:text-blue-700'}`}
                onClick={e => {
                    setTabName('/edit-account')
                    push('/vip/edit-account')
                }}
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
    );
};

export default injectIntl(VipTab);