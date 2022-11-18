import './lib/scrollPolyfill.js'
import './lib/formdataPolyfill.js'

import React from "react"
import { createRoot } from "react-dom/client"
import { Provider, ReactReduxContext } from 'react-redux'
import { initializeApp } from "firebase/app";
import { initializeAppCheck } from "firebase/app-check";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore"
// import "firebase/database"

import configureStore, { history } from "./store"
import InstallFontAwesome from './lib/icon'
import rootSaga from "./sagas"
import App from './containers/App'
import { firebaseConfig } from 'firebaseConfig'

// if (!Intl.PluralRules) {
//     require('@formatjs/intl-pluralrules/polyfill')
//     require('@formatjs/intl-pluralrules/locale-data/en')
//     require('@formatjs/intl-pluralrules/locale-data/zh')
// }

// if (!Intl.RelativeTimeFormat) {
//     require('@formatjs/intl-relativetimeformat/polyfill')
//     require('@formatjs/intl-relativetimeformat/locale-data/en')
//     require('@formatjs/intl-relativetimeformat/locale-data/zh')
// }

const store = configureStore();
// start saga
store.runSaga(rootSaga);
// install icon
InstallFontAwesome();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const defaultStorage = getStorage(app);
const db = getFirestore(app);
// firebase.analytics();

// const db = firebase.database()

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} context={ReactReduxContext}>
        <App history={history} />
    </Provider>
)
