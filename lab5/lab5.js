class Person {
    constructor(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.healthRate = validateHealthRate(healthRate);
        this.money = money;
        this.sleepMood = sleepMood;
    }
    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'happy';
        }
        else if (hours < 7) {
            this.sleepMood = "tired";
        }
        else {
            this.sleepMood = "lazy";
        }

    }
    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    }

    buy(items) {
        this.money -= items * 10;
    }
}

class Employee extends Person {
    constructor(fullName, money, sleepMood, healthRate, id, email, workMood, salary, isManager) {
        super(fullName, money, sleepMood, healthRate)
        this.id = id;
        this.email = email;
        this.workMood = workMood;
        this.salary = validateSalary(salary);
        this.isManager = isManager;
    }
    work(hours) {
        if (hours === 8) {
            this.workMood = 'happy';
        } else if (hours > 8) {
            this.workMood = 'tired';
        } else if (hours < 8) {
            this.workMood = 'lazy';
        }
    }
}



class office {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    getAllEmployees() {
        let allEmployees = "All Employees:\n";
        for (let i = 0; i < this.employees.length; i++) {
            allEmployees += this.employees[i].fullName + "\n";
        }
        alert(allEmployees);
    }


    hire(employee) {
        const existingEmployee = this.employees.find(emp => emp.id === employee.fullName);
        if (!existingEmployee) {
            this.employees.push(employee);
            alert(`Employee ${employee.fullName} hired successfully.`);
        } else {
            alert(`Employee ${employee.fullName} already exists.`);
        }
    }

    fireEmployee(empId) {
        const index = this.employees.findIndex(employee => employee.id === empId);

        if (index !== -1) {
            this.employees.splice(index, 1);
            return true; // Employee successfully fired
        } else {
            return false; // Employee not found
        }
    }


    getEmployee(empId) {
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].id === empId) {
                const employeeCopy = Object.assign({}, this.employees[i]);
                if (employeeCopy.isManager) {
                    delete employeeCopy.salary;
                }
                return employeeCopy;
            }
        }
        return null;
    }


}
function validateSalary(salary) {
    if (salary >= 1000) {
        return salary;
    }
    else {
        return "Invalid";
    }
}

function validateHealthRate(healthRate) {
    if (healthRate >= 0 && healthRate <= 100) {
        return healthRate;
    }
    else {
        return "Invalid";
    }
}

const myOffice = new office("OFFICE");

function menu() {
    choice = Number(prompt(`\nMenu:
            1. Add new employee.
            2. If manager press.
            3. If normal employee press.
            4. Get all employees.
            5. Get employee details.
            6. Fire employee.
            7. Quit the application.
            `));

    handleUserChoice(choice);
    if (choice !== 7) {
        menu();
    }
}

function handleUserChoice(choice) {
    switch (choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            addManager();
            break;
        case 3:
            addNormalEmployee();
            break;
        case 4:
            if (myOffice.employees.length === 0) {
                alert('No employees found, The list is empty');
            } else {
                myOffice.getAllEmployees();
            }
            break;
        case 5:
            if (myOffice.employees.length === 0) {
                alert('No employees found, The list is empty');
            } else {
                getEmployeeDetails();
            }
            break;
        case 6:
            fireEmployeeById();
            break;
        case 7:
            alert("Good Bye!");
            break;
        default:
            alert("Invalid choice, Please try again!");
            break;
    }
}

function addEmployee() {
    alert("\nEnter Employee Details:");
    const fullName = prompt("Name: ");
    const money = prompt("Money: ");
    const sleepMood = prompt("SleepMood: ");
    const healthRate = prompt("HealthRate: ");
    const email = prompt("Email: ");
    const workMood = prompt("Work Mood: ");
    const salary = parseInt(prompt("Salary: "));
    const isManager = confirm("Is Manager?");

    const employee = new Employee(fullName, money, sleepMood, healthRate, myOffice.employees.length + 1, email, workMood, salary, isManager);
    myOffice.hire(employee);
    console.log(employee);
}

function addManager() {
    alert("\nEnter Manager Details:");
    const fullName = prompt("Name: ");
    const money = prompt("Money: ");
    const sleepMood = prompt("SleepMood: ");
    const healthRate = prompt("HealthRate: ");
    const email = prompt("Email: ");
    const workMood = prompt("Work Mood: ");
    const salary = parseInt(prompt("Salary: "));

    const manager = new Employee(fullName, money, sleepMood, healthRate, myOffice.employees.length + 1, email, workMood, salary, true);
    myOffice.hire(manager);
    console.log(manager);
}

function addNormalEmployee() {
    alert("\nEnter Normal Employee Details:");
    const fullName = prompt("Name: ");
    const money = prompt("Money: ");
    const sleepMood = prompt("SleepMood: ");
    const healthRate = prompt("HealthRate: ");
    const email = prompt("Email: ");
    const workMood = prompt("Work Mood: ");
    const salary = parseInt(prompt("Salary: "));

    const normalEmployee = new Employee(fullName, money, sleepMood, healthRate, myOffice.employees.length + 1, email, workMood, salary, false);
    myOffice.hire(normalEmployee);
    console.log(normalEmployee);
}


function getEmployeeDetails() {
    const empId = Number(prompt("Enter employee ID: "));
    const employeeDetails = myOffice.getEmployee(empId);

    if (employeeDetails !== null) {
        let detailsString = `Employee Details:\n`;
        for (const [key, value] of Object.entries(employeeDetails)) {
            detailsString += `${key}: ${value}\n`;
        }
        alert(detailsString);
    } else {
        alert(`Invalid employee ID: ${empId}`);
    }
}




function fireEmployeeById() {
    const empId = Number(prompt("Enter employee ID to fire: "));
    const isEmployeeFired = myOffice.fireEmployee(empId);

    if (isEmployeeFired) {
        alert(`Employee with ID ${empId} has been fired.`);
    } else {
        alert(`Employee not found with ID: ${empId}`);
    }
}



menu();
