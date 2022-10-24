import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl';
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon, GlobeAltIcon, CheckIcon } from '@heroicons/react/20/solid'
import { maplang } from '../../locale'

const SettingLanguage = () => {
    const langList = [
        { name: '繁體中文', locale: 'zh' },
        { name: 'English', locale: 'en' },
        { name: 'Japanese', locale: 'jp' },
    ]
    const lang = localStorage.getItem('language') || 'default'
    const [defaultSelected] = langList.filter(langDetail => langDetail.locale === maplang[lang].locale)

    const [selected, setSelected] = useState(defaultSelected || {})

    return (
        <div className="">
            <Listbox value={selected} onChange={selectedlang => {
                localStorage.setItem('language', selectedlang.locale)
                setSelected(selectedlang)
                if (selectedlang.locale !== maplang[lang].locale)
                window.location.reload()
            }}>
                <div className="relative mt-1 group">
                    <Listbox.Button className="mr-2 flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 group-focus-within:text-gray-500">
                        <Icon className='mr-2' icon='globe' />
                        <span className="truncate">{selected.name}</span>
                        {/* <span>
                            <FormattedMessage id='nav.traditional_chinese' defaultMessage='繁體中文' />
                        </span> */}
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {langList.map((lang, langIdx) => (
                                <Listbox.Option
                                    key={langIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none p-2 ${active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={lang}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {lang.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                    {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
            {/* // <button className="mr-2 flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            //     <span className="sr-only">globe</span>
            //     <Icon className='mr-2' icon='globe' />
            //     <span>
            //         <FormattedMessage id='nav.traditional_chinese' defaultMessage='繁體中文' />
            //     </span>
            // </button> */}
        </div>

    );
};

export default SettingLanguage;