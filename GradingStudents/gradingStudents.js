function gradingStudents(grades) {
  // Write your code here
  let roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    //if grade is less than 38, no rounding, fail
    //if grade ends with 1,2 || 6,7 do not round
    if (grades[i] < 38 || grades[i] % 5 < 3) {
      roundedGrades.push(grades[i]);
    } else if (grades[i] % 5 >= 3) {
        //if 3,4 || 8,9 round up to next multiple of 5
      roundedGrades.push((grades[i] + (5 - grades[i]%5)))
    } 
  }
  console.log(roundedGrades)
  //return grades after rounding
}

gradingStudents([40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50])