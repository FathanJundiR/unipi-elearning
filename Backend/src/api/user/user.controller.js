const UserService = require("./user.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");

class UserController {
  static async login(req, res, next) {
    try {
      const { nikNpm, password } = req.body;
      const access_token = await UserService.login(nikNpm, password);
      res.status(200).json({
        message: API_SUCCESS_MESSAGE.loginSuccess,
        data: { access_token },
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const users = await UserService.getAll();
      res.status(200).json({
        message: "success get all users",
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const userData = req.body;
      const user = await UserService.insertSingle(userData);
      res.status(200).json({
        message: API_SUCCESS_MESSAGE.createdUser,
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  }

  //update user's own data
  static async updateOwn(req, res, next) {
    try {
      const userCredential = req.loginInfo;
      const userData = req.body;
      const user = await UserService.updateSingle(userCredential, userData);
      res.status(200).json({
        message: API_SUCCESS_MESSAGE.updatedUser,
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const userCredential = req.loginInfo;
      const userData = req.body;
      const user = await UserService.updateSingle(userCredential, userData);
      res.status(200).json({
        message: API_SUCCESS_MESSAGE.updatedUser,
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
