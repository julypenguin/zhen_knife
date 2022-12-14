import { connect } from 'react-redux';
import ShoppingRelatedPage from '../../components/ShoppingRelated/index'
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
)(ShoppingRelatedPage);