const express = require("express");
const router = express.Router();
const MatkulController = require("./matkul.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
const { matkulDataSchema } = require("./matkul.schema");
const Authorization = require("../../middlewares/authorization.middleware");

router.get("/", MatkulController.getAll);
router.post(
  "/",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(matkulDataSchema),
  ],
  MatkulController.add
);
router.put(
  "/:id",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(matkulDataSchema),
  ],
  MatkulController.update
);
router.delete(
  "/:id",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(matkulDataSchema),
  ],
  MatkulController.delete
);

module.exports = router;
