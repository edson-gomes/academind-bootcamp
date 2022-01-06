for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["Ana", "Bianca", "Camila"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = { name: "Edson", age: 34, isAdmin: true };

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done!")
