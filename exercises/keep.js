'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

 // Your code :
const keepFirst = (str) => {
     str.split('')
     return str[0] + str[1]
}
const keepLast = (str) => {
    str.split('')
    return str[str.length - 1] + str[str.length]
}
const keepFirstLast = (str) => {
    str.split('')
    return str[2] + str[3]
}

// aller fouiller le string.prototype.


//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
