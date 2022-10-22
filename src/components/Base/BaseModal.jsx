import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useEffect } from 'react'

const BaseModal = ({
    show = false,
    onHide = () => { },
    title,
    size = 'md',
    children,
    timeout,
}) => {

    const modalSize = () => {
        switch (size) {
            case '0': return 'max-w-0'
            case 'none': return 'max-w-none'
            case 'xs': return 'max-w-xs'
            case 'sm': return 'max-w-sm'
            case 'md': return 'max-w-md'
            case 'lg': return 'max-w-lg'
            case 'xl': return 'max-w-xl'
            case '2xl': return 'max-w-2xl'
            case '3xl': return 'max-w-3xl'
            case '4xl': return 'max-w-4xl'
            case '5xl': return 'max-w-5xl'
            case '6xl': return 'max-w-6xl'
            case '7xl': return 'max-w-7xl'
            case 'full': return 'max-w-full'
            case 'min': return 'max-w-min'
            case 'max': return 'max-w-max'
            case 'fit': return 'max-w-fit'
            case 'prose': return 'max-w-prose'
            case 'screen-sm': return 'max-w-screen-sm'
            case 'screen-md': return 'max-w-screen-md'
            case 'screen-lg': return 'max-w-screen-lg'
            case 'screen-xl': return 'max-w-screen-xl'
            case 'screen-2xl': return 'max-w-screen-2xl'
            default: return 'max-w-md'
        }
    }

    useEffect(() => {
        if (typeof timeout === 'number') {
            setTimeout(() => {
                onHide()
            }, timeout);
        }
    }, [show])

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onHide}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={`w-full ${modalSize()} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}>
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    {title}
                                </Dialog.Title>

                                {children}

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default BaseModal