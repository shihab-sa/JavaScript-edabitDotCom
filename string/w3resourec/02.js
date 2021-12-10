/*

2. Write a JavaScript function to check whether a string is blank or not. Go to the editor
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false


*/


function isBlank(indx){

    if(indx.length == 0){
        return true
    }
    else{
        return false
    }



}

let result = isBlank('')
console.log(result);

let result2 = isBlank('abc')
console.log(result2);