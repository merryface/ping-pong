//Store game result
let result = (state) => {

    if (state.winner !== 0) {

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

}

// push new result into record
let recordGame = (state) => (
    {
        ...state,
        record: [...state.record, result]
    }
)

export default recordGame;
