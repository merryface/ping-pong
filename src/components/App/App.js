// Components
import Settings from '../Settings';
import Game from '../Game';

const App = ({gameStarted}) => (
    <>
    {/* replace all this with ternary to show either game or settings */}
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>
        { gameStarted ? <Game /> :  <Settings /> }    
    </>
);

export default App;