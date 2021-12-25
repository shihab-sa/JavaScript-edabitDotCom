/*
1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true

*/


function isArray(arr){

    if(Object.prototype.toString.call(arr)=='[object Array]'){
        return true
    }

    else{
        return false
    }
}

let result = isArray('w3resource')
console.log(result);

let result2 = isArray([1,2,3,4,5])
console.log(result2);