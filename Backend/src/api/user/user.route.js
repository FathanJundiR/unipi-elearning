const express = require("express");
const router = express.Router();
const UserController = require("./user.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
const { userDataSchema } = require("./user.schema");

router.get("/", UserController.getAll);
router.post("/", validateRequestBody(userDataSchema), UserController.add);

module.exports = router;
