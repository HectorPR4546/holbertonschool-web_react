/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// Example usage to ensure compilation
const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

const teacher: Subjects.Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 1 };

cpp.setTeacher = teacher;
react.setTeacher = teacher;
java.setTeacher = teacher;

// eslint-disable-next-line no-console
console.log(cpp.getRequirements());
// eslint-disable-next-line no-console
console.log(cpp.getAvailableTeacher());

