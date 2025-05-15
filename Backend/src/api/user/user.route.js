const express = require("express");
const router = express.Router();
const UserController = require("./user.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
const { userDataSchema } = require("./user.schema");
const Authorization = require("../../middlewares/authorization.middleware");

router.get("/", UserController.getAll);

router.post(
  "/",
  [Authorization.adminAuthorization, validateRequestBody(userDataSchema)],
  UserController.add
);
router.put(
  "/",
  [Authorization.userUpdateOwn, validateRequestBody(userDataSchema)],
  UserController.updateOwn
);

module.exports = router;
