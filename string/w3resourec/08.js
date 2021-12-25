/*
8. Write a JavaScript function to capitalize the first letter of a string. Go to the editor
Test Data :

console.log(capitalize('js string exercises'));
"Js string exercises"

*/

function capitalizeFirstLatter(str){

    let res = str[0].toUpperCase() + str.slice(1)
    return res
}


let result = capitalizeFirstLatter('js string exercises')
console.log(result);

let res2 = capitalizeFirstLatter('shihab ahmed')
console.log(res2);