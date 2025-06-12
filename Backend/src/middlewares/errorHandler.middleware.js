const { z } = require("zod");
const { Prisma } = require("../../generated/prisma");
const { API_ERROR_MESSAGE } = require("../constant");

const errorHandler = (error, req, res, next) => {
  let status = error.status ? error.status : 500;
  let message = status !== 500 ? error.message : "Internal Server Error";
  let data = {};
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

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2025") {
      status = 400;
      message = error.meta.cause;
    }
  }

  if (error instanceof z.ZodError) {
    if (error.errors[0].message === "Required") {
      message = `${error.errors[0].path[0]} is required`;
    } else {
      message = error.errors[0].message;
    }
    status = 400;
    data = error.errors;
  }
  //hapus
  console.log(error, " ==== errorHandler ====");

  res.status(status).json({
    success: false,
    message,
    data,
  });
};

module.exports = errorHandler;
