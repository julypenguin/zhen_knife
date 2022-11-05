import '../styl/index.styl'
import '../styl/input.css'
import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Main from './Main'
import BaseSuspenseFallback from './Base/BaseSuspenseFallback'

const App = ({
    updateProfile,
    intl: { language },
    history,
}) => {
    const [isPreFetching, setIsPreFetching] = useState(true)

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (isPreFetching) setIsPreFetching(false)
        if (user) {
            updateProfile(user)
        } else {
            updateProfile({})
        }
    });

    return (
        <IntlProvider defaultLocale='zh' {...language}>
            {isPreFetching ? <BaseSuspenseFallback />
                :
                <Main history={history} />
            }
        </IntlProvider>
    )
}


export default App