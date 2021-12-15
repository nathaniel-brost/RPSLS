
const {
    Player,
    HumanPlayer,
    ArtificialPlayer
} = require ("./player")


class Game {
    constructor() { 
    this.playerOne = new Player ("Nate");
    this.playerTwo = new Player ("Tyler");

    this.gestures = [paper, lizard, scissors, rock, spock];
    }




    runGame(){
        this.displayRules;

        while (this.playerOne.score < 3 && this.playerTwo.score < 3) {

        }
        // the game asks who your name is
        // the game asks if you want to play the AI or another human
        // if they choose human, the game asks what is your friend's name
        // the game asks whether P1 wants to go first
        // the game displays the array for each human player

        // if P1 = P2, alert 'you chose the same thing", re-run 

        // if P1 chose 0 or 1, add 5 to the value
        // P1 - P2 = some value. If value = 1 or 2, player 1 gets a point



    }

    displayRules() {
        console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
        console.log("The rules are similar to Rock, Paper, Scissors.");
        console.log("In addition to Rock, Paper, and Scissors, there are two new gestures; Lizard and Spock.");
        console.log("Lizard poisons Spock and eats Paper, while Spock smashes Scissors and vaporizes Rock...");
        console.log("Lizard gets crushed by a Rock and decapitated by Scissors; Spock gets poisoned by Lizard and disproved by Paper.");
        console.log("The first player to 3 points wins!")
    }

    chooseOpponent() {
        
    }
}


