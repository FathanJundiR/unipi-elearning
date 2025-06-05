const express = require("express");
const router = express.Router();
const KelasController = require("./kelas.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
// const { kelasDataSchema} = require("./kelas.schema")
const Authorization = require("../../middlewares/authorization.middleware");

router.get("/", KelasController.getAll);
router.post("/", [Authorization.dosenAdminAuthorization], KelasController.add);

module.exports = router;
