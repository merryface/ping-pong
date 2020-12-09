let WinMessage = ({winner}) => (
    <>
        <h2 className={winner !== 0 ? "alert alert-success" : "d-none"}>Player { winner } wins!</h2>
    </>
)

    export default WinMessage;