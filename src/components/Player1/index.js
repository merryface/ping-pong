import { connect } from 'react-redux';
import Score from '../Score';
import { incrementPlayer1 } from '../../data/actions/state';

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
        handleIncrement: () => dispatch(incrementPlayer1()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);