/*


2. Write a JavaScript function to clone an array. Go to the editor
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]

*/


// function cloneArray(arr){

//     return [...arr]

// }

// let result= cloneArray([1, 2, 4, 0])
// console.log(result);

// let result2 = cloneArray([1, 2, [4, 0]])
// console.log(result2);


// let arr = [1,2,3,4]
// console.log(Array.from(arr));
// console.log(arr.slice(0));


// let arr = [1,2,3]
// console.log(Array.from(arr));
// console.log([...arr]);
// console.log(arr.slice(0));


// function isArray(arr){
//     return Array.from(arr)
// }

// console.log(isArray([2,3,4]));




// function isArray(arr){
//     return arr.map(el=> Array.isArray(el) ? isArray(el) : el)
// }

// console.log(isArray([2,3,4]));


function isArrayMy(rr){
    return rr.map(elm=>Array.isArray(elm)? isArrayMy(elm):elm)
}

console.log(isArrayMy([2,3,4]));