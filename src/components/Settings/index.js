import { connect } from 'react-redux';
import Settings from './Settings'
import { form } from '../../data/actions/state';


const mapDispatchToProps = (dispatch) => {
    return {
        handleSaveSettings: (settings) => dispatch(form(settings)),
    }
}

// connect expects two arguments
export default connect(null, mapDispatchToProps)(Settings);