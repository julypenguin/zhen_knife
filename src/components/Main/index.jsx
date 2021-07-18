import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'

import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'
import Deshboard from '../../containers/Main/Deshboard'
import TimeLimit from '../../containers/TimeLimit/index'
import Shop from '../../containers/Shop/index'
import ContactPage from '../../containers/Contact/ContactPage'
import ShoppingProcessPage from '../../containers/ShoppingProcess/ShoppingProcessPage'

const index = (props) => {
    const {
        history,
    } = props

    return (
        <ConnectedRouter history={history}>
            <div className='main h-screen flex flex-col'>

                <Route path="/" render={(props) => <Header {...props} />} />


                <div 
                    className='lg:mt-4 flex flex-col flex-1' 
                    // style={{ minHeight: '450px' }}
                >

                    <Switch>
                        <Route path="/shopping_process" render={(props) => <ShoppingProcessPage {...props} />} />
                        <Route path="/contact" render={(props) => <ContactPage {...props} />} />
                        <Route path="/shop" render={(props) => <Shop {...props} />} />
                        <Route exact path="/SS-01BG" render={(props) => <TimeLimit {...props} />} />
                        <Route exact path="/" render={(props) => <Deshboard {...props} />} />
                    </Switch>

                </div>

                <Route path="/" render={(props) => <Footer {...props} />} />

            </div>
        </ConnectedRouter >
    );
};

export default index;