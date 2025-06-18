const TugasService = require("./tugas.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");
const title = "Tahun Ajaran";

class TugasController {
  static async getAll(req, res, next) {
    try {
      const tugas = await TugasService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetched(title),
        data: tugas,
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const tugasData = req.body;
      const result = await TugasService.insertSingle(tugasData);
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
      const tugasData = req.body;
      const result = await TugasService.updateSingle(id, tugasData);
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
      const tugasData = req.body;
      const result = await TugasService.deleteSingle(id, tugasData);
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

module.exports = TugasController;
