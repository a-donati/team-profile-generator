const Engineer = require('../dist/lib/Engineer')

test("Can instantiate Engineer instance", () => {
  const e = new Engineer();
  expect(typeof (e)).toBe("object");
});

test("Can set github via constructor arguments", () => {
  const newGit = 'papasmurf';
  const e = new Engineer("Papa Smurf", 2, "psmurf@gmail.com", "papasmurf")
  expect(e.gitHub).toEqual(newGit);
});

test("Can get gitHub username via getGithub()", () => {
  const test = "mysteryInc";
  const e = new Engineer("Daphne", 0, "abc@123.com", "mysteryInc")
  expect(e.getGithub()).toEqual(test);
});

test("Can get role ('Engineer') via getRole()", () => {
  const test = "Engineer";
  const e = new Engineer("Daphne", 0, "abc@123.com", "mysteryInc")
  expect(e.getRole()).toEqual(test);
});