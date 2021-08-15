import { connect } from 'react-redux';
import ShoppingCartPage from '../../components/ShoppingCart/index'
import { push } from 'connected-react-router'

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        push: (path, state) => dispatch(push(path, state)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCartPage);