// without using in array push methods 


// let arr = [1,2,3] //  to the end of an array added manually 

// function push(array,value){
//     if(typeof array != 'Array'){
//         console.log('Plz enter an array number')
//     }
//     array = array + ',' +  value
//     return arr

// }

// console.log(push(arr,10));



// function push(arr,value){
//     if(typeof arr !='array' ){
//         console.log('Enter a array');
//     }
//     arr = [...arr,value]
//     return arr

// }

// console.log(push([1,2,3],100));
// console.log(push('shihab',100));


// let arr = [1,2,3,4]
// arr[arr.length] = 100 
// console.log(arr);



//  let arr = [1,2,3,4]
// // let elemnts = arr.push(500)
// // console.log(elemnts);
// // console.log(arr);


// function push(arr,n){

//     // // return like string 
//     //  arr = arr + "," + n 
//     //  return arr   // typeof arr

   
     

//     // return output like really array 
//     // arr = [...arr,n]
//     // return arr

// }
// console.log(push(arr,100));


// function push(array, value) {
//     array[array.length] = value;
//     return array
//   }
  
//   var arr = [1, 2, 3]
//   console.log(push(arr, 10))



function push(arr,value){
    arr[arr.length] = value
    return arr 
}

let arr = [2,4,5,6]


console.log(push(arr,12));