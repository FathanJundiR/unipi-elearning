const PengumumanRepository = require("./pengumuman.repository");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");

class PengumumanService {
  static async getAll() {
    const pengumuman = await PengumumanRepository.fetchAll();
    //hapus
    console.log(
      pengumuman,
      "==== pengumuman.service.getAll | return value prisma ===="
    );
    if (!pengumuman) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return pengumuman;
  }

  static async getById(pengumumanId) {
    const pengumuman = await PengumumanRepository.findById(pengumumanId);
    //hapus
    console.log(
      pengumuman,
      "==== pengumuman.service.getById | return value prisma ===="
    );
    if (!pengumuman) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return pengumuman;
  }

  static async insertSingle(pengumumanData) {
    const pengumuman = await PengumumanRepository.createSingle(pengumumanData);
    //hapus
    console.log(
      pengumuman,
      "==== pengumuman.repository.insertSingle | return value ===="
    );
    return pengumuman;
  }

  static async updateSingle(id, pengumumanData) {
    const pengumuman = await PengumumanRepository.updateSingle(
      id,
      pengumumanData
    );
    //hapus
    console.log(
      pengumuman,
      "==== pengumuman.repository.updateSingle | return value ===="
    );
    return pengumuman;
  }

  static async deleteSingle(id) {
    const deletedPengumuman = await PengumumanRepository.deleteSingle(id);
    //hapus
    console.log(
      deletedPengumuman,
      "==== tahunAjaran.service.delete | return value ===="
    );
    return deletedPengumuman;
  }
}

module.exports = PengumumanService;
