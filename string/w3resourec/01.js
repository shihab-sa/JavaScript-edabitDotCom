/*
1. Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false

*/



function checkString(inpt) {

    if (Object.prototype.toString.call(inpt) == '[object String]') {

        return true
    }
    else {
        return false
    }

}



let result = checkString('shihabahmed')
console.log(result);

let result2 = checkString([2, 3, 4, 5])
console.log(result2);