function greetUser(greetingPrefix, UserName = "user") {
  //   console.log(greetingPrefix + " " + UserName + "!");
  console.log(`${greetingPrefix} there, ${UserName}!`);
}

greetUser("Hi", "Edi");
greetUser("Hello");

function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];

console.log(sumUp(...inputNumbers));

console.log(sumUp);
