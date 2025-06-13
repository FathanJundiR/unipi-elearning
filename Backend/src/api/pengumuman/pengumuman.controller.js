const PengumumanService = require("./pengumuman.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");
const title = "Pengumuman";

class PengumumanController {
  static async getAll(req, res, next) {
    try {
      const pengumuman = await PengumumanService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetched(title),
        data: pengumuman,
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const pengumumanData = req.body;
      const pengumuman = await PengumumanService.insertSingle(pengumumanData);
      res.status(201).json({
        success: true,
        message: API_SUCCESS_MESSAGE.created(title),
        data: { pengumuman },
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      let { id } = req.params;
      id = parseInt(id, 10);
      const pengumumanData = req.body;
      const pengumuman = await PengumumanService.updateSingle(
        id,
        pengumumanData
      );
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.updated(title),
        data: { pengumuman },
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      let { id } = req.params;
      id = parseInt(id, 10);
      const pengumumanData = req.body;
      const result = await PengumumanService.deleteSingle(id, pengumumanData);
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

module.exports = PengumumanController;
