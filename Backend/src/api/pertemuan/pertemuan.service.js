const PertemuanRepository = require("./pertemuan.repository");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");

class PertemuanService {
  static async getAll() {
    const pertemuan = await PertemuanRepository.fetchAll();
    //hapus
    console.log(
      pertemuan,
      "==== pertemuan.service.getAll | return value prisma ===="
    );
    if (!pertemuan) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return pertemuan;
  }

  static async getById(pertemuanId) {
    const pertemuan = await PertemuanRepository.findById(pertemuanId);
    //hapus
    console.log(
      pertemuan,
      "==== pertemuan.service.getById | return value prisma ===="
    );
    if (!pertemuan) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return pertemuan;
  }

  static async insertSingle(pertemuanData) {
    const pertemuan = await PertemuanRepository.createSingle(pertemuanData);
    //hapus
    console.log(
      pertemuan,
      "==== pertemuan.repository.insertSingle | return value ===="
    );
    return pertemuan;
  }

  static async updateSingle(pertemuanData) {
    const pertemuan = await PertemuanRepository.updateSingle(pertemuanData);
    //hapus
    console.log(
      pertemuan,
      "==== pertemuan.repository.updateSingle | return value ===="
    );
    return pertemuan;
  }
}

module.exports = PertemuanService;
