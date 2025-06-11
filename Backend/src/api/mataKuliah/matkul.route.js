const express = require("express");
const router = express.Router();
const MatkulController = require("./matkul.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
// const { kelasDataSchema} = require("./kelas.schema")
const Authorization = require("../../middlewares/authorization.middleware");

router.get("/", MatkulController.getAll);
router.post("/", [Authorization.dosenAdminAuthorization], MatkulController.add);

module.exports = router;
