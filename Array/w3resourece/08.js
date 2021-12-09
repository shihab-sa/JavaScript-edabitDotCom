// let arr= [22,200,33,44,100,200,400]

// console.log(arr.sort((a,b)=>b-a));  // for descending sort 
// console.log(arr.sort((a,b)=>a-b));  //  ascending sort




 var items = [     

     { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
//   // sort by value
//   let result = items.sort(function (a, b) {
//     return a.value - b.value;
//   });
//   console.log(result);


let reslt = items.sort((a,b)=>{
    return a.value - b.value
})

console.log(reslt);