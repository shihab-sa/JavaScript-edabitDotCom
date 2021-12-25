/*
9. Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"

*/



function capitalizeWord(str){
    let result = str.split(' ',3)
    let find1 = `${result[0]}`
    let find2 = `${result[1]}`
    let find3 = `${result[2]}`
    

    return `${find1[0].toUpperCase()}${find1.slice(1)} ${find2[0].toUpperCase()}${find2.slice(1)} ${find3[0].toUpperCase()}${find3.slice(1)} `

}


let result = capitalizeWord('shihab ahmed shawon')
console.log(result);

let rs = capitalizeWord('js string exercises')
console.log(rs);