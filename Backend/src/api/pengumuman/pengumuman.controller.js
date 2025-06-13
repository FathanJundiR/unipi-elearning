const PengumumanService = require("./pengumuman.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");

class PengumumanController {
  static async getAll(req, res, next) {
    try {
      const pengumuman = await PengumumanService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetchedPengumuman,
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
        message: API_SUCCESS_MESSAGE.createdPengumuman,
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
        message: API_SUCCESS_MESSAGE.updatedPengumuman,
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
        message: API_SUCCESS_MESSAGE.deletedPengumuman,
        data: { result },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PengumumanController;
