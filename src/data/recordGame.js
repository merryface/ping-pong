//Store game result
let result = (state) => {
    return (
        {
            player_1: {
                score: state.player1,
                won: state.winner === 1
            },
    
            player_2: {
                score: state.player2,
                won: state.winner === 2
            }
        }
    )
}

// push new result into record
let recordGame = (state) => (
    {
        ...state,
        record: state.winner !== 0 ? [...state.record, result(state)] : state.record
    }
)

export default recordGame;
