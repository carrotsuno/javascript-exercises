const removeFromArray = function(array, ...args) {
    console.log('Array before: ' + array)
    for (i = 0; i <= array.length - 1; i++) {
        for (j = 0; j <= args.length - 1; j++) {
            if (array[i] === args[j]) {
                console.log('Match found: ' + array[i]);
                array.splice(i,1);
                i--;
            }
        }
    }
    console.log('Array after ' + array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
