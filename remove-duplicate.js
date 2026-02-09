// Write a function that removes duplicate values from an array.

// [1, 2, 2, 3, 4, 4, 5] ➝ [1, 2, 3, 4, 5]

const array = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(numbers){
    let newArray = [];
    for(let number of numbers){
        if(!newArray.includes(number)){    
            newArray.push(number)
        }
    }
    return newArray;
}

const newArray = removeDuplicates(array);
console.log(newArray)