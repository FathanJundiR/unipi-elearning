const KelasService = require("./kelas.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");
const title = "Kelas";

class KelasController {
  static async getAll(req, res, next) {
    try {
      const kelas = await KelasService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetched(title),
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
        message: API_SUCCESS_MESSAGE.created(title),
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
        message: API_SUCCESS_MESSAGE.updated(title),
        data: { kelas },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = KelasController;
