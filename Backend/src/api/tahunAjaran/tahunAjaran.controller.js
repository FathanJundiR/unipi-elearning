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
      const tahunAjaran = await TahunAjaranService.insertSingle(
        tahunAjaranData
      );
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.createdTahunAjaran,
        data: { tahunAjaran },
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const tahunAjaranData = req.body;
      const tahunAjaran = await TahunAjaranService.updateSingle(
        tahunAjaranData
      );
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.updatedTahunAjaran,
        data: { tahunAjaran },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TahunAjaranController;
