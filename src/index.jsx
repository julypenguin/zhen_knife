import 'url-search-params-polyfill'
import './lib/scrollPolyfill.js'
import './lib/formdataPolyfill.js'

import React from "react"
import { render } from "react-dom"
import { Provider, ReactReduxContext } from 'react-redux'
import configureStore, { history } from "./store"
import InstallFontAwesome from './lib/icon'
import rootSaga from "./sagas"
import App from './containers/App'

if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill')
    require('@formatjs/intl-pluralrules/locale-data/en')
    require('@formatjs/intl-pluralrules/locale-data/zh')
}

if (!Intl.RelativeTimeFormat) {
    require('@formatjs/intl-relativetimeformat/polyfill')
    require('@formatjs/intl-relativetimeformat/locale-data/en')
    require('@formatjs/intl-relativetimeformat/locale-data/zh')
}

const store = configureStore();
// start saga
store.runSaga(rootSaga);
// install icon
InstallFontAwesome();

const rootElement = document.getElementById("root");

render(
    <Provider store={store} context={ReactReduxContext}>
        <App history={history}/>  
    </Provider>,
    rootElement
)
