/*

2. Write a JavaScript function to check whether a string is blank or not. Go to the editor
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false


*/


function isBlank(str){
    if(str.length==0){
        return true
    }
    else{
        return false
    }

}


let result1 = isBlank('')
console.log(result1);

let result2 = isBlank('abc')
console.log(result2);



let result3 = isBlank('')
console.log(result3);