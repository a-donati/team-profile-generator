const Engineer = require('../tests/dist/lib/Engineer.js')


test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
  });
