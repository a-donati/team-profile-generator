const Employee = require('../tests/dist/lib/Employee.js')


test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

