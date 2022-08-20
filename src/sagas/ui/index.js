import { fork } from 'redux-saga/effects'
import locationChange from './locationChange'

export default function* () {
    yield fork(locationChange)
}