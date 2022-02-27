const Employee = require('./Employee');
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = gitHub
    }
    getGithub(){
        // get github

    }
    getrole() {
        return `Engineer`
    }
}


module.exports = Engineer