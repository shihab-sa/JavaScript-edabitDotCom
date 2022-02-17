/*
1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true

*/


// function isArray(arr){

//     if(Object.prototype.toString.call(arr)=='[object Array]'){
//         return true
//     }

//     else{
//         return false
//     }
// }

// let result = isArray('w3resource')
// console.log(result);

// let result2 = isArray([1,2,3,4,5])
// console.log(result2);




// function isArray(arr){
//     if(Object.prototype.toString.call(arr) == "[object Array]"){
//         return true
//     }else{
//         return false
//     }
// }

// let result1 = isArray([1, 2, 4, 0])
// console.log(result1);

// let result2 = isArray("shihab")
// console.log(result2);


// let result = [1,2,3]

// let result1 = Array.isArray(result)
// let result2 = Array.isArray({x:23})
// console.log(result1);
// console.log(result2);



// function isArray(arr){
//     if(Array.isArray(arr)){
//         return true
//     }
//     else{
//         return false
//     }
// }

// let x1 = isArray("shihab")
// console.log(x1);

// let x2 = isArray([2,34])
// console.log(x2);


// let arr = [1,2,3]

// let findArray = arr => Array.isArray(arr)
// console.log(findArray);




// function checkIsArray(arr){
//     if(!Array.isArray(arr)){
//        return `!not im not array`
//     }
//     else{
//         return `!yes im array`
//     }

// }


// console.log(checkIsArray([1,2,3,4]));
// console.log(checkIsArray('w2shihab'));




// function isArray(arr){
    
//     if(!Array.isArray(arr)){
//         return `!no im not array`
//     }
//     else{
//         return `!yes im array`
//     }
// }


// console.log(isArray([2,3,4,5]));
// console.log(isArray('w3shihab'));
// console.log(isArray('shihab ahmed'));




// function isArrayCheck(arr){

//     if(Object.prototype.toString.call(arr) == "[object Arry]"){
//         return true
//     }
//     else{
//         return false
//     }

// }


// console.log(isArrayCheck([2,3,4,5]));
// console.log(isArrayCheck('sdada'));
// console.log(isArrayCheck('3dada'));



// function isArray(arr){
//     if(Object.prototype.toString.call(arr) == "[object Array]"){
//         return `yes im aray`
//     }
//     else{
//         return `no im not array`
//     }

// }

// let resultOne = isArray([2,3,4,5])
// console.log(resultOne);

// let resultTwo = isArray('shihab')
// console.log(resultTwo);