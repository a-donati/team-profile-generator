const Manager = require('../tests/dist/lib/Manager.js')


test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
  });
