// Create a form componenet that contains:
/*
1. player 1 and 2 names
2. winning score input (type number)
3. serve alternate (dropdown)
4 .submit button
 */
import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Settings extends Component {

    constructor() {
        super();

        this.state = {
            player1Name: "",
            player2Name: "",
            winScore: "21",
            alternateOn: "5",
        };

        // binding the methods so that can be used without
        this.handlePlayer1Name = this.handlePlayer1Name.bind(this);
        this.handlePlayer2Name = this.handlePlayer2Name.bind(this);
        this.handleWinningScore = this.handleWinningScore.bind(this);
        this.handleAlternate = this.handleAlternate.bind(this);
        this.startGame = this.startGame.bind(this);
    }

    // Sets
    handlePlayer1Name(e) {
        let name = e.currentTarget.value;
        this.setState({
            player1Name : name,
        });
    }

    handlePlayer2Name(e) {
        let name = e.currentTarget.value;
        this.setState({
            player2Name : name,
        });
    }

    handleWinningScore(e) {
        let score = e.currentTarget.value;
        this.setState({
            winScore : score,
        });
    }

    handleAlternate(e) {
        let alternate = e.currentTarget.value;
        this.setState({
            alternateOn : alternate,
        });
    }

    startGame(e) {
        // This prevents the button from refreshing since this is where the on-click for this method is set to
        e.preventDefault(); //this can be used on any element with default functionality
        this.props.handleSaveSettings({...this.state});
    }

    render() {

        return (
            <Form className="form-group" onSubmit={ this.startGame } >
                <Form.Group>
                    <Form.Label>Player 1 Name</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={ this.handlePlayer1Name }
                                value={ this.state.player1Name }
                            />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Player 2 Name</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={ this.handlePlayer2Name }
                            value={ this.state.player2Name }
                        />
                </Form.Group>

                <Form.Group>
                <Form.Label>Winning Score</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={ this.handleWinningScore }
                        value={ this.state.winScore }
                    />
            </Form.Group>

            <Form.Group>
                <Form.Label>Alternate Serve Every:</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={ this.handleAlternate }
                        value={ this.state.alternateOn }
                    />
            </Form.Group>

            <Button variant="primary" onClick={ this.startGame }>Start Game</Button>
            
        </Form>
        );
    }
}


export default Settings;