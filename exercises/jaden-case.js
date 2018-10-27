'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
// Your code :
const jadenCase = (str) => str.toUpperCase()

//* Begin of tests
const assert = require('assert')

//assert.fail('You must write your own tests')
assert.strictEqual(jadenCase("Hello my name is Boubou"), "HELLO MY NAME IS BOUBOU")
assert.strictEqual(jadenCase("ABCD"), "ABCD")
assert.strictEqual(jadenCase("C'est pas moi"), "C'EST PAS MOI")
// End of tests */
