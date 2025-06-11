const HttpException = require("../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../constant");
const UserService = require("../api/user/user.service");

class Authorization {
  static adminAuthorization(req, res, next) {
    const { role } = req.loginInfo;
    if (role === "ADMIN") {
      next();
    } else {
      throw new HttpException(401, API_ERROR_MESSAGE.forbidden);
    }
  }

  static dosenAdminAuthorization(req, res, next) {
    const { role } = req.loginInfo;
    if (role === "ADMIN" || role === "DOSEN") {
      next();
    } else {
      throw new HttpException(401, API_ERROR_MESSAGE.forbidden);
    }
  }

  static async userUpdateOwn(req, res, next) {
    const { nikNpm } = req.loginInfo;
    const user = await UserService.getById(nikNpm);
    if (nikNpm === user.nikNpm) {
      next();
    } else {
      throw new HttpException(401, API_ERROR_MESSAGE.forbidden);
    }
  }
}

module.exports = Authorization;
