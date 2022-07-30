let calc = () => {
  let operator;
  let firstNum;
  let secondNum;
  for (;;) {
    operator = prompt("Enter operator");
    let operatorCheck =
      operator === "/" ||
      operator === "*" ||
      operator === "+" ||
      operator === "-"
        ? true
        : false;
    if (operatorCheck) {
      break;
    } else {
      console.log("Invalid operator");
    }
  }

  for (;;) {
    firstNum = Number(prompt("Enter first number"));
    secondNum = Number(prompt("Enter second number"));
    let numberCheck = !isNaN(firstNum && secondNum) ? true : false;
    if (numberCheck) {
      break;
    } else {
      console.log(`Invalid number`);
    }
  }
  console.log(`First number is ${firstNum}`);
  console.log(`Second number is ${secondNum}`);
  console.log(`Operator is ${operator}`);
  switch (operator) {
    case "+":
      console.log(
        `${firstNum} ${operator} ${secondNum} = ${firstNum + secondNum}`
      );
      break;
    case "-":
      console.log(
        `${firstNum} ${operator} ${secondNum} = ${firstNum - secondNum}`
      );
      break;
    case "/":
      console.log(
        `${firstNum} ${operator} ${secondNum} = ${firstNum / secondNum}`
      );
      break;
    case "*":
      console.log(
        `${firstNum} ${operator} ${secondNum} = ${firstNum * secondNum}`
      );
      break;
  }
};
calc();
let findDaysInMonth = (month, year) => {
  let monthNumber = new Date(Date.parse(month + "1, 2000")).getMonth() + 1;
  let days = new Date(year, monthNumber, 0).getDate();
  console.log(`The ${month} of ${year} has ${days} days`);
};
findDaysInMonth("February", 2013);
findDaysInMonth("February", 2012);
findDaysInMonth("April", 2012);

let checkAnagram = (firstWord, secondWord) => {
  if (
    firstWord
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .includes(secondWord.toLowerCase().split("").sort().join(``))
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(checkAnagram("sleep", "speelf"));
console.log(checkAnagram("sleep", "SlEEp"));
