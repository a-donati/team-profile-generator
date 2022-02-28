const Intern = require('../tests/dist/lib/Intern.js')

test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
  });

  test("Can set school via constructor arguments", () => {
    const test = "Hogwarts";
    const e = new Intern("Florence", 1, "Florence@123.com", "Hogwarts")
    expect(e.school).toEqual(test);
  });

  test("Can get school via getSchool()", () => {
    const test = "Clown School";
    const e = new Intern("Fred", 4, "fred@123.com", "Clown School")
    expect(e.getSchool()).toEqual(test);
  });

    test("Can get role via getRole()", () => {
    const test = 'Intern';
    const e = new Intern("Sabrina", 8, "sabrina@123.com", "Merrimack College")
    expect(e.getRole()).toEqual(test);
  });