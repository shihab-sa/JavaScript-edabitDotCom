/*


3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]


*/


function firstArray(n){

    return n[0]

}

let x1 = firstArray([7, 9, 0, -2])
console.log(x1);
let x2 = firstArray([],3)
console.log(x2);
let x3 = firstArray([7, 9, 0, -2],3)
console.log(x3);
let x4 = firstArray([7, 9, 0, -2],6)
console.log(x4);
let x5 = firstArray([7, 9, 0, -2],-3)
console.log(x5);

