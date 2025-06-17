const prisma = require("../../db");

class JadwalMahasiswaRepository {
  static async fetchAll() {
    const jadwalMahasiswa = await prisma.jadwalMahasiswa.findMany();
    return jadwalMahasiswa;
  }

  static async findById(jadwalMahasiswaId) {
    const jadwalMahasiswa = await prisma.jadwalMahasiswa.findUnique({
      where: {
        id: jadwalMahasiswaId,
      },
    });
    return jadwalMahasiswa;
  }

  static async findUniqueBy(filter) {
    const jadwalMahasiswa = await prisma.jadwalMahasiswa.findMany({
      where: filter,
    });
    return jadwalMahasiswa;
  }

  static async findManyBy(filter) {
    const jadwalMahasiswa = await prisma.jadwalMahasiswa.findMany({
      where: filter,
    });
  }

  static async createSingle(jadwalMahasiswaData) {
    const jadwalMahasiswa = await prisma.jadwalMahasiswa.create({
      data: jadwalMahasiswaData,
    });
    console.log(
      jadwalMahasiswa,
      "==== jadwalMahasiswa.repository.createSingle | return value ===="
    );
    return jadwalMahasiswa;
  }

  static async createMany(jadwalMahasiswasData) {}

  static async updateSingle(jadwalMahasiswaData) {
    const jadwalMahasiswa = await prisma.jadwalMahasiswa.update({
      where: {
        id: jadwalMahasiswaData.id,
      },
      data: jadwalMahasiswaData,
    });
    console.log(
      jadwalMahasiswa,
      "==== jadwalMahasiswa.repository.updateSingle | return value ===="
    );
    return jadwalMahasiswa;
  }
}

module.exports = JadwalMahasiswaRepository;
