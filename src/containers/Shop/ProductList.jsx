import { connect } from 'react-redux';
import ProductList from '../../components/Shop/ProductList'
import { push } from 'connected-react-router'
import { update_cart } from 'actions'


function mapStateToProps(state) {
    const { cart } = state
    return {
        cart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateCart: data => dispatch(update_cart(data)),
        push: (path, state) => dispatch(push(path, state)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);