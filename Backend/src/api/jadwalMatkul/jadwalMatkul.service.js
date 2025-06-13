const JadwalMatkulRepository = require("./jadwalMatkul.repository");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");
const { generate } = require("../../utils/enrollGenerator");
const { idToInteger } = require("../../utils/convert");

class JadwalMatkulService {
  static async getAll() {
    const jadwalMatkul = await JadwalMatkulRepository.fetchAll();
    //hapus
    console.log(
      jadwalMatkul,
      "==== jadwalMatkul.service.getAll | return value prisma ===="
    );
    if (!jadwalMatkul) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return jadwalMatkul;
  }

  static async getById(jadwalMatkulId) {
    const jadwalMatkul = await JadwalMatkulRepository.findById(jadwalMatkulId);
    //hapus
    console.log(
      jadwalMatkul,
      "==== jadwalMatkul.service.getById | return value prisma ===="
    );
    if (!jadwalMatkul) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return jadwalMatkul;
  }

  static async insertSingle(jadwalMatkulData) {
    let enrollCode;
    let isUnique = false;
    while (!isUnique) {
      const code = generate();
      const existing = await JadwalMatkulRepository.findUniqueBy({
        enrollCode: code,
      });
      if (!existing) {
        enrollCode = code;
        isUnique = true;
      }
    }
    jadwalMatkulData.enrollCode = enrollCode;
    const fixedData = idToInteger(jadwalMatkulData);
    const jadwalMatkul = await JadwalMatkulRepository.createSingle(fixedData);
    //hapus
    console.log(
      jadwalMatkul,
      "==== jadwalMatkul.repository.insertSingle | return value ===="
    );
    return jadwalMatkul;
  }

  static async updateSingle(id, jadwalMatkulData) {
    const jadwalMatkul = await JadwalMatkulRepository.updateSingle(
      id,
      jadwalMatkulData
    );
    //hapus
    console.log(
      jadwalMatkul,
      "==== jadwalMatkul.repository.updateSingle | return value ===="
    );
    return jadwalMatkul;
  }

  static async deleteSingle(id) {
    const deletedJadwalMatkul = await JadwalMatkulRepository.deleteSingle(id);
    //hapus
    console.log(
      deletedJadwalMatkul,
      "==== jadwalMatkul.service.delete | return value ===="
    );
    return deletedJadwalMatkul;
  }
}

module.exports = JadwalMatkulService;
