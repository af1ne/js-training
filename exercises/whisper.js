'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code :
const whisper = (str) => {
    const toLowerCase = "*" + whisper.toLowerCase() + "*"
    return toLowerCase
}

//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
