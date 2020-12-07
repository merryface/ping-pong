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

export default declareWinner;