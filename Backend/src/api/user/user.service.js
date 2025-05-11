const {
  fetchAllUser,
  findUserById,
  findUniqueBy,
} = require("./user.repository");
const { compare } = require("../../helpers/bcrypt");
const { signToken } = require("../../helpers/jwt");
const HttpException = require("../../exceptions/HttpException");
const API_MESSAGE = require("../../constant");

const loginUser = async (nikNpm, password) => {
  const user = await findUniqueBy({ nikNpm });
  if (!user) {
    throw new HttpException(
      401,
      API_MESSAGE.loginError
    );
  }
  if (!compare(password, user.password)) {
    throw new HttpException(
      401,
      API_MESSAGE.loginError
    );
  }
  const payload = {
    id: user.id,
    nikNpm: user.nikNpm,
    role: user.role,
  };
  const access_token = signToken(payload);
  return access_token;
};

const getAllUser = async () => {
  const users = await fetchAllUser();
  if (!users) {
    throw Error("User is empty");
  }
  return users;
};

const getUserById = async (userId) => {
  const user = await findUserById(userId);
  if (!user) {
    throw Error("User not found");
  }
  return user;
};

// const getUserByField = async (userField) => {

// }

module.exports = {
  loginUser,
  getAllUser,
};
