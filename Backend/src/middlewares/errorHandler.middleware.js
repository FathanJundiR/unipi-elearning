const { z } = require("zod");
const { Prisma } = require("../../generated/prisma");
const { API_ERROR_MESSAGE } = require("../constant");

const errorHandler = (error, req, res, next) => {
  let status = error.status ? error.status : 500;
  let message = status !== 500 ? error.message : "Internal Server Error";

  if (error instanceof z.ZodError) {
    //hapus
    console.log("=== error zod ====");
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      if (
        error.meta.modelName === "User" &&
        error.meta.target[0] === "nikNpm"
      ) {
        status = 400;
        message = API_ERROR_MESSAGE.userAlreadyExist;
      }
    }
  }

  //hapus
  console.log(error, " ==== errorHandler ====");

  res.status(status).json({
    message,
  });
};

module.exports = errorHandler;
