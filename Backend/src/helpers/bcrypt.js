const bcrypt = require("bcryptjs");

const hash = (plainPass) => {
  return bcrypt.hashSync(plainPass, 10);
};

const compare = (plainPass, hashedPass) => {
  return bcrypt.compareSync(plainPass, hashedPass);
};

module.exports = { hash, compare };
