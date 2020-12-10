const initialState = {
    gameStarted: false,

    player1Name: "",
    player2Name: "",
    player1: 0,
    player2: 0,
    
    p1Serving: true,
    alternateOn: 5,

    winScore: 21,
    
    winner: 0,
    record: [],
    gameID: 1,

    loaded: false,
};

export default initialState;