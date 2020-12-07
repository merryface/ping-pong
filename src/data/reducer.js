import initialState from './initial';
import declareWinner from './winner';
import serveChange from './server';
import player1 from './player1Score';
import player2 from './player2Score';


//reducer
let reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENTPLAYER1":
            return declareWinner(serveChange(player1(state)));

        case "INCREMENTPLAYER2":
            return declareWinner(serveChange(player2(state)));

        case "RESET": return initialState;

        default: return state;
    }
};

export default reducer;