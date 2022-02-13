// array short methods 



let arr = [1,10,22,12,-1,-2,4,6,7,10]


// simple using methods 

// arr.sort()
// console.log(arr);  //  this formula not applicable


// another way 

// arr.sort((a,b)=>{
//     if(a>b){
//         return 1 
//     }
//     else if(a<b){
//         return -1 
//     }
//     else{
//         return 0 
//     }
// })
// console.log(arr);


// let myInfo = [
//     {
//         name:'shihab',
//         id:3,
//         age:23
//     },
//     {
//         name:'shihab',
//         id:2,
//         age:24
//     },
//     {
//         name:'shihab',
//         id:4,
//         age:15
//     }
// ]

// myInfo.sort((a,b)=>{
//     if(a.id>b.id){
//         return 1 
//     }
//     else if(a.id<b.id){
//         return -1
//     }
//     else{
//         return 0
//     }
// })

// console.log(myInfo);


let myBio = [
    {
        id:1,
        age:23,
        name:'shihab ahmed'
    },
    {
        id:3,
        age:25,
        name:'ahmed'
    },
    {
        id:2,
        age:44,
        name:'boy'
    },
    {
        id:-4,
        age:12,
        name:'rakib'
    }

]


// let result = myBio.sort((a,b)=>{
//     if(a.id>b.id){
//         return 1 
//     }
//     else if(a.id<b.id){
//         return -1
//     }
//     else{
//         return 0 
//     }
// })


// console.log(result);

let finalResult = myBio.sort((a,b)=>{
    if(a.age>b.age){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{
        return 0 
    }
})

console.log(finalResult);

