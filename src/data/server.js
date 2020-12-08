let totalScore = (state) => state.player1 + state.player2;

let alternate = (state) => {
    if (state.player1 >= 20 && state.player2 >= 20) {
        return 2;
    }
    return 5;
}

let serveChange = (state) => (
    
    {
    ...state,
    p1Serving: (totalScore(state) % alternate(state) === 0) ? !state.p1Serving : state.p1Serving
})

export default serveChange;


