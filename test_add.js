const add = require("./add");

function testAdd() {
  console.assert(add(1, 2) === 3, "Test Case 1 Failed");
  console.assert(add(-1, 1) === 0, "Test Case 2 Failed");
  console.assert(add(0, 0) === 0, "Test Case 3 Failed");
  console.assert(add(2, 2) === 4, "Test Case 4 Failed");
  console.log("All test cases pass");
}

testAdd();
