import { takeEvery, put, select } from 'redux-saga/effects'
import * as action from 'actions'
import { htmlScrollIntoView } from 'lib/scroll'

function* location_change(takeAction) {
    htmlScrollIntoView({ 
        behavior: 'smooth'
     })
}


export default function* () {
    yield takeEvery('@@router/LOCATION_CHANGE', location_change)
}
