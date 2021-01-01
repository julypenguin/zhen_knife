import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import intl from './intl'
// import fsx from './fsx'
// import core from './core'
// import kb from './kb'
// import ui from './ui'
// import api_status from './api_status'
// import exam from './exam'

export default (history) => combineReducers({
    intl,
    router: connectRouter(history),
    // fsx,
    // core,
    // kb,
    // ui,
    // api_status,
    // exam
})