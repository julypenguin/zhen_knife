import { connect } from 'react-redux';
import MainPage from '../../components/Main/index'
import { push } from 'connected-react-router'
import { update_cart, update_profile } from 'actions'

function mapStateToProps(state) {
    const { cart } = state
    return {
        cart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateCart: data => dispatch(update_cart(data)),
        updateProfile: data => dispatch(update_profile(data)),
        push: (path, state) => dispatch(push(path, state)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);