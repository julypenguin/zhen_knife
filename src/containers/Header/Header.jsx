import Header from '../../components/Header/Header'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { update_profile } from 'actions'

function mapStateToProps(state) {
    const { cart, profile } = state
    return {
        cart,
        profile,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateProfile: data => dispatch(update_profile(data)),
        push: (path, state) => dispatch(push(path, state)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
