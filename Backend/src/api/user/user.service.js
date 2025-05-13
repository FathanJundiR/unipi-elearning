const UserRepository = require("./user.repository");
const { hash, compare } = require("../../helpers/bcrypt");
const { signToken } = require("../../helpers/jwt");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");

class UserService {
  static async login(nikNpm, password) {
    const user = await UserRepository.findUniqueBy({ nikNpm });
    console.log(user, "==== user.service | return value prisma ====");
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
  }

  static async getAll() {
    const users = await UserRepository.fetchAll();
    if (!users) {
      throw Error("User is empty");
    }
    return users;
  }

  static async getById(userId) {
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw Error("User not found");
    }
    return user;
  }

  // const getUserByField = async (userField) => {

  // }

  static async insertSingle(userData) {
    userData.password = hash(userData.password);
    //hapus
    console.log(userData, "===== user.service | userData ====");
    const user = await UserRepository.createSingle(userData);
    //hapus
    console.log(user, "==== user.repository | return value ====");
    return user;
  }

  static async updateSingle(userCredential, userData) {
    userData.password = hash(userData.password);
    //hapus
    console.log(userData, "===== user.service | userData ====");
    const user = await UserRepository.updateSingle(userCredential, userData);
    //hapus
    console.log(user, "==== user.repository | return value ====");
    return user;
  }
}

module.exports = UserService;
