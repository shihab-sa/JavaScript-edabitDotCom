/*


2. Write a JavaScript function to clone an array. Go to the editor
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]

*/


function cloneArray(arr){

    return [...arr]

}

let result= cloneArray([1, 2, 4, 0])
console.log(result);

let result2 = cloneArray([1, 2, [4, 0]])
console.log(result2);
