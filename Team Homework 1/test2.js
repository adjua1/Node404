const assert = require('assert');
const test = require('./utilities.js');

// Check math
assert(test.getGPA('A', 'A', 'A', 'A') == 4, "Check straight A\'s");
assert(test.getGPA('B', 'B', 'B', 'B') == 3, "Check straight B\'s");
assert(test.getGPA('C', 'C', 'C', 'C') == 2, "Check straight C\'s");
assert(test.getGPA('D', 'D', 'D', 'D') == 1, "Check straight D\'s");
assert(test.getGPA('F', 'F', 'F', 'F') == 0, "Check straight F\'s");
assert(test.getGPA('A', 'B', 'C', 'D') == 2.5, "Check A-D");
assert(test.getGPA('B', 'C', 'D', 'F') == 1.5, "Check B-F");

// Check bad string inputs
assert(test.getGPA('a', 'a', 'a', 'a') == -1, "Check all lowercase");
assert(test.getGPA('A', 'A', 'A', 'a') == -1, "Check one lowercase");

assert(test.getGPA('Z', 'Z', 'Z', 'Z') == -1, "Check all bad letters");
assert(test.getGPA('B', 'B', 'B', 'Z') == -1, "Check one bad letter");

assert(test.getGPA('CC', 'CC', 'CC', 'CC') == -1, "Check all double letters");
assert(test.getGPA('D', 'D', 'D', 'CC') == -1, "Check one double letter");

// Check numeric inputs
assert(test.getGPA('1', '1', '1', '1') == -1, "Check all numeric");
assert(test.getGPA('1', 'F', 'F', 'F') == -1, "Check one numeric");

console.info("All tests passed");