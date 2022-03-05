// generateTeam, team data is passed in to generate appropriate HTML for created objects
const generateTeam = (team) => {
  // html set to an empty array in order to push desired HTML which depends on user selection
  const html = [];
  // generate manager html card by inserting manager information into card template
  const generateManager = manager => {
    let managerHtml = `
        <div class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title"><i class='fa fa-id-badge p-2'></i> ${manager.name}</h5>
            <p class="card-text mb-4"><ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${manager.role}</li>
              <li class="list-group-item">Employee Id: ${manager.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
              <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul></p>
          </div>
        </div>
      </div>
        `;
    // manager HTML is pushed into html array to be inserted within the body of team function below
    html.push(managerHtml)
  }
  // generate engineer html card using engineer object key value pairs
  const generateEngineer = engineer => {
    let engineerHtml = `
        <div class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title"><i class="fab fa-github"></i> ${engineer.name}</h5>
            <p class="card-text mb-4"><ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${engineer.role}</li>
              <li class="list-group-item">Employee Id: ${engineer.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li class="list-group-item">Github: <a target="_blank" href="http://www.github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
            </ul></p>
          </div>
        </div>
      </div>
        `;
    // engineer HTML is pushed into html array to be inserted within the body of team function below
    html.push(engineerHtml)
  }
  // generate intern html card using intern object key value pairs
  const generateIntern = intern => {
    let internHtml = `
            <div class="col-lg-4 mb-3 d-flex align-items-stretch">
            <div class="card">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title"><i class='fa fa-user-graduate'></i> ${intern.name}</h5>
                <p class="card-text mb-4"><ul class="list-group list-group-flush">
                <li class="list-group-item">Role: ${intern.role}</li>
                  <li class="list-group-item">Employee Id: ${intern.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                  <li class="list-group-item">School: ${intern.school}</li>
                </ul></p>
              </div>
            </div>
          </div>
            `;
    // intern HTML is pushed into html array to be inserted within the body of team function below
    html.push(internHtml)
  }
  // for loop which iterates through team array using getRole() to determine which html generating function is to be called
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      generateManager(team[i])
    } if (team[i].getRole() === "Engineer") {
      generateEngineer(team[i]);
    } if (team[i].getRole() === "Intern") {
      generateIntern(team[i]);
    }
  }
  // .join() pieces the html array together, forming one HTML template which is displayed on the created html page containing the inserted information
  return html.join("")
}

// export team
// generateTeam() is called with passed in team members object information from index.js
module.exports = team => {
// template for generated html page
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
<body class="bg-light">
    <header class="bg-dark p-4"><h1 class="text-white mx-auto text-center"><i class='fa fa-user-circle p-4'></i>Employee Roster</h1></header>

    <main>

    <section class="pt-5 pb-5">
    <div class="container">
      <div class="row pt-5">
        <div class="col-12">
          <h3 class="border-bottom mb-4">Team</h3>
        </div>
      </div>
      <div class="row">

      ${generateTeam(team)}
      </div>
    </main>
</body>
</html>

`}

