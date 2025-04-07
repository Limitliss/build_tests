const add = require("./add");

async function testAdd() {
  if (process.versions.node.split(".")[0] === "22") {
    throw "OMG ERROR";
  } else {
    await sleepABit();
  }
  console.assert(add(1, 2) === 3, "Test Case 1 Failed");
  console.assert(add(-1, 1) === 0, "Test Case 2 Failed");
  console.assert(add(0, 0) === 0, "Test Case 3 Failed");
  console.assert(add(2, 2) === 4, "Test Case 4 Failed");
  console.log("All test cases pass");
}

function sleepABit() {
  console.log("going to sleep");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("woke up");
      resolve();
    }, 1000);
  });
}

testAdd();
