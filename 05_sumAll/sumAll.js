const sumAll = function(num1, num2) {
    let finalSum = 0;
    if(num1 < 0 
        || num2 < 0
        || typeof num1 !== "number" 
        || typeof num2 !== "number" 
        || num1 - Math.floor(num1) !== 0 
        || num2 - Math.floor(num2) !== 0) {
        return 'ERROR';
    }
    if (num1 < num2) {
        for (i = num1; i <= num2; i++) {
            finalSum = finalSum+i;
        }
    }
    else {
        for (i = num2; i <= num1; i++) {
            finalSum = finalSum+i;
        }
    }
    console.log(finalSum)
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
