let create = (student, students) => {
  students.push(student);
  return students;
};

let read = (students) => {
  console.log("------------------> Estudiantes <------------------\n");
  students.forEach((student, i) => {
    console.log(` {${i + 1}}-> | Nombre: ${student.name}`);
    console.log(`       | Numero de control: ${student.controlNumber}`);
    console.log(`       | Email: ${student.email}`);
    console.log(`       | Calificación: ${student.grade}\n`);
  });
};

let erase = (studentId, students) => {
  students.forEach((student, i) => {
    student.controlNumber == studentId ? students.splice(i, 1) : null;
  });
  return students;
};

let update = (studentId, newStudent, students) => {
  students.forEach((student, i) => {
    student.controlNumber == studentId ? (students[i] = newStudent) : null;
  });
  return students;
};

let readById = (studentId, students) => {
  console.log("------------------> Estudiantes <------------------\n");
  console.log(`Filter: NC = ${studentId}\n`);
  students.forEach((student, i) => {
    if (student.controlNumber == studentId) {
      console.log(` {${i + 1}}-> | Nombre: ${student.name}`);
      console.log(`       | Numero de control: ${student.controlNumber}`);
      console.log(`       | Email: ${student.email}`);
      console.log(`       | Calificación: ${student.grade}\n`);
    }
  });
};

let showApproved = (students) => {
  console.log("------------------> Estudiantes <------------------\n");
  console.log("Filter: Approved (Grade >= 70)\n");
  students.forEach((student, i) => {
    if (student.grade >= 70) {
      console.log(` {${i + 1}}-> | Nombre: ${student.name}`);
      console.log(`       | Numero de control: ${student.controlNumber}`);
      console.log(`       | Email: ${student.email}`);
      console.log(`       | Calificación: ${student.grade}\n`);
    }
  });
};

module.exports.create = create;
module.exports.read = read;
module.exports.erase = erase;
module.exports.update = update;
module.exports.readById = readById;
module.exports.showApproved = showApproved;
