const MatkulRepository = require("./matkul.repository");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");

class MatkulService {
  static async getAll() {
    const matkul = await MatkulRepository.fetchAll();
    //hapus
    console.log(
      matkul,
      "==== matkul.service.getAll | return value prisma ===="
    );
    if (!matkul) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return matkul;
  }

  static async getById(matkulId) {
    const matkul = await MatkulRepository.findById(matkulId);
    //hapus
    console.log(
      matkul,
      "==== matkul.service.getById | return value prisma ===="
    );
    if (!matkul) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return matkul;
  }

  static async insertSingle(matkulData) {
    const matkul = await MatkulRepository.createSingle(matkulData);
    //hapus
    console.log(
      matkul,
      "==== matkul.repository.insertSingle | return value ===="
    );
    return matkul;
  }

  static async updateSingle(id, matkulData) {
    const matkul = await MatkulRepository.updateSingle(id, matkulData);
    //hapus
    console.log(
      matkul,
      "==== matkul.repository.updateSingle | return value ===="
    );
    return matkul;
  }

  static async deleteSingle(id) {
    const deletedMatkul = await MatkulRepository.deleteSingle(id);
    //hapus
    console.log(
      deletedMatkul,
      "==== matkul.service.delete | return value ===="
    );
    return deletedMatkul;
  }
}

module.exports = MatkulService;
