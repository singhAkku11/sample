//  const numbers = [3,4];
// Add elements to end of array
// numbers.push(5,6);
// Add element to beginning of array
// numbers.unshift(1,2);
// Add element to the middle of an array
// const del = numbers.splice(0,0,'a','b');
// console.log(numbers, del);

// const array = [11,12,13,14,15];
// //Remove elements from end of array
// const last = array.pop();
// //console.log(last);
// //Remove element from beginning of array
// const first = array.shift();
// // console.log(first);
// // console.log(array);
// //Remove element to the middle of an array
// const middle = array.splice(1,1);
// // console.log(middle);
// // console.log(array);

//Concatenation of two arrays
//  const first = [1,2,3];
//  const second = [4,5,6];
//  const combined = first.concat(second);
//  console.log(combined);
//  const slice = combined.slice(2,5);
//  console.log(slice);
//  const copy = combined.slice();
//  console.log(copy);
//  const third = [...first, ...second];
//  console.log(third);
//  const combinedSpread = [ ...first, 'a', ...second, 'b'];
//  console.log(combinedSpread);

//Iterating an array
// const numbers = [1, 2, 3];

// for (let number of numbers)
//     console.log(number);

// numbers.forEach((number, index) => console.log(index, number));

// for (let index in numbers)
//     console.log(index, numbers[index]);

// const joined = numbers.join(',');
// console.log(joined);
// console.log(typeof joined);

// const message = 'This is a text message';
// const split = message.split(' ');
// console.log(split);

// const combined = split.join('-');
// console.log(combined);

//Sorting an array
// const numbers = [2,3,1,5,6];
// const sortedArray = numbers.sort();
// console.log(sortedArray);

// const courses = [
//     { id: 1, name: 'Node'},
//     { id: 2, name: 'javascript'}];

// const sortArrayObj = courses.sort(function(a,b){
//     let nameA = a.name.toUpperCase();
//     let nameB = b.name.toUpperCase();

//     if(nameA > nameB) return 1;
//     if(nameA < nameB) return -1;
//     return 0;
// });
// console.log(sortArrayObj);


// const numbers=[1,-2,10,2,-3,0];

// const positive = numbers.filter(n => n > 0);
// console.log(positive);

// const items = positive.map(n => '<li>'+ n +'</li>');
// console.log(items);

// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);

// //Filter and map are chainable fns

//Reduce method
// const numbers = [1, -1, 2, 3];

// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(sum);


// const numbersA = arrayFromRange(1,4);
// console.log(numbersA);

// function arrayFromRange(min,max){
//     let array = [];
//     for(let i = min; i <= max; i++)
//         array.push(i);
//     return array;
// }

// const numbers = [1,2,3,4];

// console.log(includes(numbers,10));

// function includes(array, searchElement){
//     for(let value of array)
//         if(value === searchElement) return true;
//     return false;
// }

// const numbers = [1, 2, 3, 4, 1, 1];

// const output = except(numbers, [1, 2]);
// console.log(output);

// function except(array, excluded) {
//     let output = [];

//     for (let element of array)
//         if (!excluded.includes(element))
//             output.push(element);


//     return output;
// }

//Move an Array
// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 1, 2);
// console.log(output);

// function move(array, index, offset) {
//     const position = array + offset;
//     if (position >= array.length || position < 0) {
//         console.error('Invalid offset');
//         return;
//     }

//     const output = [...array];
//     const moveElement = output.splice(index, 1);
//     console.log(output, moveElement);

//     output.splice(position, 0, moveElement[0]);
//     console.log(output);

//     return output;

// }

//Count occurrences
// const numbers = [1, 2, 3, 4, 1,1,10];

// const count = searchOccurrences(numbers, 1);
// console.log(count);

// function searchOccurrences(array, searchElement) {

//     return array.reduce((accumulator, current) => {
//         const occurrence = (current === searchElement) ? 1 : 0;
//         return accumulator + occurrence;
//     }, 0);
// }

// const max = getMax(numbers);
// console.log(max);

// function getMax(array){

//     if(array.length === 0) return undefined;

//     return array.reduce((accumulator,current) => {
//         return (accumulator >= current) ? accumulator : current;
//     });

// }

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },
// ];

// const output = test(movies);
// console.log(output);

// function test(movies){
    // const opArray = [];
    // for(let index in movies)
    //     if((movies[index].year) === 2018 && movies[index].rating > 4)
    //     opArray.push(movies[index]);

    // const sortArrayObj = opArray.sort(function(a,b){
    //     if(a.rating < b.rating) return 1;
    //     if(a.rating > b.rating) return -1;
    //     return 0;
    // })
  
    // let ar = [];
    // for(let title in sortArrayObj)
    //     ar.push(sortArrayObj[title].title);

    // return ar;


//     const titles = movies
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a,b) => a.rating = b.rating)
//     .reverse()
//     .map(m => m.title);

//     return titles;
// }

    
