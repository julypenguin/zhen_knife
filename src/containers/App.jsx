import { connect } from "react-redux"
import App from '../components/App.jsx'
import { update_profile } from 'actions'

const mapStateToProps = (state) => {
    const { intl } = state
    return {
        intl,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: data => dispatch(update_profile(data)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
