import NavSearch from '../../components/Header/NavSearch'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

function mapStateToProps(state) {
    const { router } = state
    return {
        router,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: (path, state) => dispatch(push(path, state)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavSearch)
