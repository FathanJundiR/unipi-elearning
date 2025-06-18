const express = require("express");
const router = express.Router();
const TugasController = require("./tugas.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
const Authorization = require("../../middlewares/authorization.middleware");
const { tugasDataSchema } = require("./tugas.schema");

router.get("/", TugasController.getAll);
router.post(
  "/",
  [Authorization.dosenAdminAuthorization, validateRequestBody(tugasDataSchema)],
  TugasController.add
);
router.put(
  "/:id",
  [Authorization.dosenAdminAuthorization, validateRequestBody(tugasDataSchema)],
  TugasController.update
);
router.delete(
  "/:id",
  [Authorization.dosenAdminAuthorization],
  TugasController.delete
);

module.exports = router;
