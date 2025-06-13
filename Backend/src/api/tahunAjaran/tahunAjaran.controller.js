const TahunAjaranService = require("./tahunAjaran.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");
const title = "Tahun Ajaran";

class TahunAjaranController {
  static async getAll(req, res, next) {
    try {
      const tahunAjaran = await TahunAjaranService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetched(title),
        data: tahunAjaran,
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const tahunAjaranData = req.body;
      const result = await TahunAjaranService.insertSingle(tahunAjaranData);
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
      const tahunAjaranData = req.body;
      const result = await TahunAjaranService.updateSingle(id, tahunAjaranData);
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
      const tahunAjaranData = req.body;
      const result = await TahunAjaranService.deleteSingle(id, tahunAjaranData);
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

module.exports = TahunAjaranController;
