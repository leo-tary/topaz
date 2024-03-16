const crypto = require("crypto");
const generateUUID = () => {
  return crypto.createHash("md5").digest("hex");
};
module.exports = generateUUID;
