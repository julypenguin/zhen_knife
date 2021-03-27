import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import { Route, Switch } from 'react-router'
import CommonProblem from './CommonProblem'

const ShoppingProcessPage = () => {
    return (
        <div className='container'>
            <div className='p-4 mt-4 text-4xl font-bold flex justify-center'>
                <FormattedMessage id='shoppingProcess.shopping_related_instructions' />
            </div>
            <div className='p-8 flex'>
                {/* <LeftSidebar /> */}
                <div>
                    <ul className='border divide-y divide-gray-200'>
                        <li className='py-2 px-8'><FormattedMessage id='shoppingProcess.list.shopping_process' /></li>
                        <li className='py-2 px-8'><FormattedMessage id='shoppingProcess.list.common_problem' /></li>
                        <li className='py-2 px-8'><FormattedMessage id='shoppingProcess.list.privacy_policy' /></li>
                        <li className='py-2 px-8'><FormattedMessage id='shoppingProcess.list.user_agreement' /></li>
                    </ul>
                </div>

                <Switch>
                    {/* <Route exact path="/shopping_process/user_agreement" render={(props) => <ProductDetail {...props} />} /> */}
                    {/* <Route exact path="/shopping_process/privacy_policy" render={(props) => <ProductDetail {...props} />} /> */}
                    <Route exact path="/shopping_process/qa" render={(props) => <CommonProblem {...props} />} />
                    <Route exact path="/shopping_process" render={(props) => <CommonProblem {...props} />} />
                </Switch>

            </div>
        </div>
    );
};

export default ShoppingProcessPage;