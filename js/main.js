let number1 = 5;
let number2 = 15;

function isItTwenty(num1, num2) {
    if (num1 === 20 || num2 === 20 || num1 + num2 <= 20) {
        return true;
    } else {
        return false;
    }
}
console.log(isItTwenty(number1, number2));
