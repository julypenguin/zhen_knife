import React, { useState, useEffect } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import BaseModal from '../Base/BaseModal'

const VipAccount = ({
    profile,
    db,
    intl,
}) => {
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [updateError, setUpdateError] = useState(false)

    const onClose = () => {
        setShowUpdateModal(false)
        setUpdateError(false)
    }

    const getAccount = async () => {
        const accountRef = doc(db, `${profile.email}`, 'account');
        const accountSnap = await getDoc(accountRef);

        if (accountSnap.exists()) {
            const { lastName, firstName } = accountSnap.data()
            setLastName(lastName || '')
            setFirstName(firstName || '')
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const onSubmit = async () => {
        try {
            const alovelaceDocumentRef = await setDoc(doc(db, `${profile.email}`, "account"), {
                lastName,
                firstName,
            });
            await setShowUpdateModal(true)
        } catch (e) {
            setShowUpdateModal(true)
            setUpdateError(true)
            console.error("Error account adding document: ", e);
        }
    }

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        address_below_will_be_used_auto_but_you_can_change: getIntlMsg('vip.address_below_will_be_used_auto_but_you_can_change', '下列的地址將會在您結帳時自動使用，但您還是可以在結帳時修改成其它地址'),
        billing_address: getIntlMsg('vip.billing_address', '帳單地址'),
        first_name: getIntlMsg('vip.first_name', '名子'),
        last_name: getIntlMsg('vip.last_name', '姓氏'),
        email: getIntlMsg('vip.email', '電子郵件'),
        country: getIntlMsg('vip.country', '國家'),
        street_address: getIntlMsg('vip.street_address', '街道地址'),
        city: getIntlMsg('vip.city', '城市'),
        state_province: getIntlMsg('vip.state_province', '州/省'),
        ZIP_postal_code: getIntlMsg('vip.ZIP_postal_code', '郵遞區號'),
        account_detail: getIntlMsg('vip.account_detail', '帳戶詳細資訊'),
        cancel: getIntlMsg('global.cancel', '取消'),
        save: getIntlMsg('global.save', '儲存'),
    }

    useEffect(() => {
        getAccount()
    }, [])

    return (
        <div className='w-8/12'>
            <div className='py-4 text-xl'>{msgintl.account_detail}</div>

            <form
                className="space-y-6"
                onSubmit={e => {
                    e.stopPropagation()
                    e.preventDefault()
                    onSubmit()
                }}
            >
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                {msgintl.first_name}
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder={msgintl.first_name}
                                value={firstName}
                                onChange={e => {
                                    setFirstName(e.target.value)
                                }}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                {msgintl.last_name}
                            </label>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder={msgintl.last_name}
                                value={lastName}
                                onChange={e => {
                                    setLastName(e.target.value)
                                }}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                            <span className="mb-2 block text-sm font-medium text-gray-700">
                                {msgintl.email}
                            </span>
                            <div>{profile.email}</div>
                        </div>
                    </div>
                </div>



                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={onSubmit}
                    >
                        {msgintl.save}
                    </button>
                </div>
            </form>

            <BaseModal
                show={showUpdateModal}
                onHide={onClose}
            >
                {updateError ?
                    <FormattedMessage id='global.result.update_fail' defaultMessage='修改失敗' />
                    :
                    <FormattedMessage id='global.result.update_success' defaultMessage='修改成功' />
                }
            </BaseModal>
        </div>
    );
};

export default injectIntl(VipAccount);