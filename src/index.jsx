import 'url-search-params-polyfill'
import './lib/scrollPolyfill.js'
import './lib/formdataPolyfill.js'

import React from "react"
import { render } from "react-dom"
import { Provider, ReactReduxContext } from 'react-redux'
// import { addLocaleData } from 'react-intl'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/dist/locale-data/en'
import '@formatjs/intl-relativetimeformat/dist/locale-data/zh'
import configureStore, { history } from "./store"
import rootSaga from "./sagas"
import App from './containers/App'
import InstallFontAwesome from './lib/icon'

const store = configureStore();
// start saga
store.runSaga(rootSaga);
// install icon
InstallFontAwesome();
// install language pack
// addLocaleData([...locale_en, ...locale_zh,])

const rootElement = document.getElementById("root");



render(
    <Provider store={store} context={ReactReduxContext}>
        <App history={history}/>  
    </Provider>,
    rootElement
)
