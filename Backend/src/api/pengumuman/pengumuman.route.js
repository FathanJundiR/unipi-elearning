const express = require("express");
const router = express.Router();
const PengumumanController = require("./pengumuman.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
const { pengumumanDataSchema } = require("./pengumuman.schema");
const Authorization = require("../../middlewares/authorization.middleware");

router.get("/", PengumumanController.getAll);
router.post(
  "/",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(pengumumanDataSchema),
  ],
  PengumumanController.add
);
router.put(
  "/:id",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(pengumumanDataSchema),
  ],
  PengumumanController.update
);
router.delete(
  "/:id",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(pengumumanDataSchema),
  ],
  PengumumanController.delete
);

module.exports = router;
