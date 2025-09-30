# team-profile-generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A team profile generator created using node.js to help automate creating an employee roster. User will be prompted to enter the manager, engineer and intern information, which will be used to generate a template to display the input. Template includes a banner and employee information displayed in a card format. The generated employee profile index.html page is clean and mobile responsive. Classes were tested using [Jest](https://www.npmjs.com/package/jest). 

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [References](#References)
- [License](#license)
- [Contributing](#Contributing)
- [Questions](#Questions)

## Installation

From GitHub, fork or clone the repo. The user must have Node.js installed. Once forked, run `npm i` from the root directory to install required dependencies.

## Usage

From the application's root directory, run `node index.js`. Follow the user prompts to provide the content for the generated html page. Upon completion, the application will generate a new file, `index.html`, in the `output` directory.

![Gif demonstration of team-profile-generator usage](dist/lib/images/employee-roster-demo.gif)
![html generated output page for employee roster](dist/lib/images/team-profile-generator-screenshot.png)

## References

- [Jest](https://www.npmjs.com/package/jest)
- [Inquirer](https://www.npmjs.com/package/inquirer)

## License

This application is covered under MIT License

  <details>
    <summary>
      License Text
    </summary> 
 
  Copyright (c) 2022 a-donati
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
        
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
        
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  </details>


