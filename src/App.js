import './App.css';

// Components
import Settings from './components/Settings';
import Game from './components/Game';

const App = (state) => (
    <>
    {/* replace all this with ternary to show either game or settings */}
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>
        { state.gameStarted ? <Game /> :  <Settings /> }    
    </>
);

export default App;