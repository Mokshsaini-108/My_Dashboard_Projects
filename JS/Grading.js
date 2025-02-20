let marks ;
if (marks <= 0) {
  console.log("Invalid Input");
} else {
  if (marks >= 80) {
    if (marks > 100) {
      console.log("Invalid Percentage");
    } else {
      console.log("GRADE A");
    }
  } else if (marks < 80 && marks >= 60) {
    console.log("GRADE B");
  } else if (marks < 60 && marks >= 40) {
    console.log("GRADE C");
  } else {
    console.log("FAIL");
  }
}
