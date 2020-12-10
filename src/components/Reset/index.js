import { connect } from 'react-redux';
import Reset from './Reset'
import { reset } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(reset()),
    }
}

// connect expects two arguments
export default connect(null, mapDispatchToProps)(Reset);