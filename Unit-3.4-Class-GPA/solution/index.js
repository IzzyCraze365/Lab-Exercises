//This is my code.  There is no provided solution

let grades = {
  midterm: { grade: 3.3, weight: 1 },
  project: { grade: 4.0, weight: 1 },
  final: { grade: 3.2, weight: 2 },
};

function gpa(someGrades) {
  // write your code here
  let gradesToWeight = Object.keys(someGrades);
  let gradeSum = 0;
  let weightSum = 0;
  gradesToWeight.forEach((testKey) => {
    // The value of test is "midterm", "project" and "final"
    //console.log(`Current Test: ${test}`);  //! TEST
    let grade = someGrades[testKey].grade; //TODO This was not in the readme.md but I like having a median variable.
    let weight = someGrades[testKey].weight; //TODO This was not in the readme.md but I like having a median variable.
    //console.log("Grade:", grade, `Weight: ${weight}`); //! TEST
    gradeSum += grade * weight;
    weightSum += weight;
  });
  let weightedGrade = gradeSum / weightSum;
  return weightedGrade;
}

console.log("The final GPA is " + gpa(grades));
// should print: 'The final GPA is 3.425'
