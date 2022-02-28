// generateTeam is called from team function below
const generateTeam = (team) => {
    console.log(team);
    // html set to an empty array in order to push desired HTML which depends on user selection
    const html = [];
    // generate manager html card by inserting manager information into card template
    const generateManager = manager => {
        let managerHtml = `
        <div class="col">
              <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${manager.name}</h5>
                  <p class="card-text"><i class='fa fa-id-badge p-2'></i>Manager</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee Id: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                  </ul>
              </div>
            </div>
        `;
        // manager HTML is pushed into html array to be inserted within the body of team function below
        html.push(managerHtml)
    }
    // generate engineer html card using engineer object key value pairs
    const generateEngineer = engineer => {
        let engineerHtml = `
        <div class="col">
              <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${engineer.name}</h5>
                  <p class="card-text"><i class='fas fa-otter'></i>Engineer</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee Id: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">Github: <a target="_blank" href="http://www.github.com/${engineer.github}">${engineer.github}</a></li>
                  </ul>
              </div>
            </div>
        `;
         // engineer HTML is pushed into html array to be inserted within the body of team function below
        html.push(engineerHtml)
    }
        // generate intern html card using intern object key value pairs
        const generateIntern = intern => {
            let internHtml = `
            <div class="col">
                  <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${intern.name}</h5>
                      <p class="card-text"><i class='fa fa-user-graduate'></i>
                      Intern</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee Id: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School:${intern.school}</li>
                      </ul>
                  </div>
                </div>
            `;
             // intern HTML is pushed into html array to be inserted within the body of team function below
            html.push(internHtml)
        }
        // for loop which iterates through team using getRole() to determine which html generating function is to be called
        for(let i = 0; i < team.length; i++){
            if(team[i].getRole() === "Manager"){
                generateManager(team[i])
            }if(team[i].getRole() === "Engineer") {
                generateEngineer(team[i]);
            } if(team[i].getRole() === "Intern") {
                generateIntern(team[i]);
            }
        }
        // .join() pieces the html array together, forming one HTML template which is displayed on the created html page containing the inserted information
        return html.join("")
    }

    // export team to be used in index.js file
    // generateTeam() is called with passed in team members object information from index.js
module.exports = team => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <header class="bg-dark p-4"><h1 class="text-white mx-auto text-center"><i class='fa fa-user-circle p-4'></i>Employees</h1></header>

    <main>

    <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
      ${generateTeam(team)}
      </div>
    </main>
</body>
</html>

`}

