const Employee = require('../tests/dist/lib/Employee.js')


test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  test("Can set name via constructor arguments", () => {
    const name = "Florence";
    const e = new Employee(name)
    expect(e.name).toEqual(name);
  });

  test("Can set id via constructor arguments", () => {
    const id = 1;
    const e = new Employee("Example", id)
    expect(e.id).toEqual(id);
  });

  test("Can set email via constructor arguments", () => {
    const email = 'example@gmail.com';
    const e = new Employee("Example", 4, "example@gmail.com")
    expect(e.email).toEqual(email);
  });

  test("Can get name via getName()", () => {
    const test = "Florence";
    const e = new Employee("Florence", 1, "abc@123.com")
    expect(e.getName()).toEqual(test);
  });

  test("Can get id via getId()", () => {
    const test = 4;
    const e = new Employee("Darrell", 4, "abc@123.com")
    expect(e.getId()).toEqual(test);
  });

    test("Can get role via getRole()", () => {
    const test = 'Employee';
    const e = new Employee("Darrell", 4, "abc@123.com")
    expect(e.getRole()).toEqual(test);
  });