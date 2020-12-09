import { connect } from 'react-redux';
import Score from '../Score';

let mapStateToProps = (state) => {
    return {
        playerScore: state.player2,
        player: 2,
        server: !state.p1Serving,
        winner: state.winner,
    }
}

export default connect(mapStateToProps)(Score);