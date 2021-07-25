import { connect } from 'react-redux';
import LeftSidebar from '../../components/Shop/LeftSidebar'
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
)(LeftSidebar);