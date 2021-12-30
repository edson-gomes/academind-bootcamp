// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
let courseName = "WebDev Bootcamp 2022";
//    - A variable that stores the price of that course
let coursePrice = 100;
//    - A variable that stores the three main goals that you have, when taking this course
let courseGoals = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// 2) Output ("alert") the three variable values
alert(courseName);
alert(coursePrice);
alert(courseGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter
let course = {
  name: "WebDev Bootcamp 2022",
  price: 100,
  goals: ["Learn HTML", "Learn CSS", "Learn JavaScript"],
};

alert(course.name);
alert(course.price);
alert(course.goals);

// 4) Also output the second element in your "main goals" variable
alert(course.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function accessListElement(userList, elementNumber) {
  return userList[elementNumber];
}

// 6) Execute your custom command from (5) and output ("alert") the result
let listElement = accessListElement(courseGoals, 1);
alert(listElement);
