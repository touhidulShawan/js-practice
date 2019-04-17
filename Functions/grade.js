// Grade Calculator
function gradeCalc(score, totalScore) {
  let percentage = (score / totalScore) * 100;

  let gradeLetter = "";

  if (percentage >= 90) {
    gradeLetter = "A";
  } else if (percentage >= 80) {
    gradeLetter = "B";
  } else if (percentage >= 70) {
    gradeLetter = "C";
  } else if (percentage >= 60) {
    gradeLetter = "D";
  } else {
    gradeLetter = "F";
  }

  return `You get ${gradeLetter} (${percentage}%)`;
}

let result = gradeCalc(9, 20);
console.log(result);
