// // function declaration:
function calculateSum1(number1, number2) {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const total = squared1 + squared2;
    const outcome1 = total * total;
    return outcome1;
}
console.log(calculateSum1(1, 2));

// function expression:
const calculateSum2 = function (number1, number2) {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const total = squared1 + squared2;
    const outcome2 = total * total;
    return outcome2;
};
console.log(calculateSum2(1, 2));

// Arrow function:
const calculateSum3 = (number1, number2) => {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const total = squared1 + squared2;
    const outcome2 = total * total;
    return outcome2;
};
console.log(calculateSum3(1, 2));
