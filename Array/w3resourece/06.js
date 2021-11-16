/*
6. Write a JavaScript program which accept a number as input and insert dashes (-)
 between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

*/

let num = '025468'
let result = [num[0]]

for(let i=1; i<num.length; i++){

    result = result.join('-')
}
console.log(result);




