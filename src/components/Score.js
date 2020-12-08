let Score = ({playerScore, player, server, winner, handleIncrement}) => (
    <div className="col-md-6 mt-4">
        <div className={ "card text-center " + (server ? "bg-dark text-white" : "") }>
            <h5 className="card-header">Player { player }</h5>
            <div className="card-body">
                <p className="card-text display-1">{ playerScore }</p>
            </div>
            <div className="card-footer">
                <button disabled= {winner ? true : false} className="form-control btn btn-success" onClick = { handleIncrement }>+</button>
            </div>
        </div>
    </div>
)

    export default Score;