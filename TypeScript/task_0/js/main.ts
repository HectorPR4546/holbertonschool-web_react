interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  age: 28,
  location: 'London',
};

const student2: Student = {
  firstName: 'Alan',
  lastName: 'Turing',
  age: 41,
  location: 'Manchester',
};

const studentsList: Student[] = [student1, student2];

// Render a table with firstName and location for each student
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach(({ firstName, location }: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  firstNameCell.textContent = firstName;
  locationCell.textContent = location;

  row.append(firstNameCell, locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

