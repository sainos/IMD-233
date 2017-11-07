var carName = prompt("Enter the model of your car");
var date = prompt("Enter the date");
var milesDriven = prompt("Enter the number of miles driven");
var mDeducted = milesDriven * 0.57;

console.log(mDeducted);

document.getElementById("deduction").innerHTML = "You can get a deduction of $" + mDeducted;
