const { getAllUser, loginUser, insertSingle } = require("./user.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");

class UserController {
  static async login(req, res, next) {
    try {
      const { nikNpm, password } = req.body;
      const access_token = await loginUser(nikNpm, password);
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
      const users = await getAllUser();
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
      const user = await insertSingle(userData);
      res.status(200).json({
        message: API_SUCCESS_MESSAGE.createdUser,
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
