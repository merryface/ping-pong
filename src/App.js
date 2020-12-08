import './App.css';

// Components
import Score from './components/Score';
import WinMessage from './components/WinMessage';
import Reset from './components/Reset';

const App = ({player1Score, player2Score, incrementPlayer1, incrementPlayer2, reset, p1Serving, winner}) => (
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
                server = {p1Serving}
                winner = {winner}
                handleIncrement = {incrementPlayer1}
            />

            <Score
                playerScore = {player2Score}
                player = {2}
                server = {!p1Serving}
                winner = {winner}
                handleIncrement = {incrementPlayer2}
            />          
        </div>

        { /* winner message */}
        <WinMessage winner = { winner } /> 
        <hr />

        { /* reset button */}
        <Reset handleReset = {reset} />

    </>
);

export default App;