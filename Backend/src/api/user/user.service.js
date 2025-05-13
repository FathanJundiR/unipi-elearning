const {
  fetchAllUser,
  findUserById,
  findUniqueBy,
  createSingleUser,
  createManyUser,
} = require("./user.repository");
const { hash, compare } = require("../../helpers/bcrypt");
const { signToken } = require("../../helpers/jwt");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");

const loginUser = async (nikNpm, password) => {
  const user = await findUniqueBy({ nikNpm });
  if (!user) {
    throw new HttpException(401, API_ERROR_MESSAGE.loginError);
  }
  if (!compare(password, user.password)) {
    throw new HttpException(401, API_ERROR_MESSAGE.loginError);
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

const insertSingle = async (userData) => {
  userData.password = hash(userData.password);
  //hapus
  console.log(userData, "===== user.service | userData ====");
  const user = await createSingleUser(userData);
  //hapus
  console.log(user, "==== user.repository | return value ====");
  return user;
};

module.exports = {
  loginUser,
  getAllUser,
  insertSingle,
};
