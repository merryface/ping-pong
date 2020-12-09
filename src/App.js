import './App.css';

// Components
import Player1 from './components/Player1';
import Player2 from './components/Player2';
import WinMessage from './components/WinMessage';
import Reset from './components/Reset';

const App = () => (
    <>
    {/* replace all this with ternary to show either game or settings */}
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <Player1 />

            <Player2 />          
        </div>

        { /* winner message */}
        <WinMessage />
        <hr />

        { /* reset button */}
        <Reset />

    </>
);

export default App;