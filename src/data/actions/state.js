//donthard code object where the dispatch is, use action creator instead
export let reset = () => {
    return {
        type: "RESET"
    }
}

export let player1 = () => {
    return {
        type: "INCREMENTPLAYER1"
    }
}

export let player2 = () => {
    return {
        type: "INCREMENTPLAYER2"
    }
}

export let form = ( {settings} ) => {
    return {
        type: "SAVESETTINGS",
        settings: settings,
    }
}