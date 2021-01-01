import { hot } from 'react-hot-loader/root';
import '../styl/index.styl'
import '../styl/styles.css'
import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'
import { Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Main from './Main'

class App extends Component {

    constructor(props) {
        super(props)
        // props.get_profile()
    }

    renderPageLoading = () => (
        <div className='full-page-center'>
            <Spinner animation="grow" variant="secondary" className='loading' />
        </div>
    )

    render() {
        let { intl: { language }, isprefetching, history } = this.props
        // get intl-config by container so IntlProvider(Context API) in here
        return (
            <IntlProvider defaultLocale='zh' {...language}>
                {isprefetching ? this.renderPageLoading() : <Main history={history} />}
            </IntlProvider>
        )
    }

    static defaultProps = {
        intl: {
            language: {
                locale: 'zh',
                messages: {}
            }
        }
    }

    static propTypes = {
        // intl: PropTypes.shape({
        //     language: PropTypes.shape({
        //         locale: PropTypes.string,
        //         messages: PropTypes.object
        //     }).isRequired
        // }).isRequired,
        // get_profile: PropTypes.func.isRequired,
        // islogin: PropTypes.bool.isRequired,
        // isprefetching: PropTypes.bool.isRequired,
    }
}


export default hot(App)