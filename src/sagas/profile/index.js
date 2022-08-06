import { takeLatest } from 'redux-saga/effects'
import { call, put } from 'redux-saga/effects'
import * as action from 'actions'

export default function* () {
    yield takeLatest(action.UPDATE_PROFILE, (params) => put(action.update_profile(params)))
}