import React from 'react';

const BaseInput = ({
    label='',
    placeholder='',
    type=0,
    id,
    name,
}) => {
    // type=1(name), =2(mail), =3(tel)
    const renderIcon = () => {
        switch (type) {
            case 1: return (
                <svg className="h-5 w-5 text-gray-400 z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )

            case 2: return (
                <svg className="h-5 w-5 text-gray-400 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            )

            case 3: return (
                <svg className="h-5 w-5 text-gray-400 z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )

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