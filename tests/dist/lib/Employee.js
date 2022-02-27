const inquirer = require("inquirer");
// prompt user for questions
// choice prompt - choose manager, engineer, intern
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        // get name
    }

    getId() {
        // get Id
    }

    getEmail(){
        // get email
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee