import React, { Fragment } from 'react';
import classnames from 'classnames';
import { injectIntl, FormattedMessage } from 'react-intl'
import { ShoppingCartIcon, ClipboardDocumentListIcon, CreditCardIcon, ClipboardDocumentCheckIcon, TruckIcon } from '@heroicons/react/24/outline'
import data from './shoppingProcess.json'

const ShoppingProcess = ({
    push,
}) => {

    const IconMap = {
        ShoppingCartIcon: ShoppingCartIcon,
        ClipboardDocumentListIcon: ClipboardDocumentListIcon,
        CreditCardIcon: CreditCardIcon,
        ClipboardDocumentCheckIcon: ClipboardDocumentCheckIcon,
        TruckIcon: TruckIcon,
    }

    const renderIcon = (icon) => {
        const Icon = IconMap[icon]
        if (!Icon) return null
        return (
            <Icon className='w-16 h-16 text-gray-500' />
        )
    }

    return (
        <Fragment>
            {data.process_list.map(({ id, step_title_intl, step_desc_intl, icon, color }, processIndex) => (
                <div
                    key={id}
                    className={classnames('mb-8 py-4', { 'bg-gray-100': processIndex % 2 })}
                >
                    <div className='mb-8'>
                        <div className='mb-4'>
                            {renderIcon(icon)}
                        </div>
                        <div className='px-2'>
                            <span className='mr-2 text-3xl tracking-wider'>STEP {processIndex + 1}.</span>
                            <span className='text-3xl tracking-wider'>
                                <FormattedMessage id={`shoppingProcess.shopping_process.${step_title_intl}`} />
                            </span>
                        </div>
                    </div>
                    <div
                        className={classnames('tracking-wider px-2', {
                            'text-red-500': color === 'red'
                        })}
                    >
                        <FormattedMessage id={`shoppingProcess.shopping_process.${step_desc_intl}`} />
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default ShoppingProcess;