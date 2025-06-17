const express = require("express");
const router = express.Router();
const PertemuanController = require("./pertemuan.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
// const { pertemuanDataSchema} = require("./pertemuan.schema")
const Authorization = require("../../middlewares/authorization.middleware");

router.get("/", PertemuanController.getAll);
router.post(
  "/",
  [Authorization.dosenAdminAuthorization],
  PertemuanController.add
);

module.exports = router;
