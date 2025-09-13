interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow additional properties of any type
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Function interface and implementation
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName.charAt(0)}. ${lastName}`;

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// eslint-disable-next-line no-console
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// eslint-disable-next-line no-console
console.log(director1);

// eslint-disable-next-line no-console
console.log(printTeacher('John', 'Doe'));

// Interfaces describing the class and its constructor
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const studentExample: StudentClassInterface = new (StudentClass as StudentConstructor)('Alice', 'Johnson');
// eslint-disable-next-line no-console
console.log(studentExample.displayName());
