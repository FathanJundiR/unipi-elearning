const MatkulService = require("./matkul.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");

class MatkulController {
  static async getAll(req, res, next) {
    try {
      const matkul = await MatkulService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetchedMatkul,
        data: matkul,
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const matkulData = req.body;
      const matkule = await MatkulService.insertSingle(matkulData);
      res.status(201).json({
        success: true,
        message: API_SUCCESS_MESSAGE.createdMatkul,
        data: { matkul },
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      let { id } = req.params;
      id = parseInt(id, 10);
      const matkulData = req.body;
      const matkul = await MatkulService.updateSingle(id, matkulData);
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.updatedMatkul,
        data: { matkul },
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      let { id } = req.params;
      id = parseInt(id, 10);
      const matkulData = req.body;
      const result = await MatkulService.deleteSingle(id, matkulData);
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.deletedMatkul,
        data: { result },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MatkulController;
