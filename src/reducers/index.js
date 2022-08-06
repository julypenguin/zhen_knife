import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import intl from './intl'
import cart from './cart'
import profile from './profile'

export default (history) => combineReducers({
    intl,
    router: connectRouter(history),
    cart,
    profile,
})