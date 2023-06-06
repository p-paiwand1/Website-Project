// Program Title

// HTML variables
let outputEl1 = document.getElementById("output1");
let outputEl2 = document.getElementById("output2");
let outputEl3 = document.getElementById("output3");
let outputEl4 = document.getElementById("output4");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  // count variables
  let numCorrect = 0;
  let numincorrect = 0;

  //  Question 1
  let type1 = document.getElementById("type1-in").value.toLowerCase();
  if (type1 === "6") {
    outputEl1.innerHTML = "Correct";
    numCorrect++;
  } else {
    outputEl1.innerHTML = "Incorrect";
    numincorrect++;
  }

  // Question 2
  let type2 = document.getElementById("type2-in").value.toLowerCase();
  if (type2 === "separated") {
    outputEl2.innerHTML = "Correct";
    numCorrect++;
  } else {
    outputEl2.innerHTML = "Incorrect";
    numincorrect++;
  }

  // Question 3
  let type3 = document.getElementById("type3-in").value.toLowerCase();
  if (type3 === "1895") {
    outputEl3.innerHTML = "Correct";
    numCorrect++;
  } else {
    outputEl3.innerHTML = "Incorrect";
    numincorrect++;
  }

  // Question 4
  let type4 = document.getElementById("type4-in").value.toLowerCase();
  if (type4 === "all" || type4 === "Ball, Net, Shirt, Shoes") {
    outputEl4.innerHTML = "Correct";
    numCorrect++;
  } else {
    outputEl4.innerHTML = "Incorrect";
    numincorrect++;
  }

  // Feedback
  if (numCorrect === 4) {
    document.getElementById("feedback").innerHTML = "You Did a Great Job";
  } else if (numCorrect === 3) {
    document.getElementById("feedback").innerHTML = "Well Done!";
  } else if (numCorrect === 2) {
    document.getElementById("feedback").innerHTML = "Perfect";
  } else {
    document.getElementById("feedback").innerHTML = "Try It one more Time.";
  }

  // Quiz Score
  if (numCorrect === 4) {
    document.getElementById("score").innerHTML = "You got 4/4 (100%)";
  } else if (numCorrect === 3) {
    document.getElementById("score").innerHTML = "You got 3/4 (75%)";
  } else if (numCorrect === 2) {
    document.getElementById("score").innerHTML = "You got 2/4 (50%)";
  } else {
    document.getElementById("score").innerHTML = "You got 1/4 (25%)";
  }

  // Calculate Percentage
  let percent = (numCorrect / 4) * 100;

  // Output the Final Results
  console.log(numCorrect);
  console.log(numincorrect);
  document.getElementById("output").innerHTML = percent;
}
