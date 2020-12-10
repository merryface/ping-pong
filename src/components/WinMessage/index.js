import { connect } from 'react-redux';
import WinMessage from './WinMessage';

let mapStateToProps = (state) => {
    return {
        winner: state.winner,
        playerName: state.winner === 1 ? state.player1Name : state.player2Name,
    }
}

export default connect(mapStateToProps)(WinMessage);