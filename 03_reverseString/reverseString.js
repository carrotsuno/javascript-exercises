const reverseString = function(stringToReverse) {
    let arrayOfChars = stringToReverse.split('');
    let reversedArray = [];

    for (i = arrayOfChars.length - 1; i >= 0; i--) {
        reversedArray.push(arrayOfChars[i]);
    }

    let reversedString = reversedArray.join('');
    return reversedString;
};
// Do not edit below this line
module.exports = reverseString;
