import { UPDATE_CART } from 'actions'

const InitialState = []

export default (state = InitialState, action) => {
    if (action.type === UPDATE_CART) {
        return action.data
    }
    return state
}