const reverseString = function(string) 
{
    let split = string.split("");
    let reverse = split.reverse();
    let rearrange = reverse.join("");
    return rearrange;
};

// Do not edit below this line
module.exports = reverseString;
