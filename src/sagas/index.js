import runCartSaga from './cart'
import runProfileSaga from './profile'
import runUiSaga from './ui'

export default function* () {
    yield* runCartSaga()
    yield* runProfileSaga()
    yield* runUiSaga()
}

