import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl';
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon, GlobeAltIcon, CheckIcon } from '@heroicons/react/20/solid'

const SettingLanguage = () => {
    const people = [
        { name: '繁體中文' },
        { name: 'English' },
        { name: 'Japenness' },
    ]

    const [selected, setSelected] = useState(people[0])

    return (
        <div className="">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className="mr-2 flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none p-2 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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