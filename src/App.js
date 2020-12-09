import './App.css';

// Components
import Player1 from './components/Player1';
import Player2 from './components/Player2';
import WinMessage from './components/WinMessage';
import Reset from './components/Reset';

const App = ({incrementPlayer1, incrementPlayer2, reset}) => (
    <>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <Player1
                handleIncrement = {incrementPlayer1}
            />

            <Player2
                handleIncrement = {incrementPlayer2}
            />          
        </div>

        { /* winner message */}
        <WinMessage />
        <hr />

        { /* reset button */}
        <Reset handleReset = {reset} />

    </>
);

export default App;