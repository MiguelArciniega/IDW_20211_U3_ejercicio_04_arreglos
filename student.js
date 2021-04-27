let create = (student, students) => {
  students.push(student);
  console.log(`-> Student added\n`);
  return students;
};

let read = (students) => {
  console.log("-> Show Students:\n");
  students.forEach((student, i) => {
    console.log(`   {${i + 1}}-> | Nombre: ${student.name}`);
    console.log(`         | Numero de control: ${student.controlNumber}`);
    console.log(`         | Email: ${student.email}`);
    console.log(`         | Calificación: ${student.grade}\n`);
  });
};

let erase = (studentId, students) => {
  students.forEach((student, i) => {
    if (student.controlNumber == studentId) {
      students.splice(i, 1);
      console.log(`-> Student{${i + 1}} removed\n`);
    }
  });
  return students;
};

let update = (studentId, newStudent, students) => {
  students.forEach((student, i) => {
    if (student.controlNumber == studentId) {
      students[i] = newStudent;
      console.log(`-> Student{${i + 1}} updated\n`);
    }
  });
  return students;
};

let readById = (studentId, students) => {
  console.log("-> Show Students:\n");
  console.log(`   Filter: Numero de control = ${studentId}\n`);
  students.forEach((student, i) => {
    if (student.controlNumber == studentId) {
      console.log(`   {${i + 1}}-> | Nombre: ${student.name}`);
      console.log(`         | Numero de control: ${student.controlNumber}`);
      console.log(`         | Email: ${student.email}`);
      console.log(`         | Calificación: ${student.grade}\n`);
    }
  });
};

let showApproved = (students) => {
  console.log("-> Show Students:\n");
  console.log("   Filter: Approved\n");
  students.forEach((student, i) => {
    if (student.grade >= 70) {
      console.log(`   {${i + 1}}-> | Nombre: ${student.name}`);
      console.log(`         | Numero de control: ${student.controlNumber}`);
      console.log(`         | Email: ${student.email}`);
      console.log(`         | Calificación: ${student.grade}\n`);
    }
  });
};

module.exports.create = create;
module.exports.read = read;
module.exports.erase = erase;
module.exports.update = update;
module.exports.readById = readById;
module.exports.showApproved = showApproved;
