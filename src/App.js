import './App.css';

// Components
import Score from './components/Score';
import WinMessage from './components/WinMessage';

const App = ({player1Score, player2Score, incrementPlayer1, incrementPlayer2, reset, server, winner}) => (
    <>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <Score
                playerScore = {player1Score}
                player = {1}
                server = {server}
                winner = {winner}
                handleIncrement = {incrementPlayer1}
            />

            <Score
                playerScore = {player2Score}
                player = {2}
                server = {server}
                winner = {winner}
                handleIncrement = {incrementPlayer2}
            />          
        </div>

        { /* winner message */}
        <WinMessage winner = { winner } /> 
        <hr />

        { /* reset button */}
        <button className="btn btn-danger" onClick= { reset }>Reset</button>


    </>
);

export default App;