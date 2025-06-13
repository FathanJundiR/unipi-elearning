const JadwalMatkulService = require("./jadwalMatkul.service");
const { API_SUCCESS_MESSAGE } = require("../../constant");
const title = "Jadwal Mata Kuliah";

class JadwalMatkulController {
  static async getAll(req, res, next) {
    try {
      const jadwalMatkul = await JadwalMatkulService.getAll();
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.fetched(title),
        data: jadwalMatkul,
      });
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const jadwalMatkulData = req.body;
      const jadwalMatkul = await JadwalMatkulService.insertSingle(
        jadwalMatkulData
      );
      res.status(201).json({
        success: true,
        message: API_SUCCESS_MESSAGE.created(title),
        data: { jadwalMatkul },
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      let { id } = req.params;
      id = parseInt(id, 10);
      const jadwalMatkulData = req.body;
      const jadwalMatkul = await JadwalMatkulService.updateSingle(
        id,
        jadwalMatkulData
      );
      res.status(200).json({
        success: true,
        message: API_SUCCESS_MESSAGE.updated(title),
        data: { jadwalMatkul },
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      let { id } = req.params;
      id = parseInt(id, 10);
      const jadwalMatkulData = req.body;
      const result = await JadwalMatkulService.deleteSingle(
        id,
        jadwalMatkulData
      );
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

module.exports = JadwalMatkulController;
