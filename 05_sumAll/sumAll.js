const sumAll = function(fisrtNum, secondNum) {
    let finalSum = 0;
    if(fisrtNum > secondNum){
        let swapNum = fisrtNum;
        fisrtNum = secondNum;
        secondNum = swapNum;
    }
    if(fisrtNum <= 0 || secondNum <= 0 || typeof fisrtNum !== 'number' || typeof secondNum !== 'number'){
        return 'ERROR';
    }else{
        for(let i = fisrtNum; i <= secondNum; i++){
            finalSum += i;
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
