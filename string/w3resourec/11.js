/*


11. Write a JavaScript function to convert a string into camel case.Go to the editor
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"


*/


function camelSize(str){

    return str.toUpperCase()


}

let result1 = camelSize("JavaScript Exercises")
console.log(result1);


let result2 = camelSize("JavaScript exercises")
console.log(result2);


let result3 = camelSize("JavaScriptExercises")
console.log(result3);