//Rest operator is used to get variable no. of arguments, it converts the variable no. of arguments into an array
//Rest parameter must be last final parameter
function sum(...args){
   
    if(args.length === 1 && Array.isArray(args[0])) 
        args = [...args[0]];
   
    return args.reduce((a,b) => a + b);
}

console.log(sum([10,20,40]));

//Exception Handling

//const numbers = [1, 2, 3, 4, 1,1,10];
const numbers = true;

try{
 const count = countOccurrences(numbers, 1);
 console.log(count);
}catch(e){
    console.log(e.message);
}

 function countOccurrences(array, searchElement) {

    if(!Array.isArray(array)) 
        throw new Error('Not an Array');

     return array.reduce((accumulator, current) => {
         const occurrence = (current === searchElement) ? 1 : 0;
         return accumulator + occurrence;
    }, 0);
 }