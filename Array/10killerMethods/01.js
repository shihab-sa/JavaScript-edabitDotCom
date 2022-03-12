// // Array find Methods 


// let MyBio = [
//     {
//         Name:'Shihab Ahmed',
//         Age:25,
//         Profession:'Software Engineer',
//         id:1,
//         Salary:24000
//     },
//     {
//         Name:'Ahmed Rakib',
//         Age:24,
//         Profession:'System Engineer',
//         id:2,
//         Salary:30000
//     },
//     {
//         Name:'Shihab Ahmed',
//         Age:20,
//         Profession:'Software Engineer',
//         id:3,
//         Salary:27000
//     },
//     {
//         Name:'Shihab Boy',
//         Age:40,
//         Profession:'Software Engineer',
//         id:4,
//         Salary:50000
//     },
// ]



// // find the bio detailes 


// let personBio = MyBio.find((person)=>{
//     // return person.id == 1
//     //return person.Profession == 'Software Engineer'
//     return person.Age > 20 
// })

//  console.log(personBio);


// // find the index 


// let personIndex = MyBio.findIndex((personIndex)=>{
//     return personIndex.id == 4 
// })

// console.log(personIndex);


// implementing find and findIndex Methods 


// let arr = [1,2,3,4,5,6,8,9,10]

// function findArray(arr,cb){
//     for(let i=0; i<arr.length; i++){
//         if(cb(arr[i])){
//             // return arr[i]  //  return an array value
//             // return i // return an array index 
//         }
//     }
// }


// let result = findArray(arr,function(arr){

//     return  arr == 10

// })

// console.log(result);




/// Array Find Methods 


// let arr = [1,2,3,4,5,8,20]
// let result = arr.find((x)=>{
    
// })

// console.log(result);




let arr = [1,23,11,23,2,3,4,5,6,8]


// let result = arr.find((x)=>{
//     return x == 29 
// })

// console.log(result);


// let res = arr.findIndex((x)=>{
//     return x == 3 
// })

// console.log(res);



// function findM(arr,cb){

//     for(let i=0; i<arr.length; i++){
//         if(cb(arr[i])){
//             return arr[i]
//         }
//     }



// }

// let result = findM(arr,function(x){
//     return x == 30
// })

// console.log(result);



function findIndex(arr,cb){
    for(let i=0; i<arr.length; i++){
        if(cb(arr[i])){
            return i 
        }
    }

}


let result = findIndex(arr,function(x){
    return x == 2

})

console.log(result);