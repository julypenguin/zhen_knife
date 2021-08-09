import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import PlusIcon from '../Icons/PlusIcon'

const CommonProblem = () => {
    return (
        <div className='px-6 flex-1 ml-6'>
            <ul className='border divide-y divide-gray-200'>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.how_many_payment_methods' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.how_is_the_shipping_cost_calculated' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.may_I_ask_the_delivery_time' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.what_is_the_warranty_content_and_time_of_the_product' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.how_do_I_handle_the_return_and_exchange' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.is_there_any_product_appreciation' />
                </li>
                <li className='py-2 px-4'>
                    <PlusIcon className='mr-2' />
                    <span className='mr-2'>Q</span>
                    <span className='mr-2'>:</span>
                    <FormattedMessage id='shoppingProcess.common_problem.how_to_contact_customer_service' />
                </li>
            </ul>
        </div>
    );
};

export default CommonProblem;