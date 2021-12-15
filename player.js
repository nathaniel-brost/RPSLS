const PromptSync = require("prompt-sync");

class Player {
    constructor(name) {
        this.score = 0,
        this.name = name
    }


}

class HumanPlayer extends User {
    RPSLS (){
        // let choiceArray = [rock, paper, scissors, lizzard, spock]; 
        let choice = PromptSync("What is your choice? 'rock', 'paper', 'scissors', 'lizzard', or 'spock'.");
        return choice;
    }
}

class ArtificialPlayer extends User {
    RPSLS (){
        let choiceArray = [rock, paper, scissors, lizzard, spock]
        let choice = choiceArray[Math.floor(Math.random() * 5)];
        return choice
    }
}

module.exports = Player;
module.exports = HumanPlayer; 
module.exports = ArtificialPlayer
