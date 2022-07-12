function fibonacci() {
  let number = prompt("Enter your number");
  // console.log(number);
  let a = 0;
  let b = 1;
  let result = 0;
  document.write(`<ul><li>${result}</li>`);
  document.write(`<li>${b}</li>`);
  for (let i = 3; i <= number; i++) {
    result = a + b;
    a = b;
    b = result;
    // console.log(result);
    document.write(`<li>${result}</li>`);
  }
  document.write(`</ul>`);
}
fibonacci();

function stairs() {
  let count = prompt("Enter your count for stairs");
  document.write(`<p>Stairs:</p><ul>`);
  let str = "";
  for (let i = 1; i <= count; i++) {
    //
    str += i + " ";
    // console.log(str);
    document.write(`<li>${str}</li>`);
  }
  document.write("</ul>");
}
stairs();
