let saveSettings = (state, { player1Name, player2Name, winScore, alternateOn }) => {
    return {
        ...state,
        player1Name,
        player2Name,
        winScore,
        alternateOn,
        gameStarted: true
    }
}

export default saveSettings;

// action will have a payload. important naming convention (type & payload)
// we only want to get action.settings (payload)