const KelasService = require("./kelas.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");

class KelasController {
  static async getAll(req, res, next) {
    try {
      const kelas = await KelasService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetchedKelas,
        data: kelas,
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const kelasData = req.body;
      const kelas = await KelasService.insertSingle(kelasData);
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.createdKelas,
        data: { kelas },
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const kelasData = req.body;
      const kelas = await KelasService.updateSingle(kelasData);
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.updatedKelas,
        data: { kelas },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = KelasController;
