function myFunction(a, b) {
  return a + b;
}

function multiNum(x, y) {
  return x * y;
}

let result = myFunction(30, 40);
console.log(result);

let r2 = myFunction(10, myFunction(10, 30));
console.log(r2);

let r3 = multiNum(10, myFunction(10, 20));
let r4 = myFunction(10, multiNum(10, 20));

console.log(r3);
console.log(r4);

let r5 = myFunction(10, multiNum(10, myFunction(10, multiNum(20, 30))));
console.log(r5);

function x() {
  return 10;
}
function y() {
  return 20;
}
function c(x, y) {
  return x + y;
}

let r6 = c(x(), y());

console.log(r6);
