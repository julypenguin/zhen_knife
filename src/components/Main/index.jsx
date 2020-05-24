import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'

import Header from '../../containers/Header/Header'
import Deshboard from '../../containers/Main/Deshboard'

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
                        <Route exact path="/" render={() => <Deshboard />} />
                    </Switch>


                </div>

            </div>
        </ConnectedRouter >
    );
};

export default index;