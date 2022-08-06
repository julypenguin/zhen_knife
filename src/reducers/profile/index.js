import { UPDATE_PROFILE } from 'actions'

const InitialState = {}

export default (state = InitialState, action) => {
    if (action.type === UPDATE_PROFILE) {
        return action.data
    }
    return state
}