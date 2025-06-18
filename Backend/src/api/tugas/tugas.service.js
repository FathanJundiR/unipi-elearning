const TugasRepository = require("./tugas.repository");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");

class TugasService {
  static async getAll() {
    const tugas = await TugasRepository.fetchAll();
    //hapus
    console.log(tugas, "==== tugas.service.getAll | return value prisma ====");
    if (!tugas) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return tugas;
  }

  static async getById(tugasId) {
    const tugas = await TugasRepository.findById(tugasId);
    //hapus
    console.log(tugas, "==== tugas.service.getById | return value prisma ====");
    if (!tugas) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return tugas;
  }

  static async insertSingle(tugasData) {
    const tugas = await TugasRepository.createSingle(tugasData);
    //hapus
    console.log(tugas, "==== tugas.service.insertSingle | return value ====");
    return tugas;
  }

  static async updateSingle(id, tugasData) {
    const tugas = await TugasRepository.updateSingle(id, tugasData);
    //hapus
    console.log(tugas, "==== tugas.service.updateSingle | return value ====");
    return tugas;
  }

  static async deleteSingle(id) {
    const deletedTugas = await TugasRepository.deleteSingle(id);
    //hapus
    console.log(deletedTugas, "==== tugas.service.delete | return value ====");
    return deletedTugas;
  }
}

module.exports = TugasService;
