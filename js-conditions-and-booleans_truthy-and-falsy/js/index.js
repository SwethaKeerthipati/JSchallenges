const truthyOrFalsy = Boolean(3 >= 2);
console.log("The expression is " + truthyOrFalsy);

const equal = Boolean(2 == "2");
console.log("The expression is " + equal);

const equality = Boolean(2 === "2");
console.log("The expression is " + equality);

const strictEquality = Boolean(2 === 2);
console.log("The expression is " + strictEquality);

const stringHello = Boolean("Hello world");
console.log("The expression is " + stringHello);

const stringHello1 = Boolean("");
console.log("The expression is " + stringHello1);

const stringHello2 = Boolean("true");
console.log("The expression is " + stringHello2);

const number = Boolean(0);
console.log("The expression is " + number);

const number1 = Boolean(-50);
console.log("The expression is " + number1);

const number2 = Boolean(50);
console.log("The expression is " + number2);

const number3 = Boolean(5 > 1);
console.log("The expression is " + number3);

const number4 = Boolean("1>10");
console.log("The expression is " + number4);

const stringBool = Boolean("false");
console.log("The expression is " + stringBool);
