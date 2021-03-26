import { connect } from 'react-redux';
import LeftSidebarCopy from '../../components/Shop/LeftSidebarCopy'
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
)(LeftSidebarCopy);