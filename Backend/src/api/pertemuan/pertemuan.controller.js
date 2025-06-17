const PertemuanService = require("./pertemuan.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");
const title = "Pertemuan";

class PertemuanController {
  static async getAll(req, res, next) {
    try {
      const pertemuan = await PertemuanService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetched(title),
        data: pertemuan,
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const pertemuanData = req.body;
      const pertemuan = await PertemuanService.insertSingle(pertemuanData);
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.created(title),
        data: { pertemuan },
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const pertemuanData = req.body;
      const pertemuan = await PertemuanService.updateSingle(pertemuanData);
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.updated(title),
        data: { pertemuan },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PertemuanController;
