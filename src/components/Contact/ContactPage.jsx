import React, { useEffect } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import BaseInput from '../Base/BaseInput.jsx'
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { htmlScrollIntoView } from 'lib/scroll'

const ContactPage = ({
    intl,
}) => {

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        submit: getIntlMsg('global.submit', '送出'),
        your_name: getIntlMsg('contact.your_name', '您的稱呼'),
        your_email: getIntlMsg('contact.your_email', '您的電子郵件'),
        your_phone: getIntlMsg('contact.your_phone', '您的電話號碼'),
        what_you_want_to_ask: getIntlMsg('contact.what_you_want_to_ask', '您想詢問的內容'),
        required_field: getIntlMsg('contact.required_field', '為必填欄位'),
        phone: getIntlMsg('contact.phone', '電話'),
        fax: getIntlMsg('contact.fax', '傳真'),
    }

    // useEffect(() => {
    //     htmlScrollIntoView(true)
    // }, [])

    return (
        <div className='container'>
            {/* 上方描述 */}
            <div className='p-4 md:p-8 flex flex-wrap justify-center lg:py-16'>
                <div className='text-3xl font-bold py-4 w-full text-center lg:pb-8'>
                    <FormattedMessage id='contact.contact_us' />
                </div>
                <div className='grid grid-cols-5'>
                    <div className='md:col-span-1' />
                    <div className='col-span-5 md:col-span-3 leading-8 text-center'>
                        <FormattedMessage id='contact.contact_content' />
                    </div>
                    <div className='md:col-span-1' />

                </div>
            </div>

            {/* 左側資訊 */}
            <div className="relative bg-white">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
                </div>
                <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                        <div className="max-w-lg mx-auto">
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                <FormattedMessage id='contact.contact_info' />
                            </h2>
                            <p className="mt-3 text-lg leading-6 text-gray-500">
                                <FormattedMessage id='contact.business_hours' />
                                <span className='mx-2'>:</span>
                                <FormattedMessage id='contact.bh_time' />
                                <span className='ml-2'>9:00~18:00</span>
                            </p>
                            <dl className="mt-8 text-base text-gray-500">
                                <div className="mt-6">
                                    <dt className="sr-only">Postal address</dt>
                                    <dd className="flex">
                                        <LocationMarkerIcon
                                            className="flex-shrink-0 h-6 w-6 text-gray-400"
                                        />
                                        <span className="ml-3">
                                            <FormattedMessage
                                                id='contact.b_addr'
                                                defaultMessage="台中市西屯區中工二路51-1號"
                                            />
                                        </span>
                                    </dd>
                                </div>
                                <div className="mt-3">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex">
                                        <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
                                        {/* Heroicon name: phone */}
                                        <span className="ml-3">
                                            (+886)4-23508566
                                        </span>
                                    </dd>
                                </div>
                                <div className="mt-3">
                                    <dt className="sr-only">Fax</dt>
                                    <dd className="flex">
                                        {/* fax */}
                                        <span className='text-xl pr-1'>
                                            <Icon
                                                className='h-5 w-5'
                                                icon='fax'
                                            />
                                        </span>
                                        <span className="ml-3">
                                            (+886)4-23508380
                                        </span>
                                    </dd>
                                </div>
                                <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
                                        <span className="ml-3">
                                            zhen.knife@gmail.com
                                        </span>
                                    </dd>
                                </div>

                            </dl>
                            <div className="text-base text-gray-500 flex ">
                                <a
                                    href="https://m.me/112474420116080"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <div
                                        className='text-blue-600 hover:text-blue-500 text-5xl cursor-pointer pr-2 py-2'
                                    >
                                        <Icon className='w-7 h-7' icon={['fab', 'facebook']} />
                                    </div>
                                </a>
                                <a
                                    href='https://line.me/ti/p/@vlm0153e'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <div className='text-green-500 hover:text-green-400 text-5xl cursor-pointer p-2'>
                                        <Icon className='w-7 h-7' icon={['fab', 'line']} />

                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 表單 */}
                    <div className="bg-white py-12 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                        <div className="max-w-lg mx-auto lg:max-w-none">
                            <form
                                className="grid grid-cols-1 gap-y-6"
                                onSubmit={e => e.preventDefault()}
                            >
                                <div>
                                    <BaseInput
                                        label={msgintl.your_name}
                                        placeholder={msgintl.your_name}
                                        type={1}
                                        id={msgintl.your_name}
                                        name='name'
                                        required
                                    />
                                </div>
                                <div>
                                    <BaseInput
                                        label={msgintl.your_email}
                                        placeholder={msgintl.your_email}
                                        type={2}
                                        id={msgintl.your_email}
                                        name='email'
                                        required
                                    />
                                </div>
                                <div>
                                    <BaseInput
                                        label={msgintl.your_phone}
                                        placeholder={msgintl.your_phone}
                                        type={3}
                                        id={msgintl.your_phone}
                                        name='phone'
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        {msgintl.what_you_want_to_ask}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder={msgintl.what_you_want_to_ask}
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <FormattedMessage id='global.submit' />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default injectIntl(ContactPage);