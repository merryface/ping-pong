let WinMessage = ({winner, playerName}) => (
    <>
        <h2 className={winner !== 0 ? "alert alert-success" : "d-none"}>{ playerName } wins!</h2>
    </>
)

    export default WinMessage;