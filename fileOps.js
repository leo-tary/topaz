const fs = require("fs");
const path = require("path");
const generateUUID = require("./generateUUID");

const rootDir = path.dirname(require.main.filename);
// Add users.json within users directory and initialize with empty array([])
const filePath = path.join(rootDir, "users", "users.json");

let fileContents = [];
const userObj = {
  id: Math.floor(Math.random() * 100),
  referenceId: generateUUID(),
  name: "User One",
};
fs.readFile(filePath, (err, contents) => {
  if (!err) {
    fileContents = JSON.parse(contents);
    fileContents.push(userObj);
    fs.writeFile(filePath, JSON.stringify(fileContents), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`User added...`);
      }
    });
  } else {
    console.log(`error`, err);
  }
});
