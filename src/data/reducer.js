import initialState from './initial';

let reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENTPLAYER1": 
        return {
            ...state,
            player1: state.player1 + 1
        }

        case "INCREMENTPLAYER2": 
        return {
            ...state,
            player2: state.player2 + 1
        }

        case "RESET": return initialState; 

        default: return state;
    }
};

export default reducer;