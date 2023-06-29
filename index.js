function studentMarks() {
  // Prompt the user to enter marks
  const marks = parseInt(prompt("Enter marks (between 0 and 100):"));

  let grade;

  // Check if marks are valid
  if (marks > 100) {
    grade = "Invalid. Grade must be between 0 and 100";
  } else if (marks > 79) {
    grade = 'A'; // If marks are greater than 79, assign grade A
  } else if (marks >= 60) {
    grade = 'B'; // If marks are between 60 and 79, assign grade B
  } else if (marks >= 50) {
    grade = 'C'; // If marks are between 50 and 59, assign grade C
  } else if (marks >= 40) {
    grade = 'D'; // If marks are between 40 and 49, assign grade D
  } else if (marks >= 0 && marks < 40) {
    grade = 'E'; // If marks are between 0 and 39, assign grade E
  } else {
    grade = "Invalid. Grade must be between 0 and 100"; // If marks are negative or greater than 100, assign an invalid grade
  }

  return `The student's grade is: ${grade}`;
}
 function checkSpeed(speed) {
    // Constants for speed limit, maximum demerit points, and demerit point increment
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
  
    // Calculate demerit points by subtracting speed limit from speed and dividing by increment
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
    if (speed < speedLimit) {
      // If speed is below the speedlimit, return "Ok"
      return "Ok";
    } else if (demeritPoints > maxDemeritPoints) {
      // If demerit points exceed the maximum points, return "License suspended"
      return "License suspended";
    } else {
      // Otherwise, return the calculated demerit points
      return `Points: ${demeritPoints}`;
    }
  }
  
  console.log(checkSpeed(80));