import initialState from './initial';

let totalScore = (state) => state.player1 + state.player2;
let alternate =  5;

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
let serveChange = (state) => ({
    ...state,
    server: (totalScore(state) % alternate === 0) ? (state.serving === 1 ? 2 : 1) : state.serving
})

let reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENTPLAYER1":
            return serveChange(player1(state));

        case "INCREMENTPLAYER2":
            return serveChange(player2(state));

        case "RESET": return initialState; 

        default: return state;
    }
};

export default reducer;