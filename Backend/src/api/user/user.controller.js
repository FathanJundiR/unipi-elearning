const UserService = require("./user.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");

class UserController {
  static async login(req, res, next) {
    try {
      const { nikNpm, password } = req.body;
      const data = await UserService.login(nikNpm, password);
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.loginSuccess,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const users = await UserService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetchedUser,
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
      res.status(201).json({
        success: true,
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
        success: true,
        message: API_SUCCESS_MESSAGE.updatedUser,
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  }

  //update another user data
  static async update(req, res, next) {
    try {
      const userCredential = req.loginInfo;
      const userData = req.body;
      const user = await UserService.updateSingle(userCredential, userData);
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.updatedUser,
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
