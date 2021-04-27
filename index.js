let model = require("./student");

// Arreglo
students = [];

// Estudiantes

let student1 = {
  name: "Miguel Arciniega",
  controlNumber: "16400881",
  email: "milearciniegara@iitepic.edu.mx",
  grade: 69,
};
let student2 = {
  name: "Blanca Estefani Ramirez Barajas",
  controlNumber: "16400985",
  email: "blesramirezba@iitepic.edu.mx",
  grade: 100,
};
let student3 = {
  name: "Daniel Alejandro Ayala Ramirez",
  controlNumber: "16400935",
  email: "daalayalara@iitepic.edu.mx",
  grade: 85,
};
let student4 = {
  name: "Jerry Huizar Gonzalez",
  controlNumber: "16401985",
  email: "lugehuizarma@iitepic.edu.mx",
  grade: 75,
};

// ------------------------- Insert -----------------------------------

// Insertamos 4 estudiantes al arreglo

students = model.create(student1, students);
students = model.create(student2, students);
students = model.create(student3, students);
students = model.create(student4, students);

// Leemos el contenido del arreglo
model.read(students);

// -------------------------- Delete -----------------------------------

/* 
Eliminamos al estudiante con el número 
de control 16400881 del arreglo 
*/

students = model.erase(student3.controlNumber, students);

// Leemos el contenido del arreglo
model.read(students);

// -------------------------- Update -----------------------------------

// Actualizamos a un estudiante mediante su número de control

students = model.update(
  student4.controlNumber,
  {
    name: "Luis Gerardo Huizar Martinez",
    controlNumber: "16400895",
    email: "lugehuizarma@iitepic.edu.mx",
    grade: 85,
  },
  students
);

// Leemos el contenido del arreglo
model.read(students);

// -------------------------- Read -----------------------------------

// Mostramos al alumno que coincida con el número de control introducido
model.readById(student2.controlNumber, students);

// -------------------------- Read -----------------------------------

// Mostramos a los alumnos aprovados
model.showApproved(students);
