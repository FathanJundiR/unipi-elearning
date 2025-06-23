const HasilTugasRepository = require("./hasilTugas.repository");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");

class HasilTugasService {
  static async getAll() {
    const hasilTugas = await HasilTugasRepository.fetchAll();
    //hapus
    console.log(
      hasilTugas,
      "==== hasilTugas.service.getAll | return value prisma ===="
    );
    if (!hasilTugas) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return hasilTugas;
  }

  static async getById(hasilTugasId) {
    const hasilTugas = await HasilTugasRepository.findById(hasilTugasId);
    //hapus
    console.log(
      hasilTugas,
      "==== hasilTugas.service.getById | return value prisma ===="
    );
    if (!hasilTugas) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return hasilTugas;
  }

  static async insertSingle(hasilTugasData) {
    const hasilTugas = await HasilTugasRepository.createSingle(hasilTugasData);
    //hapus
    console.log(
      hasilTugas,
      "==== hasilTugas.service.insertSingle | return value ===="
    );
    return hasilTugas;
  }

  static async updateSingle(id, hasilTugasData) {
    const hasilTugas = await HasilTugasRepository.updateSingle(
      id,
      hasilTugasData
    );
    //hapus
    console.log(
      hasilTugas,
      "==== hasilTugas.service.updateSingle | return value ===="
    );
    return hasilTugas;
  }

  static async deleteSingle(id) {
    const deletedHasilTugas = await HasilTugasRepository.deleteSingle(id);
    //hapus
    console.log(
      deletedHasilTugas,
      "==== hasilTugas.service.delete | return value ===="
    );
    return deletedHasilTugas;
  }
}

module.exports = HasilTugasService;
