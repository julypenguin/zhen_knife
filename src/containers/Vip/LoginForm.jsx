import { connect } from 'react-redux';
import LoginForm from '../../components/Vip/LoginForm'
import { update_profile } from 'actions'

function mapStateToProps(state) {
    const { profile } = state
    return {
        profile,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateProfile: data => dispatch(update_profile(data)),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);