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
        let choiceCap = PromptSync("What is your choice? 'rock', 'paper', 'scissors', 'lizard', or 'spock'.");
        let choice = choiceCap.toLowerCase();
        // Boolean(choice == this.choiceArray[0] || this.choiceArray[1] || this.choiceArray[2] || this.choiceArray[3] || this.choiceArray[4]);
        let boolean = choice == "rock" || "paper" || "scissors" || "lizard" || "spock";
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
