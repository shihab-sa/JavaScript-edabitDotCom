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