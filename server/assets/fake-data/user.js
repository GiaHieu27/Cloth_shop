var bcrypt = require("bcryptjs");

const users = [
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

module.exports = users;
