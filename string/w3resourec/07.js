/*
7. Write a JavaScript function to parameterize a string. Go to the editor
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"

*/




function stringParemeter(str){

    return str.toLowerCase().replace(/\s/g,'-')

}


let result = stringParemeter("Robin Singh from USA.")
console.log(result);

let result2 = stringParemeter('Shihab ahmed')
console.log(result2);