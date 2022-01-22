const hobbies = ["Sports", "Cooking"]; // a pointer to the array is stored
const age = 34; // the value itself is stored

console.log(hobbies);

hobbies.push("Reading"); // the addres of the array doesn't change

// hobbies = ["Coding", "Sleeping"]; // not allowed! new address is stored

console.log(hobbies);

// Primitive values: numbers, strings, booleans & more (undefined)
// Reference values: Objectives

const person = { age: 32 };

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
  //   return p.age - 18;
}

console.log(getAdultYears({ ...person }));
console.log(person);
