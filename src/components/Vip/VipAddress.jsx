import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'

const VipAddress = ({
    intl,
}) => {

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
        cancel: getIntlMsg('global.cancel', '取消'),
        save: getIntlMsg('global.save', '儲存'),
    }

    return (
        <div>
            <div>{msgintl.address_below_will_be_used_auto_but_you_can_change}</div>

            <div className='py-4 text-xl'>{msgintl.billing_address}</div>

            <form className="space-y-6" action="#" method="POST">

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
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                {msgintl.email}
                            </label>
                            <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder={msgintl.email}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                {msgintl.country}
                            </label>
                            <input
                                type="text"
                                name="country"
                                id="country"
                                autoComplete="country"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder={msgintl.country}
                            />
                            {/* <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select> */}
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                {msgintl.street_address}
                            </label>
                            <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder={msgintl.street_address}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                {msgintl.city}
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder={msgintl.city}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                {msgintl.state_province}
                            </label>
                            <input
                                type="text"
                                name="region"
                                id="region"
                                autoComplete="address-level1"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder={msgintl.state_province}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                {msgintl.ZIP_postal_code}
                            </label>
                            <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder={msgintl.ZIP_postal_code}
                            />
                        </div>
                    </div>
                </div>



                <div className="flex justify-end">
                    <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {msgintl.cancel}
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {msgintl.save}
                    </button>
                </div>
            </form>

            {/* <div className='cursor-pointer text-blue-500 hover:text-blue-700'>新增</div>

            <div>您還沒設定這種類型的地址。</div> */}
        </div>
    );
};

export default injectIntl(VipAddress);