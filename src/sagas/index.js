import runCartSaga from './cart'
import runProfileSaga from './profile'

export default function* () {
    yield* runCartSaga()
    yield* runProfileSaga()
}

