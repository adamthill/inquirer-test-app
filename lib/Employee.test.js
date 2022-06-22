const Employee = require('./Employee');

test('Create Employee', () => {
    const employee = new Employee({ firstName: 'Bob', lastName: 'Roberts'});
    // expect(employee.firstName).toEqual(String); // will fail
    expect(typeof employee.firstName).toBe('string');
});
