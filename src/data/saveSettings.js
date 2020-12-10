let saveSettings = (state, action) => {
    return {
        ...state,
        ...action.settings, 
        gameStarted: true
    }
}

export default saveSettings;

// action will have a payload. important naming convention (type & payload)
// we only want to get action.settings (payload)