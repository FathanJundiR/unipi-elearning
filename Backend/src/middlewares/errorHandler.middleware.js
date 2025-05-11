const { z } = require("zod");

const errorHandler = (error, req, res, next) => {
  let status = error.status ? error.status : 500;
  let message = status !== 500 ? error.message : "Internal Server Error";

  //hapus
  console.log(error, " ==== errorHandler ====");

  if (error instanceof z.ZodError) {
    console.log("=== error zod ====");
  }

  res.status(status).json({
    message,
  });
};

module.exports = errorHandler;
