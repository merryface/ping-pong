let saveSettings = (state, action) => {
    return {
        ...state,
        ...action.settings
    }
}

export default saveSettings;

// action will have a payload. important naming convention (type & payload)
// we only want to get action.settings (payload)