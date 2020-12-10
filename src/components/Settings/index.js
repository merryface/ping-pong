import { connect } from 'react-redux';
import Settings from './Settings'

const mapDispatchToProps = (dispatch) => {
    return {
        handleSaveSettings: (settings) => dispatch({ type: "SAVESETTINGS", settings}),
    }
}

// connect expects two arguments
export default connect(null, mapDispatchToProps)(Settings);