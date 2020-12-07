import initialState from './initial';

let totalScore = (state) => state.player1 + state.player2;
let alternate =  5;

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
let serveChange = (state) => ({
    ...state,
    server: (totalScore(state) % alternate === 0) ? (state.serving === 1 ? 2 : 1) : state.serving
})

let winScore = 21;
let scoreDiff = (state) => Math.abs(state.player1 - state.player2);

let winner = (state) => {
    if (state.player1 >= winScore && scoreDiff(state) >= 2) {
        return "1";
    }
    if (state.player2 >= winScore && scoreDiff(state) >= 2) {
        return "2";
    }
    return "";
}

let declareWinner = (state) => ({
    ...state,
    winner: winner(state)
})

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