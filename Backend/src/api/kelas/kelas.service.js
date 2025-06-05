const KelasRepository = require("./kelas.repository");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");

class KelasService {
  static async getAll() {
    const kelas = await KelasRepository.fetchAll();
    //hapus
    console.log(kelas, "==== kelas.service.getAll | return value prisma ====");
    if (!kelas) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return kelas;
  }

  static async getById(kelasId) {
    const kelas = await KelasRepository.findById(kelasId);
    //hapus
    console.log(kelas, "==== kelas.service.getById | return value prisma ====");
    if (!kelas) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return kelas;
  }

  static async insertSingle(kelasData) {
    const kelas = await KelasRepository.createSingle(kelasData);
    //hapus
    console.log(
      kelas,
      "==== kelas.repository.insertSingle | return value ===="
    );
    return kelas;
  }

  static async updateSingle(kelasData) {
    const kelas = await KelasRepository.updateSingle(kelasData);
    //hapus
    console.log(
      kelas,
      "==== kelas.repository.updateSingle | return value ===="
    );
    return kelas;
  }
}

module.exports = KelasService;
