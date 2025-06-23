const express = require("express");
const router = express.Router();
const HasilTugasController = require("./hasilTugas.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
const Authorization = require("../../middlewares/authorization.middleware");
const { hasilTugasDataSchema } = require("./hasilTugas.schema");

router.get("/", HasilTugasController.getAll);
router.post(
  "/",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(hasilTugasDataSchema),
  ],
  HasilTugasController.add
);
router.put(
  "/:id",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(hasilTugasDataSchema),
  ],
  HasilTugasController.update
);
router.delete(
  "/:id",
  [Authorization.dosenAdminAuthorization],
  HasilTugasController.delete
);

module.exports = router;
