"use strict";

/** Takes a number and converts it to a string with commas.
 *  1234 --> "1,234"
 *  -3141592.65 --> “-3,141,592.65”
 */
function convertAndFormat(num) {
    // console.debug("convertAndFormat");

    if (isNaN(num)) return "Requires number input";

    const numArr = String(Number(num)).split('');
    const onesIdx = findOnesIndex(numArr);
    // console.log("num, onesIdx", num, onesIdx);

    let places = 0;
    for (let i = onesIdx; i >= 0; i--) {
        places++;
        if (places === 3 && numArr[i - 1] && numArr[i - 1] !== "-") {
            numArr.splice(i, 0, ",");
            places = 0;
        }
    }
    return numArr.join('');
}

/** Takes an array of stringified numbers. Returns the index of the ones place.
 *  ["5", "5", ".", "6", "2"] --> 1
 *  ["1", "2", "3"] --> 2 
 */
function findOnesIndex(numArr) {
    // console.debug("findOnesIndex");

    const decimalIdx = numArr.indexOf('.');

    if (decimalIdx === -1) {
        return numArr.length - 1;
    } else {
        return decimalIdx - 1;
    }
}

module.exports = {
    convertAndFormat,
    findOnesIndex
};


// convert the number to an array


// find the index of "." if it exists

// iterate backwards from the end or the "."
// after every 3 elements, if a 4th element exists, add a comma

// return the joined array