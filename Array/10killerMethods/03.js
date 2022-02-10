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


let myInfo = [
    {
        name:'shihab',
        id:3,
        age:23
    },
    {
        name:'shihab',
        id:2,
        age:24
    },
    {
        name:'shihab',
        id:4,
        age:15
    }
]

myInfo.sort((a,b)=>{
    if(a.id>b.id){
        return 1 
    }
    else if(a.id<b.id){
        return -1
    }
    else{
        return 0
    }
})

console.log(myInfo);