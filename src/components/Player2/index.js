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

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch({ type: "INCREMENTPLAYER2" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);