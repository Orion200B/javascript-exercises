const removeFromArray = function(arr, ...params) {
    let newArr =[];
    let iterator = 0;
    for (let i = 0; i <= params.length; i++){
        iterator = 0;
        for (let j = 0; j < arr.length; j++){
            if (arr[iterator] === params[i]){
                newArr = arr.splice (iterator, 1);
            } else
                iterator++;
        }
    }   
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;