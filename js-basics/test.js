//Fn to return max of two numbers
function max(a, b) {
    return (a > b) ? a : b;
}

let maxOfTwoNos = max(10, 100);
console.log(maxOfTwoNos);

//FizzBuzz
const output = fizzbuzz(5);
console.log(output);

function fizzbuzz(input) {

    console.log(typeof input);

    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;

}