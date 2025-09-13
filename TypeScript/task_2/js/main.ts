interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate to narrow an employee to Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Execute appropriate work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

// Demo
// eslint-disable-next-line no-console
console.log(createEmployee(200).constructor.name);
// eslint-disable-next-line no-console
console.log(createEmployee(1000).constructor.name);
// eslint-disable-next-line no-console
console.log(createEmployee('$500').constructor.name);

// Expected results for executeWork
// eslint-disable-next-line no-console
console.log(executeWork(createEmployee(200)));
// eslint-disable-next-line no-console
console.log(executeWork(createEmployee(1000)));

// String literal types and function
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

// eslint-disable-next-line no-console
console.log(teachClass('Math'));
// eslint-disable-next-line no-console
console.log(teachClass('History'));
