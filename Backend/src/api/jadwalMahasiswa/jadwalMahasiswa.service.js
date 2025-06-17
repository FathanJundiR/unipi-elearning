const JadwalMahasiswaRepository = require("./jadwalMahasiswa.repository");
const HttpException = require("../../exceptions/HttpException");
const { API_ERROR_MESSAGE } = require("../../constant");
const JadwalMatkulRepository = require("../jadwalMatkul/jadwalMatkul.repository");

class JadwalMahasiswaService {
  static async getAll() {
    const jadwalMahasiswa = await JadwalMahasiswaRepository.fetchAll();
    //hapus
    console.log(
      jadwalMahasiswa,
      "==== jadwalMahasiswa.service.getAll | return value prisma ===="
    );
    if (!jadwalMahasiswa) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return jadwalMahasiswa;
  }

  static async getById(jadwalMahasiswaId) {
    const jadwalMahasiswa = await JadwalMahasiswaRepository.findById(
      jadwalMahasiswaId
    );
    //hapus
    console.log(
      jadwalMahasiswa,
      "==== jadwalMahasiswa.service.getById | return value prisma ===="
    );
    if (!jadwalMahasiswa) {
      throw new HttpException(401, API_ERROR_MESSAGE.notFound);
    }
    return jadwalMahasiswa;
  }

  static async insertSingle(jadwalMahasiswaData) {
    const jadwalMahasiswa = await JadwalMahasiswaRepository.createSingle(
      jadwalMahasiswaData
    );
    //hapus
    console.log(
      jadwalMahasiswa,
      "==== jadwalMahasiswa.repository.insertSingle | return value ===="
    );
    return jadwalMahasiswa;
  }

  static async enroll(jadwalMahasiswaData) {
    const jadwalMatkul = await JadwalMatkulRepository.findUniqueBy({
      enrollCode: jadwalMahasiswaData.enrollCode,
    });
    const exist = await JadwalMahasiswaRepository.findUniqueBy({
      mahasiswaId: jadwalMahasiswaData.mahasiswaId,
      jadwalMatkulId: jadwalMatkul.id,
    });
    if (exist) {
      throw new HttpException(401, API_ERROR_MESSAGE.jadwalMahasiswaExist);
    }
    jadwalMahasiswaData.jadwalMatkulId = jadwalMatkul.id;
    delete jadwalMahasiswaData.enrollCode;
    const jadwalMahasiswa = await JadwalMahasiswaRepository.createSingle(
      jadwalMahasiswaData
    );
    return jadwalMahasiswa;
  }

  static async updateSingle(jadwalMahasiswaData) {
    const jadwalMahasiswa = await JadwalMahasiswaRepository.updateSingle(
      jadwalMahasiswaData
    );
    //hapus
    console.log(
      jadwalMahasiswa,
      "==== jadwalMahasiswa.repository.updateSingle | return value ===="
    );
    return jadwalMahasiswa;
  }
}

module.exports = JadwalMahasiswaService;
