import { connect } from 'react-redux';
import WinMessage from './WinMessage';

let mapStateToProps = (state) => {
    return {
        winner: state.winner,
    }
}

export default connect(mapStateToProps)(WinMessage);