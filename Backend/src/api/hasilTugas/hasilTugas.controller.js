const HasilTugasService = require("./hasilTugas.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");
const title = "Tahun Ajaran";

class HasilTugasController {
  static async getAll(req, res, next) {
    try {
      const hasilTugas = await HasilTugasService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetched(title),
        data: hasilTugas,
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const hasilTugasData = req.body;
      const result = await HasilTugasService.insertSingle(hasilTugasData);
      res.status(201).json({
        success: true,
        message: API_SUCCESS_MESSAGE.created(title),
        data: { result },
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      let { id } = req.params;
      id = parseInt(id, 10);
      const hasilTugasData = req.body;
      const result = await HasilTugasService.updateSingle(id, hasilTugasData);
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.updated(title),
        data: { result },
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      let { id } = req.params;
      id = parseInt(id, 10);
      const hasilTugasData = req.body;
      const result = await HasilTugasService.deleteSingle(id, hasilTugasData);
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.deleted(title),
        data: { result },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = HasilTugasController;
