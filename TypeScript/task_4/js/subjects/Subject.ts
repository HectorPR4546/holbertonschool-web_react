/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    protected _teacher?: Teacher;

    set setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }
  }
}
