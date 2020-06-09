//Speed Limit = 70

// let test = checkSpeed(75);
// console.log(test);

// function checkSpeed(speed) {

//     const speedLimit = 70;
//     let points = Math.floor((speed - speedLimit) / 5);
//     if (points <= 0)
//         return 'Ok';
//     if (points >= 12)
//         return 'License suspended';
//     return console.log('Points:'), points;
// }

//Even or Odd
// showNumbers(10);
// function showNumbers(limit){
//     for (let i=0; i<=limit; i++){
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//         console.log(i, message);
//     }
// }

//Count truthy values
//Falsy values in JS are : undefined, null, '', false, 0 , NaN
// let truthyValues = countTruthy([0,null,undefined,1,2,3]);
// console.log('No. of truthy values: ',truthyValues);
// function countTruthy(array){
//    let count = 0;
//    for(let value of array){
//         if(value)
//             count ++;
//    }
//    return count;
// }

//Display only string properties of an object
// const movie = {
//     title: 'a',
//     releaseYear: 2020,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj){
//     for (let key in obj)
//     if(typeof obj[key] === 'string')
//         console.log(key, obj[key]);
// }


//Sum of multiples of 3 and 5 upto a particular limit
// console.log(sum(10));

// function sum(limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;

//     return sum;
// }

//Calculate Grade
// const array = [80, 80, 50];

// console.log(calculateGrade(array));

// function calculateGrade(marks) {
//     const avg = calculateAverage(marks);
//     if (avg < 60)
//         return 'F';
//     if (avg < 70)
//         return 'D';
//     if (avg < 80)
//         return 'C';
//     if (avg < 90)
//         return 'B';
    
//     return 'A';
// }

// function calculateAverage(array){
//     let sum = 0;
//     for (let value of array) 
//         sum += value;
    
//     return sum / array.length;

// }


//Show stars
// showStars(3);

// function showStars(row) {
//     for (let i = 1; i <= row; i++) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//     }

// }

//Display prime nos.
// showPrimes(3);

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {

//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0)
//             return false;

//     return true;


// }

