import React from 'react';
import classNames from 'classnames';
import { injectIntl, FormattedMessage } from 'react-intl'
import { Route, Switch } from 'react-router'
import ShoppingProcess from './ShoppingProcess'
import Qa from './Qa'
import ShoppingProcessMenu from './ShoppingProcessMenu'
import data from './shoppingRelatedPage.json'

const ShoppingRelatedPage = ({
    push,
}) => {

    return (
        <div className='container'>
            <div className='p-4 mt-4 text-4xl font-bold flex justify-center'>
                <FormattedMessage id='shoppingProcess.shopping_related_instructions' />
            </div>
            <div className='p-8 flex flex-col lg:grid lg:grid-cols-12'>
                <div className='mb-8 lg:col-span-2'>
                    <ul className='border border-gray-300 divide-y divide-gray-300'>
                        {data.menuList.map((menu) => (
                            <ShoppingProcessMenu
                                key={menu.to}
                                {...menu}
                                handleClick={() => push(menu.to)}
                            />
                        ))}
                    </ul>
                </div>

                <div className='lg:col-span-10 pl-12'>
                    <Switch>
                        {/* <Route exact path="/shopping_process/user_agreement" render={(props) => <ProductDetail {...props} />} /> */}
                        {/* <Route exact path="/shopping_process/privacy_policy" render={(props) => <ProductDetail {...props} />} /> */}
                        <Route exact path="/shopping_process/qa" render={(props) => <Qa {...props} />} />
                        <Route exact path="/shopping_process" render={(props) => <ShoppingProcess {...props} />} />
                    </Switch>
                </div>

            </div>
        </div>
    );
};

export default ShoppingRelatedPage;