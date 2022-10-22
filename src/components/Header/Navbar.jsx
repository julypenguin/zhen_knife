import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'

import data from './nav.json'
import BaseTab from '../Base/BaseTab'

const Navbar = ({
    push,
}) => {

    return (
        <div className="hidden lg:ml-auto lg:flex select-none h-full group-focus-within:hidden">
            {data.navList.map((nav, i) => (
                <BaseTab
                    key={i}
                    exact={nav.exact}
                    to={nav.to}
                    strict={nav.strict}
                >
                    <FormattedMessage id={`nav.${nav.name_intl}`} />
                </BaseTab>
            ))}
        </div>
    );
};

export default Navbar;