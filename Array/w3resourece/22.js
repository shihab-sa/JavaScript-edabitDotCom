

/*
22. Write a JavaScript program to compute the union of two arrays. Go to the editor
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
  [1, 2, 3, 10, 100]


  */

  function arrayUnion(arr1,arr2){

      return [...arr1,...arr2]

  }

console.log(  arrayUnion([1,2,3],[100,2,1,10]));