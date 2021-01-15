import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import zhenBlack from '../../img/zhenBlack.png'
import data from './data.json'

const NavIcon = () => {
    return (
        <div className="flex-shrink-0 flex items-center">
            <img className="block  h-11 lg:mr-2" src={zhenBlack} />
            <div className='hidden md:flex lg:flex h-8 sm:hidden w-auto font-bold text-2xl items-center'>
                <FormattedMessage id={`nav.${data.navTitle.intl_name}`} />
            </div>
        </div>
    );
};

export default NavIcon;