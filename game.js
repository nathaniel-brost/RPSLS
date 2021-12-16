
const PromptSync = require("prompt-sync")();
const {
    Player,
    HumanPlayer,
    ArtificialPlayer
} = require ("./player")


class Game {
    constructor() { 
    this.playerOne = new HumanPlayer ();
    this.playerTwo

    // this.gestures = [paper, lizard, scissors, rock, spock];
    }




    runGame(){
        this.displayRules();

        this.enterName();

        this.chooseOpponent();
        // the game asks whether P1 wants to go first
        // console.log("Hit or miss brah");

        while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
            console.log("It's " + this.playerOne.name + "'s turn...")
            let playerOneRound = this.playerOne.RPSLS(); 
            console.log("It's " + this.playerTwo.name + "'s turn...")
            let playerTwoRound = this.playerTwo.RPSLS();

            if (playerOneRound == playerTwoRound){
                console.log("Wow, you both chose the same gesture!");
            }
            else if (playerOneRound == "paper"){
                if (playerTwoRound == "spock" || playerTwoRound == "rock"){
                    console.log(this.playerOne.name + " wins this round!");
                    this.playerOne.score++; 
                }
                else {
                    console.log(this.playerTwo.name + " wins this round!");
                    this.playerTwo.score++; 
                }
            }
            else if (playerOneRound == "lizard"){
                if (playerTwoRound == "paper" || playerTwoRound == "spock"){
                    console.log(this.playerOne.name + " wins this round!");
                    this.playerOne.score++; 
                }
                else {
                    console.log(this.playerTwo.name + " wins this round!");
                    this.playerTwo.score++; 
                }
            }
            else if (playerOneRound == "scissors"){
                if (playerTwoRound == "lizard" || playerTwoRound == "paper"){
                    console.log(this.playerOne.name + " wins this round!");
                    this.playerOne.score++; 
                }
                else {
                    console.log(this.playerTwo.name + " wins this round!");
                    this.playerTwo.score++; 
                }
            }
            else if (playerOneRound == "rock"){
                if (playerTwoRound == "scissors" || playerTwoRound == "lizard"){
                    console.log(this.playerOne.name + " wins this round!");
                    this.playerOne.score++; 
                }
                else {
                    console.log(this.playerTwo.name + " wins this round!");
                    this.playerTwo.score++; 
                }
            }
            else if (playerOneRound == "spock"){
                if (playerTwoRound == "rock" || playerTwoRound == "scissors"){
                    console.log(this.playerOne.name + " wins this round!");
                    this.playerOne.score++; 
                }
                else {
                    console.log(this.playerTwo.name + " wins this round!");
                    this.playerTwo.score++; 
                }
            }
        }

        this.displayWinner();
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
        if (nextPlayer == "human") {
            this.playerTwo = new HumanPlayer ();
            this.playerTwo.name = PromptSync("Player 2, what is your name?");
        }
        else if (nextPlayer == "computer") {
            this.playerTwo = new ArtificialPlayer ();
            // console.log(this.playerTwo.name);
            console.log("Ok, you are playing against the computer");
        }
        else {
            console.log("That is not a valid choice");
            this.chooseOpponent;
        }
    }
    displayWinner(){
        if (this.playerOne.score > this.playerTwo.score) {
            console.log(this.playerOne.name + " wins ROCK PAPER SCISSORS LIZARD SPOCK!");
        }
        else if (this.playerOne.score < this.playerTwo.score) {
            console.log(this.playerTwo.name + " wins ROCK PAPER SCISSORS LIZARD SPOCK!");
        }
    }
}


module.exports = Game
