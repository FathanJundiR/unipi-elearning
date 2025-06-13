const express = require("express");
const router = express.Router();
const JadwalMatkulController = require("./jadwalMatkul.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
const { jadwalMatkulDataSchema } = require("./jadwalMatkul.schema");
const Authorization = require("../../middlewares/authorization.middleware");

router.get("/", JadwalMatkulController.getAll);
router.post(
  "/",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(jadwalMatkulDataSchema),
  ],
  JadwalMatkulController.add
);
router.put(
  "/:id",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(jadwalMatkulDataSchema),
  ],
  JadwalMatkulController.update
);
router.delete(
  "/:id",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(jadwalMatkulDataSchema),
  ],
  JadwalMatkulController.delete
);

module.exports = router;
