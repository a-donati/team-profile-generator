const Intern = require('../tests/dist/lib/Intern.js')


test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
  });
