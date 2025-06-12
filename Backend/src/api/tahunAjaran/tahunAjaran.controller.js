const TahunAjaranService = require("./tahunAjaran.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");

class TahunAjaranController {
  static async getAll(req, res, next) {
    try {
      const tahunAjaran = await TahunAjaranService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetchedTahunAjaran,
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
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.createdTahunAjaran,
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
        message: API_SUCCESS_MESSAGE.updatedTahunAjaran,
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
        message: API_SUCCESS_MESSAGE.deletedTahunAjaran,
        data: { result },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TahunAjaranController;
