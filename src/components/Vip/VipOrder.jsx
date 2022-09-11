import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'

const VipOrder = ({
    intl,
}) => {

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        no_order_yet: getIntlMsg('vip.no_order_yet', '目前還沒有訂單'),
    }

    return (
        <div className='px-8'>
            {msgintl.no_order_yet}
        </div>
    );
};

export default injectIntl(VipOrder);