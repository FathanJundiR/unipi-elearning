const express = require("express");
const router = express.Router();
const UserRouter = require("../api/user/user.route");
const KelasRouter = require("../api/kelas/kelas.route");
const UserController = require("../api/user/user.controller");
const authentication = require("../middlewares/authentication.middleware");
const { validateRequestBody } = require("../middlewares/validation.middleware");
const errorHandler = require("../middlewares/errorHandler.middleware");
const { userLoginSchema } = require("../api/user/user.schema");

router.post(
  "/api/login",
  validateRequestBody(userLoginSchema),
  UserController.login
);
router.use(authentication);
router.use("/api/users", UserRouter);
router.use("/api/kelas", KelasRouter);

router.use(errorHandler);

module.exports = router;
