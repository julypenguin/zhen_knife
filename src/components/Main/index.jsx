import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'

import Header from '../../containers/Header/Header'
import Deshboard from '../../containers/Main/Deshboard'
import TimeLimit from '../../containers/TimeLimit/index'
import Shop from '../../containers/Shop/index'

const index = (props) => {
    const {
        history,
    } = props

    return (
        <ConnectedRouter history={history}>
            <div className='main'>

                <Route path="/" render={(props) => <Header {...props} />} />


                <div className='container-page'>

                    <Switch>
                        <Route exact path="/shop" render={(props) => <Shop {...props} />} />
                        <Route exact path="/SS-01BG" render={(props) => <TimeLimit {...props} />} />
                        <Route exact path="/" render={(props) => <Deshboard />} {...props} />
                    </Switch>


                </div>

            </div>
        </ConnectedRouter >
    );
};

export default index;