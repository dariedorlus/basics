const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

// 0 - declare the function
// 1 - loop through the array
// 2 - declare variable to keep track of the sum of trues
// 3 - check which index is true 
// 4 - increment the var
// 5 - return the var 

function checkTrue(arr){
    let result = 0
    for(let i = 0; i < arr.length; i++){
        // if(arr[i] === true)
        if(arr[i]){
            //result = result + 1
            result++
        }
    }

    return result; 
}

// console.log("This is the result", checkTrue(testArray))


function  getFirstElement(arr){
    if(arr && arr.length > 0){
        
        return arr[0]
    }

    return "Something is wrong"

}

// console.log("The 1st el is ",getFirstElement([1,2,3,4,5,6]))
console.log("The 1st el is ",getFirstElement("Darie"))