import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import zhenBlack from '../../img/zhenBlack.png'
import data from './nav.json'

const NavIcon = ({
    imageSrc,
    className,
    push,
}) => {
    return (
        <div
            className="flex-shrink-0 flex items-center select-none cursor-pointer"
            onClick={() => push('/')}
        >
            <img className={className ? className : "hidden h-11 lg:flex lg:mr-2"} src={imageSrc || zhenBlack} />
            <div className='flex flex-shrink-0 h-8  w-auto font-bold text-2xl items-center'>
                <FormattedMessage
                    id={`nav.${data.navTitle.name_intl}`}
                    defaultMessage={data.navTitle.name}
                />
            </div>
        </div>
    );
};

export default NavIcon;