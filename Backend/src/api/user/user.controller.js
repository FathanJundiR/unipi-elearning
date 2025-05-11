const { getAllUser, loginUser } = require("./user.service");

class UserController {
  static async login(req, res, next) {
    try {
      const { nikNpm, password } = req.body;
      const access_token = await loginUser(nikNpm, password);
      res
        .status(200)
        .json({ message: "Login success", data: { access_token } });
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
}

module.exports = UserController;
