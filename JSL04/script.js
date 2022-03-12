//callback
const studentList = ['Callan', 'Britt', 'Ashley'];

const getStudents = () => {
  setTimeout(() => {
    studentList.forEach((student) => {
      console.log(student);
    });
  }, 500);
};

const addStudent = (student, callback) => {
  setTimeout(() => {
    studentList.push(student);
      callback();
  }, 1000);
};

addStudent('Timothy', getStudents);

//promise//

const studentList2= ['Callan', 'Britt', 'Ashley'];

const getStudents2 = () => {
  setTimeout(() => {
    studentList2.forEach((student2) => {
      console.log(student2);
    });
  }, 500);
};

const addStudent2 = (student2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      studentList2.push(student2);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error!');
      }
    }, 500);
  });
};

addStudent2('Timothy').then(getStudents2)

   
//asynchronous code//
const studentList3 = ['Callan', 'Britt', 'Ashley'];

const getStudents3 = () => {
  setTimeout(() => {
    studentList3.forEach((student3) => {
      console.log(student3);
    });
  }, 500);
};

const addStudent3 = (student3) => {
  setTimeout(() => {
    studentList3.push(student3);
  }, 1000);
};

const addAndGetStudents = async() => {
  await addStudent3('Timothy');
  getStudents3();
};

addAndGetStudents();

