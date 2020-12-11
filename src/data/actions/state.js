//donthard code object where the dispatch is, use action creator instead
export let reset = () => {
    return {
        type: "RESET"
    }
}

export let incrementPlayer1 = () => {
    return {
        type: "INCREMENTPLAYER1"
    }
}

export let incrementPlayer2 = () => {
    return {
        type: "INCREMENTPLAYER2"
    }
}

export let form = ({ player1Name, player2Name, winScore, alternateOn }) => {
    return {
        type: "SAVESETTINGS",
        player1Name,
        player2Name,
        winScore: +winScore,
        alternateOn: +alternateOn,
    }
}