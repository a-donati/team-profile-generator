const Employee = require('./Employee');
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getrole(){
        return `Manager`
    }
}

module.exports = Manager