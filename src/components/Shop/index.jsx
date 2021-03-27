import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl'
// import LeftSidebar from '../../containers/Shop/LeftSidebar'
// import LeftSidebarCopy from './LeftSidebarCopy'
import LeftSidebarCopy from './../../containers/Shop/LeftSidebar'
import ProductList from '../../containers/Shop/ProductList';
import ProductDetail from './ProductDetail';
import BaseBreadcrumbs from '../Base/BaseBreadcrumbs'
import { Route, Switch } from 'react-router'
import data from './categories.json'

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
            console.log('cats_sid', cats_sid)
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
        <div className='py-8 flex container'>
            {/* <LeftSidebar /> */}
            <LeftSidebarCopy />
            <div className='px-6 flex-1 ml-6 divide-y divide-gray-200'>
                <div className='py-2 items-center'>
                    {/* <BaseBreadcrumbs homeLink='/' pathList={pathList} /> */}
                    <Switch>
                        <Route exact path="/shop/detail/:intl_id" render={(props) => <BaseBreadcrumbs homeLink='/' pathList={getPath(props)} />} />
                        <Route exact path="/shop/:cats_sid" render={(props) => <BaseBreadcrumbs homeLink='/' pathList={getPath(props)} />} />
                        <Route exact path="/shop" render={(props) => <BaseBreadcrumbs homeLink='/' pathList={getPath(props)} />} />
                    </Switch>
                </div>
                <Switch>
                    <Route exact path="/shop/detail/:intl_id" render={(props) => <ProductDetail {...props} />} />
                    <Route exact path="/shop/:cats_sid" render={(props) => <ProductList {...props} />} />
                    <Route exact path="/shop" render={(props) => <ProductList {...props} />} />
                </Switch>
            </div>
            {/* <div className='primary'>qqq</div> */}
        </div>
    );
};

export default ShopPage;