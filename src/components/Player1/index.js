import { connect } from 'react-redux';
import Score from '../Score';

let mapStateToProps = (state) => {
    return {
        playerScore: state.player1,
        player: 1,
        server: state.p1Serving,
        winner: state.winner,
    }
}

export default connect(mapStateToProps)(Score);