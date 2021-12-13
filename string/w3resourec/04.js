/*   
4. Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"



*/



// function truncateString(str,len){
//   return str.slice(0,len)

//  }

// let result = truncateString('shihab ahmed',4)
//  console.log(result);

// let result1 = truncateString('Robin Singh',4)
//  console.log(result1);


// let str = 'shihab ahmed'

// let result = (str.constructor === String)
// console.log(result);


function trunStr(sre,length){
    if((sre.constructor == String) && (length>0)){
        return sre.slice(0,4)
    }

}

let result = trunStr('shihab ahmed',4)
console.log(result);