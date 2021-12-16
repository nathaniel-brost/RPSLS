
const PromptSync = require("prompt-sync");
const {
    Player,
    HumanPlayer,
    ArtificialPlayer
} = require ("./player")


class Game {
    constructor() { 
    this.playerOne = new HumanPlayer ();

    this.gestures = [paper, lizard, scissors, rock, spock];
    }




    runGame(){
        this.displayRules;

        this.enterName;

        // this.chooseOpponent;


        while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
            let playerOneRound = this.playerOne.RPSLS; 
            let playerTwoRound = this.playerTwo.RPSLS;

            if (playerOneRound == playerTwoRound){
                console.log("Wow, you both chose the same gesture!");
            }
            else if (playerOneRound == "paper"){
                if (playerTwoRound == "spock" || playerTwoRound == "rock"){
                    console.log("Player 1 wins this round!");
                    this.playerOne.score++; 
                }
                else {
                    console.log("Player 2 wins this round!");
                    this.playerTwo.score++; 
                }
            }
            else if (playerOneRound == "lizard"){
                if (playerTwoRound == "paper" || playerTwoRound == "spock"){
                    console.log("Player 1 wins this round!");
                    this.playerOne.score++; 
                }
                else {
                    console.log("Player 2 wins this round!");
                    this.playerTwo.score++; 
                }
            }
            else if (playerOneRound == "scissors"){
                if (playerTwoRound == "lizard" || playerTwoRound == "paper"){
                    console.log("Player 1 wins this round!");
                    this.playerOne.score++; 
                }
                else {
                    console.log("Player 2 wins this round!");
                    this.playerTwo.score++; 
                }
            }
            else if (playerOneRound == "rock"){
                if (playerTwoRound == "scissors" || playerTwoRound == "lizard"){
                    console.log("Player 1 wins this round!");
                    this.playerOne.score++; 
                }
                else {
                    console.log("Player 2 wins this round!");
                    this.playerTwo.score++; 
                }
            }
            else if (playerOneRound == "spock"){
                if (playerTwoRound == "rock" || playerTwoRound == "scissors"){
                    console.log("Player 1 wins this round!");
                    this.playerOne.score++; 
                }
                else {
                    console.log("Player 2 wins this round!");
                    this.playerTwo.score++; 
                }
            }
        }
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

    enterName(){
        this.playerOne.name = PromptSync("Player 1, enter your name:")

    }

    chooseOpponent() {
        let nextPlayer = PromptSync("Player 1, would you like to play another human or the computer?")
        if (nextPlayer = "human"){
            this.playerTwo = new HumanPlayer ();
            this.playerTwo.name = PromptSync("Player 2, what is your name?");
        }
        else if (nextPlayer = "computer"){
            this.playerTwo = new ArtificialPlayer ();
            alert("Ok, you are playing against the computer");
        }
        else {
            console.log("That is not a valid choice");
            this.chooseOpponent;
        }
    }
}


