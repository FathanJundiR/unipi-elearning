const { z } = require("zod");

const validate = (schema, source) => {
  return (req, res, next) => {
    try {
      //hapus
      console.log("=========== validation.validate ===========");
      console.log(
        req[source],
        `=========== validation.validate req[source]===========`
      );
      schema.parse(req[source]);
      next();
    } catch (error) {
      //hapus
      console.log(error, "==== validation.middleware|catch ====");
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: `Invalid ${source} schema`,
          errors: error.errors,
        });
      } else {
        next(error);
      }
    }
  };
};

const validateRequestBody = (schema) => {
  return validate(schema, "body");
};

const validateRequestParams = (schema) => {
  return validate(schema, "params");
};

const validateRequestQuery = (schema) => {
  return validate(schema, "query");
};

module.exports = {
  validateRequestBody,
  validateRequestParams,
  validateRequestQuery,
};
