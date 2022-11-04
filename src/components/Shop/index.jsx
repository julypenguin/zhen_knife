import React, { useEffect } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
import LeftSidebar from './../../containers/Shop/LeftSidebar'

import BaseBreadcrumbs from '../Base/BaseBreadcrumbs'
import { Route, Switch } from 'react-router'
import data from './categories.json'
import BaseSuspenseFallback from '../Base/BaseSuspenseFallback'

const ProductDetail = React.lazy(() => import('../../containers/Shop/ProductDetail'))
const ProductList = React.lazy(() => import('../../containers/Shop/ProductList'))

const ShopPage = (props) => {

    const getPath = (props) => {
        const cats_sid = Number(props.match.params.cats_sid) || 0
        const intl_id = props.match.params.intl_id || ''
        const pathList = data.categories
            .filter(category => {
                return !category.cats_sid || category.cats_sid === cats_sid
            })
            .map(category => {
                return {
                    link: `/shop${!category.cats_sid ? '' : `/${category.cats_sid}`}`,
                    path: <FormattedMessage id={`shop.categories.${category.intl_id}`} />,
                }
            })

        if (intl_id) {
            if (!cats_sid) {
                pathList.push({
                    link: `/shop/detail/${intl_id}`,
                    path: <FormattedMessage id={`shop.products.${intl_id}`} />,
                })
            }
        }

        return pathList
    }

    return (
        <div className='container flex flex-col flex-1 overflow-hidden pb-8 mt-4'>
            <div className='py-2 px-4 items-center'>
                <Switch>
                    <Route exact path="/shop/detail/:intl_id" render={(props) => <BaseBreadcrumbs homeLink='/' pathList={getPath(props)} className='flex ml-6 lg:ml-0' />} />
                    <Route exact path="/shop/:cats_sid" render={(props) => <BaseBreadcrumbs homeLink='/' pathList={getPath(props)} className='flex ml-6 lg:ml-0' />} />
                    <Route exact path="/shop" render={(props) => <BaseBreadcrumbs homeLink='/' pathList={getPath(props)} className='flex ml-6 lg:ml-0' />} />
                </Switch>
            </div>
            <div className='py-4 flex flex-1'>
                {/* <LeftSidebar /> */}
                <Switch>
                    <Route path="/shop/:cats_sid" render={(props) => <LeftSidebar {...props} />} />
                    <Route path="/shop" render={(props) => <LeftSidebar {...props} />} />
                </Switch>

                <div className='flex-1 ml-6 divide-y divide-gray-200'>
                    <React.Suspense fallback={<BaseSuspenseFallback />}>
                        <Switch>
                            <Route exact path="/shop/detail/:intl_id" render={(props) => <ProductDetail {...props} />} />
                            <Route exact path="/shop/:cats_sid" render={(props) => <ProductList {...props} />} />
                            <Route exact path="/shop" render={(props) => <ProductList {...props} />} />
                        </Switch>
                    </React.Suspense>
                </div>
                {/* <div className='primary'>qqq</div> */}
            </div>
        </div>
    );
};

export default ShopPage;