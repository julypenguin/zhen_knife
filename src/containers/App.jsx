import { connect } from "react-redux"
// import { get_profile } from 'actions'
import App from '../components/App.jsx'


const mapStateToProps = (state) => {
    // const { intl } = state
    // let { account, profile } = state.core
    // return {
    //     islogin: account.islogin,
    //     isprefetching: profile.isfetching,
    //     intl
    // }
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // get_profile: () => dispatch(get_profile())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
