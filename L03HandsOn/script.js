let students = [
    { id: '01', name: 'Jacob', sports: 'Soccer' },
    { id: '02', name: 'Valerie', sports: 'Basketball' },
    { id: '03', name: 'Blake', sports: 'Soccer' },
    { id: '04', name: 'Todd', sports: 'Basketball' },
    { id: '05', name: 'Virginia', sports: 'Hockey' },
    { id: '06', name: 'Leo', sports: 'Tennis' },
    { id: '07', name: 'Killian', sports: 'Hockey' },
    { id: '08', name: 'Jennifer', sports: 'Basketball' },
    { id: '09', name: 'Leo', sports: 'Tennis' },
    { id: '10', name: 'Duke', sports: 'Basketball' },
  ];

  //applying filter function, to kids, who play basketball//

  let bBall = students
  .filter(function (student) {
    return student.sports==='Basketball';
  })
  .map(function (student){
    return student.name;
  });
  
  console.log('The Basketball Players are:');

  //Names of the Basketball Players

  bBall.forEach(function (players){
    console.log(players);
  });

