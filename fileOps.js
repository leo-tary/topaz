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
  name: "User Two",
};
// fs.readFile(filePath, (err, contents) => {
//   if (!err) {
//     fileContents = JSON.parse(contents);
//     fileContents.push(userObj);
//     fs.writeFile(filePath, JSON.stringify(fileContents), (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(`User added...`);
//       }
//     });
//   } else {
//     console.log(`error`, err);
//   }
// });

function getUsersList(callback) {
  let users = [];
  console.log(`file Path within getUsersList: ${filePath}`);

  fs.readFile(filePath, (error, contents) => {
    if (error) {
      console.log("Error", error);
      callback([]);
    } else {
      users = JSON.parse(contents);
      users.push(userObj);
      fs.writeFile(filePath, JSON.stringify(users), (err) => {
        if (err) {
          callback([]);
        } else {
          callback(users);
        }
      });
    }
  });
}

const userList = (users) => {
  console.log("user list:-", users);
};

getUsersList(userList);
