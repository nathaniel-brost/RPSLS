const PromptSync = require("prompt-sync");

class Player {
    constructor(name) {
        this.score = 0,
        this.name = name
    }
}

class HumanPlayer extends Player {
    constructor(name){
        super(name);
    }
    RPSLS (){
        // let choiceArray = [paper, lizard, scissors, rock, spock]; 
        let choice = PromptSync("What is your choice? 'rock', 'paper', 'scissors', 'lizard', or 'spock'.");
        if (choice = "rock") {
            let 
        }
        return choice;
    }
}

class ArtificialPlayer extends Player {
    constructor(name){
        super(name);
    }
    RPSLS (){
        let choiceArray = [paper, lizard, scissors, rock, spock]; 
        let choice = choiceArray[Math.floor(Math.random() * 5)];
        return choice
    }
}

module.exports = {
    Player,
    HumanPlayer,
    ArtificialPlayer
}
