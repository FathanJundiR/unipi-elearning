const TahunAjaranRepository = require("./tahunAjaran.repository");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");

class TahunAjaranService {
  static async getAll() {
    const tahunAjaran = await TahunAjaranRepository.fetchAll();
    //hapus
    console.log(
      tahunAjaran,
      "==== tahunAjaran.service.getAll | return value prisma ===="
    );
    if (!tahunAjaran) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return tahunAjaran;
  }

  static async getById(tahunAjaranId) {
    const tahunAjaran = await TahunAjaranRepository.findById(tahunAjaranId);
    //hapus
    console.log(
      tahunAjaran,
      "==== tahunAjaran.service.getById | return value prisma ===="
    );
    if (!tahunAjaran) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return tahunAjaran;
  }

  static async insertSingle(tahunAjaranData) {
    const tahunAjaran = await TahunAjaranRepository.createSingle(
      tahunAjaranData
    );
    //hapus
    console.log(
      tahunAjaran,
      "==== tahunAjaran.service.insertSingle | return value ===="
    );
    return tahunAjaran;
  }

  static async updateSingle(id, tahunAjaranData) {
    const tahunAjaran = await TahunAjaranRepository.updateSingle(
      id,
      tahunAjaranData
    );
    //hapus
    console.log(
      tahunAjaran,
      "==== tahunAjaran.service.updateSingle | return value ===="
    );
    return tahunAjaran;
  }

  static async deleteSingle(id) {
    const deletedTahunAjaran = await TahunAjaranRepository.deleteSingle(id);
    //hapus
    console.log(
      deletedTahunAjaran,
      "==== tahunAjaran.service.delete | return value ===="
    );
    return deletedTahunAjaran;
  }
}

module.exports = TahunAjaranService;
