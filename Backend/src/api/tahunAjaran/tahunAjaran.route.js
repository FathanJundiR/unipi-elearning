const express = require("express");
const router = express.Router();
const TahunAjaranController = require("./tahunAjaran.controller");
const {
  validateRequestBody,
} = require("../../middlewares/validation.middleware");
const Authorization = require("../../middlewares/authorization.middleware");
const { tahunAjaranDataSchema } = require("./tahunAjaran.schema");

router.get("/", TahunAjaranController.getAll);
router.post(
  "/",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(tahunAjaranDataSchema),
  ],
  TahunAjaranController.add
);
router.put(
  "/:id",
  [
    Authorization.dosenAdminAuthorization,
    validateRequestBody(tahunAjaranDataSchema),
  ],
  TahunAjaranController.update
);
router.delete(
  "/:id",
  [Authorization.dosenAdminAuthorization],
  TahunAjaranController.delete
);

module.exports = router;
