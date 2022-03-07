// Write your solution in this file!
const employee = { //Initialise employee object
    name: "Test Employee",
    streetAddress: "Test Address"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = {...employee}
    employees.name = "Sam"
    employees.streetAddress = "11 Broadway"
    return employees
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const employees = {...employee}
    delete employees[key]
    return employees
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
