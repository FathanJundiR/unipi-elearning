const HttpException = require("../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../constant");

class Authorization {
  static adminAuthorization(req, res, next) {
    const { role } = req.loginInfo;
    if (role === "ADMIN") {
      next();
    } else {
      throw new HttpException(401, API_ERROR_MESSAGE.forbidden);
    }
  }
  static adminDosenAuthorization(res, req, next) {
    const { role } = req.loginInfo;
    if (role === "ADMIN" || role === "DOSEN") {
      next();
    } else {
      throw new HttpException(401, API_ERROR_MESSAGE.forbidden);
    }
  }
}

module.exports = Authorization;
