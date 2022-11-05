import React, { useEffect, useMemo } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'
import PhoneMenuBar from './PhoneMenuBar'
import DesktopChatMenu from './DesktopChatMenu'
import BaseSuspenseFallback from '../Base/BaseSuspenseFallback'

const Deshboard = React.lazy(() => import('../../containers/Main/Deshboard'))
const Shop = React.lazy(() => import('../../containers/Shop/index'))
const ContactPage = React.lazy(() => import('../../containers/Contact/ContactPage'))
const ShoppingRelatedPage = React.lazy(() => import('../../containers/ShoppingRelated/ShoppingRelatedPage'))
const ShoppingCartPage = React.lazy(() => import('../../containers/ShoppingCart/ShoppingCartPage'))
const VipPage = React.lazy(() => import('../../containers/Vip/VipPage'))

import { update_cart, update_profile } from 'actions'


const index = (props) => {
    const {
        history,
        push,
    } = props

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const updateCart = data => dispatch(update_cart(data))

    useEffect(() => {
        if (!localStorage.getItem('cart')) return
        const cart = JSON.parse(localStorage.getItem('cart'))
        updateCart(cart)
    }, [])

    return (
        <ConnectedRouter history={history}>
            <div className='main flex flex-col'>
                <Route path="/" render={(props) => <Header {...props} />} />

                <React.Suspense fallback={<BaseSuspenseFallback />}>

                    <div
                        className='flex flex-col flex-1'
                    >
                        <Switch>
                            <Route path="/cart" render={(props) => <ShoppingCartPage {...props} />} />
                            <Route path="/shopping_process" render={(props) => <ShoppingRelatedPage {...props} />} />
                            <Route path="/contact" render={(props) => <ContactPage {...props} />} />
                            <Route path="/shop" render={(props) => <Shop {...props} />} />
                            <Route path="/vip" render={(props) => <VipPage {...props} />} />
                            <Route exact path="/" render={(props) => <Deshboard {...props} />} />
                        </Switch>

                    </div>
                </React.Suspense>

                <Route path="/" render={(props) => <Footer {...props} />} />

                <PhoneMenuBar {...props} />
                <DesktopChatMenu {...props} />

            </div>
        </ConnectedRouter >
    );
};

export default index;