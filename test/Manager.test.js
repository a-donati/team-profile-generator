const Manager = require('../test/dist/lib/Manager.js')

test("Can instantiate Manager instance", () => {
  const e = new Manager();
  expect(typeof (e)).toBe("object");
});

test("Can set office number via constructor arguments", () => {
  const officenum = 7;
  const e = new Manager("Example", 4, "example@gmail.com", 7)
  expect(e.officeNumber).toEqual(officenum);
});

test("Can get role ('Manager') via getRole()", () => {
  const test = "Manager";
  const e = new Manager("Darrell", 4, "abc@123.com", 1)
  expect(e.getRole()).toEqual(test);
});
