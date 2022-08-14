import React from 'react';
import { UserIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'

const BaseInput = ({
    label = '',
    placeholder = '',
    type = 0,
    id,
    name,
}) => {
    // type=1(name), =2(mail), =3(tel)
    const renderIcon = () => {
        switch (type) {
            case 1: return <UserIcon className="h-5 w-5 text-gray-400 z-10" />

            case 2: return <MailIcon className="h-5 w-5 text-gray-400 z-10" />

            case 3: return <PhoneIcon className="h-5 w-5 text-gray-400 z-10" />

            default: return null
        }
    }

    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                {/* icon */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {renderIcon()}
                </div>
                <input
                    type="text"
                    name={name}
                    id={id}
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-10 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md sm:text-sm"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default BaseInput;