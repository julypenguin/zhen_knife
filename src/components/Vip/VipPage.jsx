import React, { useEffect } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { Route, Switch } from 'react-router'
import LoginForm from '../../containers/Vip/LoginForm'
import VipTab from '../../containers/Vip/VipTab'
import BaseSuspenseFallback from '../Base/BaseSuspenseFallback'

const VipAccount = React.lazy(() => import('../../containers/Vip/VipAccount'))
const VipAddress = React.lazy(() => import('../../containers/Vip/VipAddress'))
const VipOrder = React.lazy(() => import('../../containers/Vip/VipOrder'))
const VipDefaultPage = React.lazy(() => import('../../containers/Vip/VipDefaultPage'))

const VipPage = ({
    profile,
    updateProfile,
    push,
    intl,
}) => {

    const getIntlMsg = (id, defaultMessage) => intl.formatMessage({ id, defaultMessage })

    const msgintl = {
        member_area: getIntlMsg('vip.member_area', '會員專區'),
    }

    return (
        <div className='p-12 container'>
            {profile.email ?
                <div>
                    <div className='text-3xl font-bold w-full px-6 pb-4 lg:pb-8'>{msgintl.member_area}</div>
                    <div className='flex'>
                        <VipTab />

                        <React.Suspense fallback={<BaseSuspenseFallback />}>
                            <Switch>
                                <Route path="/vip/edit-account" render={(props) => <VipAccount {...props} />} />
                                <Route path="/vip/edit-address" render={(props) => <VipAddress {...props} />} />
                                <Route path="/vip/orders" render={(props) => <VipOrder {...props} />} />
                                <Route path="/vip" render={(props) => <VipDefaultPage {...props} />} />
                            </Switch>
                        </React.Suspense>
                    </div>
                </div>
                :
                <LoginForm />
            }
        </div>
    );
};

export default injectIntl(VipPage);