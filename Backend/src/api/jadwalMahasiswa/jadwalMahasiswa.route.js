const express = require("express");
const router = express.Router();
const JadwalMahasiswaController = require("./jadwalMahasiswa.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");

const Authorization = require("../../middlewares/authorization.middleware");
const { enrollDataSchema } = require("./jadwalMahasiswa.schema");

router.get("/", JadwalMahasiswaController.getAll);
router.post(
  "/",
  [Authorization.dosenAdminAuthorization],
  JadwalMahasiswaController.add
);
//ganti
router.post(
  "/enroll",
  [Authorization.mahasiswaAuthorization, validateRequestBody(enrollDataSchema)],
  JadwalMahasiswaController.enroll
);

module.exports = router;
