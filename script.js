var names = prompt("Enter Your Name");
var mathsmarks = +prompt("Enter Your Maths marks");
var Islamiatmarks = +prompt("Enter Your Islamiat marks");
var Urdumarks = +prompt("Enter Your Urdu marks");
var Englishmarks = +prompt("Enter Your English marks");
var studentsGivenMarks=(mathsmarks + Islamiatmarks + Urdumarks + Englishmarks );
var totalMarks=(400);
var percentage=(studentsGivenMarks / totalMarks *100 )
// document.write(names +" marks is " + studentsGivenMarks + " out of " + totalMarks + " and percentage is " +  percentage + " % " );
console.log(names +" marks is " + studentsGivenMarks + " out of " + totalMarks + " and percentage is " +  percentage + " % " );