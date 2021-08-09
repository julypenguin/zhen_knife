import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'

import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'
import Deshboard from '../../containers/Main/Deshboard'
import Shop from '../../containers/Shop/index'
import ContactPage from '../../containers/Contact/ContactPage'
import ShoppingRelatedPage from '../../containers/ShoppingRelated/ShoppingRelatedPage'

const index = (props) => {
    const {
        history,
    } = props

    return (
        <ConnectedRouter history={history}>
            <div className='main flex flex-col'>

                <Route path="/" render={(props) => <Header {...props} />} />


                <div 
                    className='flex flex-col flex-1' 
                >

                    <Switch>
                        <Route path="/shopping_process" render={(props) => <ShoppingRelatedPage {...props} />} />
                        <Route path="/contact" render={(props) => <ContactPage {...props} />} />
                        <Route path="/shop" render={(props) => <Shop {...props} />} />
                        <Route exact path="/" render={(props) => <Deshboard {...props} />} />
                    </Switch>

                </div>

                <Route path="/" render={(props) => <Footer {...props} />} />

            </div>
        </ConnectedRouter >
    );
};

export default index;