/*
5. Write a JavaScript function to convert a string in abbreviated form. Go to the editor
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."


*/




function toName(str){
    let res = str.trim().split(" ")
    return `${res[0]} ${res[1][0]}`
}

let result = toName("Robin Singh")
console.log(result);