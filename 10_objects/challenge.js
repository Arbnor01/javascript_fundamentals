const printCohortInfo = (cohort) => {
    const { id, name, students } = cohort;
    console.log(`${id} - ${name} - ${students.length} students in this cohort`);
  };
  
  const cohort = {
    name: 'May2022',
    id: 1234,
    students: ['Della', 'Zara', 'Arbnor']
  };
  
  printCohortInfo(cohort);