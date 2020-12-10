import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import WinMessage from '../components/WinMessage';
import Reset from '../components/Reset';

let Game = () => (
    <>
    <div className="row mb-4">
        <Player1 />
        <Player2 />          
    </div>

    <WinMessage />
    <Reset />
    </>
)

export default Game;

