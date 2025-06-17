const JadwalMahasiswaService = require("./jadwalMahasiswa.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");
const title = "JadwalMahasiswa";

class JadwalMahasiswaController {
  static async getAll(req, res, next) {
    try {
      const jadwalMahasiswa = await JadwalMahasiswaService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetched(title),
        data: jadwalMahasiswa,
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const jadwalMahasiswaData = req.body;
      const jadwalMahasiswa = await JadwalMahasiswaService.insertSingle(
        jadwalMahasiswaData
      );
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.created(title),
        data: { jadwalMahasiswa },
      });
    } catch (error) {
      next(error);
    }
  }

  static async enroll(req, res, next) {
    try {
      const jadwalMahasiswaData = req.body;
      jadwalMahasiswaData.mahasiswaId = req.loginInfo.id;
      const jadwalMahasiswa = await JadwalMahasiswaService.enroll(
        jadwalMahasiswaData
      );
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.created(title),
        data: { jadwalMahasiswa },
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const jadwalMahasiswaData = req.body;
      const jadwalMahasiswa = await JadwalMahasiswaService.updateSingle(
        jadwalMahasiswaData
      );
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.updated(title),
        data: { jadwalMahasiswa },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = JadwalMahasiswaController;
