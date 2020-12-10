import { connect } from 'react-redux';
import App from './App';

let mapStateToProps = ({gameStarted}) => ({gameStarted});

export default connect(mapStateToProps)(App);