let alternate =  5;
let totalScore = (state) => state.player1 + state.player2;

let serveChange = (state) => ({
    ...state,
    server: (Math.floor(totalScore(state) / alternate) % 2) + 1,
})

export default serveChange;


// (totalScore(state) % alternate === 0) ? (state.serving === 1 ? 2 : 1) : state.serving