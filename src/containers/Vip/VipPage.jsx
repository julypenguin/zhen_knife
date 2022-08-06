import { connect } from 'react-redux';
import VipPage from '../../components/Vip/VipPage'
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
)(VipPage);