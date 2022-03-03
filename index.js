const inquirer = require('inquirer');
const Manager = require('./test/dist/lib/Manager');
const Engineer = require('./test/dist/lib/Engineer');
const Intern = require('./test/dist/lib/Intern');
const generateTeam = require('./generatehtml.js');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
// empty array to push added team members to
const teamMembers = [];

// prompt for managers information
// promptManager is an IIFE, immediately runs once user runs the program
const promptManager = (() => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager name:',
            validate: nameInput => {
                // validate input
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter Manager's name.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID:',
            validate: employeeId => {
                // validate input
                if (employeeId) {
                    return true;
                } else {
                    console.log(`Please enter employee's ID.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email:',
            validate: email => {
                // validate input
                if (email) {
                    return true;
                } else {
                    console.log(`Please enter email`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Manager office number:',
            validate: officeNumber => {
                // validate input
                if (officeNumber) {
                    return true;
                } else {
                    console.log(`Please enter Manager's office number.`);
                    return false;
                }
            }
        }

    ])
        .then(answers => {
            // console.log(answers);
            // create new manager object from answers
            const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
            // push new manager to teamMembers array
            teamMembers.push(manager);
            // call promptMenu()
            promptMenu();
        })
})()

// user selects a choice from list below to continue
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select an option below to proceed:',
            choices: ['Add an Engineer', 'Add an Intern', 'Finished building team']
        }
    ])
        .then(answers => {
            // take answers from menu prompt, insert into switch statement
            switch (answers.menu) {
                // when adding new engineer, promptEngineer() is called
                case "Add an Engineer":
                    promptEngineer();
                    break;
                case "Add an Intern":
                    // when adding new intern promptIntern() is called
                    promptIntern();
                    break;
                default:
                    // default - finished building team, continue to buildTeam()
                    buildTeam();
            }
        })
}
// prompt user for engineer information to create new instance of Engineer
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Engineer\'s name:',
            validate: nameInput => {
                // validate input
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter Engineer's name.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID:',
            validate: employeeId => {
                // validate input
                if (employeeId) {
                    return true;
                } else {
                    console.log(`Please enter employee's ID.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email:',
            validate: email => {
                // validate input
                if (email) {
                    return true;
                } else {
                    console.log(`Please enter email`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter Engineer\'s GitHub username:',
            validate: gitHub => {
                // validate input
                if (gitHub) {
                    return true;
                } else {
                    console.log(`Please enter Engineer's GitHub username.`);
                    return false;
                }
            }
        }
    ])
        .then(answers => {
            // create new Engineer object from answer inputs
            const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.gitHub);
            // push engineer object into teamMembers array
            teamMembers.push(engineer);
            // call promptMenu() to ask user how to proceed
            promptMenu();
        })

}
// prompt user for intern information
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Intern\'s name:',
            validate: nameInput => {
                // validate input
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter Intern's name.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID:',
            validate: employeeId => {
                // validate input
                if (employeeId) {
                    return true;
                } else {
                    console.log(`Please enter employee's ID.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email:',
            validate: email => {
                // validate input
                if (email) {
                    return true;
                } else {
                    console.log(`Please enter email`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'schoolName',
            message: 'Enter Intern\'s school name:',
            validate: schoolName => {
                // validate input
                if (schoolName) {
                    return true;
                } else {
                    console.log(`Please enter Intern's school name.`);
                    return false;
                }
            }
        }
    ])
        .then(answers => {
            // creat new intern from user input
            const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.schoolName);
            // push intern object to teamMembers array
            teamMembers.push(intern);
            // console.log(teamMembers);
            // call promptMenu() for user to choose how to proceed
            promptMenu();
        })

}

// once finished, buildTeam() writes to index.html, teamMembers array is passed into generateTeam();
const buildTeam = () => {
    //check to see if "output" file does not exist, if so, create one
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    // write to /output/index.html with generateTeam(teamMembers) data
    fs.writeFileSync(outputPath, generateTeam(teamMembers), "utf-8")
}

