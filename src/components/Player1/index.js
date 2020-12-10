import { connect } from 'react-redux';
import Score from '../Score';

let mapStateToProps = (state) => {
    return {
        playerScore: state.player1,
        player: state.player1Name,
        server: state.p1Serving,
        winner: state.winner,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch({ type: "INCREMENTPLAYER1"}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);