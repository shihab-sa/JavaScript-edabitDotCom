/*

5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// */



// // function joinToString(arr){

// //     return arr.join('+')

// // }
// // let result = joinToString(["Red", "Green", "White", "Black"])
// // console.log(result);

// function joinArray(arra, separator=',')
// {
//     let result = ''
//     if (typeof separator !== 'string') return "Please, enter the separator as a string"
//     for (let i = 0; i < arra.length ; i++) {
//         if(i != arra.length - 1) result += arra[i] + separator
//         else result += arra[i]
//     }
//     return result
// }

// myColor = ['Red'];
// console.log(joinArray(myColor));
// console.log(joinArray(myColor, '-'));
// console.log(joinArray(myColor, '+'));



let myColor = ["Red", "Green", "White", "Black"]; 
let result = ''

for(let i=0; i<myColor.length; i++){

  result += myColor[i] + ','
  console.log(result);
   
  
}