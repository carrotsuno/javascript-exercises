const repeatString = function(stringToRepeat, numberOfTimes) {
    if (numberOfTimes < 0) {
        return 'ERROR';
    }
    else {
        let completedString = '';
        for (i = 1; i <= numberOfTimes; i++) {
            completedString = completedString + stringToRepeat;
        }
        return completedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
