const PromptSync = require("prompt-sync")();

class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
        this.choiceArray = ["paper", "lizard", "scissors", "rock", "spock"];
    }
}

class HumanPlayer extends Player {
    constructor(name){
        super(name);
    }
    RPSLS (){
        let choiceCap = PromptSync("What is your choice; 'rock', 'paper', 'scissors', 'lizard', or 'Spock'?");
        let choice = choiceCap.toLowerCase();
        while (!this.choiceArray.includes(choice)){
            choiceCap = PromptSync("That is not a valid choice. Please choose 'rock', 'paper', 'scissors', 'lizard', or 'spock'.")
            choice = choiceCap.toLowerCase();
        }
        return choice;
    }
}

class ArtificialPlayer extends Player {
    constructor(){
        super("The computer");
    }
    RPSLS (){
        let choice = this.choiceArray[Math.floor(Math.random() * 5)];
        console.log("The computer chose: " + choice);
        return choice
    }
}

module.exports = {
    Player,
    HumanPlayer,
    ArtificialPlayer
}
