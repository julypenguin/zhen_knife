import React, { Fragment } from 'react';
import classnames from 'classnames';
import { injectIntl, FormattedMessage } from 'react-intl'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon, PlusIcon, MinusSmIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import data from './qa.json'

const CommonProblem = () => {
    return (
        <Fragment>
            {data.ques_list.map((ques) => (
                <Disclosure key={ques.id}>
                    {({ open }) => (
                        <Fragment >
                            <Disclosure.Button className="flex justify-start items-center w-full px-4 py-2 mb-2 text-xl font-bold text-left border border-gray-300 bg-white rounded-lg select-none hover:bg-gray-100">
                                {open ?
                                    <MinusSmIcon
                                        className={`w-5 h-5 mr-2`}
                                    />
                                    :
                                    <PlusIcon
                                        className={`w-5 h-5 mr-2`}
                                    />
                                }
                                <span className='mr-2 text-xl font-bold'>Q</span>
                                <span className='mr-2 text-xl font-bold'>:</span>
                                <FormattedMessage id={`shoppingProcess.common_problem.${ques.ques_title_intl}`} />
                            </Disclosure.Button>

                            <Transition
                                enter="transition duration-300 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >

                                <Disclosure.Panel className="pl-4 pr-4 pt-4 pb-2 text-sm text-gray-500">
                                    {ques.answer_list.map((answer) => (
                                        <ul key={answer.id}>
                                            {!!answer.title &&
                                                <div className='inline-block border border-gray-400 text-2xl font-bold px-1 py-2 mb-4 rounded'>{answer.title}</div>
                                            }

                                            {answer.desc_list.map((desc) => (
                                                <li
                                                    key={desc.id}
                                                    className={classnames(`text-xl leading-10 list-${desc.list_style}`, {
                                                        [`mb-${desc.space}`]: desc.space,
                                                        'font-bold': desc.is_important,
                                                        [`text-${desc.color}-400`]: desc.color,
                                                        // 'ml-16': desc.list_style !== 'none'
                                                    })}
                                                >
                                                    {desc.desc_intl ?
                                                        <FormattedMessage id={`shoppingProcess.common_problem.${desc.desc_intl}`} />
                                                        :
                                                        desc.itme_list.map((item) => (
                                                            <Fragment key={item.id}>
                                                                {!item.href ?
                                                                    <span
                                                                        className={classnames('text-xl', {
                                                                            'font-bold': item.is_important,
                                                                            [`text-${item.color}-500`]: item.color
                                                                        })}
                                                                    >
                                                                        <FormattedMessage id={`shoppingProcess.common_problem.${item.item_intl}`} />
                                                                    </span>
                                                                    :
                                                                    <Link
                                                                        to={item.href}
                                                                        className={classnames('text-xl', {
                                                                            'font-bold': item.is_important,
                                                                            [`text-${item.color}-500`]: item.color
                                                                        })}
                                                                    >
                                                                        <FormattedMessage id={`shoppingProcess.common_problem.${item.item_intl}`} />
                                                                    </Link>
                                                                }
                                                            </Fragment>
                                                        ))
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </Disclosure.Panel>
                            </Transition>
                        </Fragment>
                    )}
                </Disclosure>
            ))}




            {/* <ul className='border divide-y divide-gray-200'>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.common_problem.how_many_payment_methods' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.common_problem.how_is_the_shipping_cost_calculated' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.common_problem.may_I_ask_the_delivery_time' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.common_problem.what_is_the_warranty_content_and_time_of_the_product' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.common_problem.how_do_I_handle_the_return_and_exchange' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.common_problem.is_there_any_product_appreciation' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.common_problem.how_to_contact_customer_service' />
                </li>
            </ul> */}
        </Fragment>
    );
};

export default CommonProblem;