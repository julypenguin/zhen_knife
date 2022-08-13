import React, { useEffect, useMemo } from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth"

import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'
import Deshboard from '../../containers/Main/Deshboard'
import Shop from '../../containers/Shop/index'
import ContactPage from '../../containers/Contact/ContactPage'
import ShoppingRelatedPage from '../../containers/ShoppingRelated/ShoppingRelatedPage'
import ShoppingCartPage from '../../containers/ShoppingCart/ShoppingCartPage'
import VipPage from '../../containers/Vip/VipPage'
import PhoneMenuBar from './PhoneMenuBar'
import DesktopChatMenu from './DesktopChatMenu'
import { update_cart, update_profile } from 'actions'


const index = (props) => {
    const {
        history,
        push,
    } = props

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const updateCart = data => dispatch(update_cart(data))
    const updateProfile = data => dispatch(update_profile(data))

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            updateProfile(user)
        } else {
            updateProfile({})
        }
    });

    useEffect(() => {
        if (!localStorage.getItem('cart')) return
        const cart = JSON.parse(localStorage.getItem('cart'))
        updateCart(cart)
    }, [])

    return (
        <ConnectedRouter history={history}>
            <div className='main flex flex-col'>
                <Route path="/" render={(props) => <Header {...props} />} />


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

                <Route path="/" render={(props) => <Footer {...props} />} />

                <PhoneMenuBar {...props} />
                <DesktopChatMenu {...props} />

            </div>
        </ConnectedRouter >
    );
};

export default index;