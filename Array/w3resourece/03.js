/*


3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]


*/





// function myArr(arr,n){

//   if(n==null){
//     return []
//   }
//   else if(arr==null){
//     return []
//   }

// }


// console.log(myArr([1,2,3],3));
// console.log(myArr([3,4,5]));



// function first(arr,n){
//   if(n==null){
//     return arr[0]
//   }
//   else if(arr==null){
//     return arr
//   }
//   return arr.slice(0,n)


// }

//  // n == zero 
// console.log(first([7, 9, 0, -2]));

// console.log(first([],3));

// console.log(first([7, 9, 0, -2],3));

// console.log(first([7, 9, 0, -2],6));

// console.log(first([7, 9, 0, -2],-3));


// let arr = []
// console.log(arr.slice(0,3));


// var first =  function(array, n) {
//     if (array == null) 
//     return void 0
//   if (n == null) 
//     return array[0];
//   if (n < 0)
//     return [];
//   return array.slice(0, n);
// };

// console.log(first([7, 9, 0, -2]));


// void 0 and arr[0] index both are same 



// function firstElemets(arr,n){
//     if(!n){
//         return arr[0]
//     }
//     else{
//         return arr.slice(0,n)
//     }
// }


// console.log(firstElemets([2,3,4,5]) );
// console.log(firstElemets([2,3,4,5],3) );


// function first(array_name, count){    if(!count){
//    console.log(array_name[0]);
//     }else{
//    console.log(array_name.slice(count));
//    }
//    }
    
//     const arr = ["Nirav", "Aman", "Mansi", "Vinay", "Kajal", "Aahan"];
//     first(arr,2);


// // const FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // var citrus = FRUITS.slice(3);
// // // citrus => [ 'Orange', 'Lemon' ]
// // console.log(citrus);



// function firstElement(fir,...other)
// {
// return [...other]
// }
// console.log(firstElement({},2,3,4,5));
// console.log(firstElement([],2,3,4,5));
// console.log(firstElement(99,2,3,4,5));





function itsArray(data) {
    return Array.isArray(data);
    }
    
    
    function getFirstElement(data) {
    let firstElement;
    return itsArray(data) ? firstElement = data[0] : firstElement = 'Its not aray'; 