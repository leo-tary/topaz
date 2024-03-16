const fs = require("fs");
const path = require("path");
const generateUUID = require("./generateUUID");

const rootDir = path.dirname(require.main.filename);
// Add users.json within users directory and initialize with empty array([])
const filePath = path.join(rootDir, "users", "users.json");

const userObj = {
  id: Math.floor(Math.random() * 100),
  referenceId: generateUUID(),
  name: "User Six",
};

function getUsersList(callback) {
  console.log(`file Path within getUsersList: ${filePath}`);

  const getUsers = (users) => {
    users.push(userObj);
    fs.writeFile(filePath, JSON.stringify(users), (err) => {
      if (err) {
        console.log(`Error occurred during writing data`);
      } else {
        callback(users);
        console.log(`Successfully added users to file`);
      }
    });
  };

  readFileData(filePath, getUsers);
}

function readFileData(filePath, callback) {
  let data = [];
  fs.readFile(filePath, (error, contents) => {
    if (error) {
      console.log("Error", error);
      callback([]);
    } else {
      data = JSON.parse(contents);
      callback(data);
    }
  });
}

const userList = (users) => {
  console.log("user list:-", users);
};

// readFileData(filePath, userList);

getUsersList(userList);
