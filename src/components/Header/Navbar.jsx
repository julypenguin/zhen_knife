import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'

import data from './data.json'
import BaseTab from '../Base/BaseTab'

const Navbar = ({
    push,
}) => {

    return (
        <div className="hidden lg:ml-16 lg:flex select-none">
            {data.navList.map((nav, i) => (
                <BaseTab
                    key={i}
                    exact={nav.exact}
                    to={nav.to}
                    strict={nav.strict}
                >
                    <FormattedMessage id={`nav.${nav.intl_name}`} />
                </BaseTab>
            ))}
        </div>
    );
};

export default Navbar;