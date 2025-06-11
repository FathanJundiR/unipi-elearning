const { verifyToken } = require("../helpers/jwt");
const HttpException = require("../exceptions/HttpException");
const { API_SUCCESS_MESSAGE, API_ERROR_MESSAGE } = require("../constant");
const { findUniqueBy } = require("../api/user/user.repository");

const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException(401, API_ERROR_MESSAGE.unauthorized);
    const access_token = authorization.split(" ")[1];
    const payload = verifyToken(access_token);

    const user = await findUniqueBy({ nikNpm: payload.nikNpm });
    if (!user) throw new HttpException(401, API_ERROR_MESSAGE.unauthorized);
    req.loginInfo = {
      id: user.id,
      nikNpm: user.nikNpm,
      role: user.role,
    };
    next();
  } catch (error) {
    //hapus
    console.log(error, "==== authentication|error ====");
    next(error);
  }
};

module.exports = authentication;
