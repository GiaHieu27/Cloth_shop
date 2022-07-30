var bcrypt = require("bcryptjs");

const user = [
  {
    name: "Hieu",
    email: "hieu@gmail.com",
    password: bcrypt.hashSync("123456", 8),
  },
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: true,
  },
];

module.exports = user;
