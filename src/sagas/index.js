import runCartSaga from './cart'

export default function* () {
    yield* runCartSaga()
}

