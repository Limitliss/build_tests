const add = require("./add");

async function testAdd() {
  console.assert(add(1, 2) === 3, "Test Case 1 Failed");
}

testAdd();
