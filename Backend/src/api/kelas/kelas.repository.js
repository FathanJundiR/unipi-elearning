const prisma = require("../../db");

class KelasRepository {
  static async fetchAll() {
    const kelas = await prisma.kelas.findMany();
    return kelas;
  }

  static async findById(kelasId) {
    const kelas = await prisma.kelas.findUnique({
      where: {
        id: kelasId,
      },
    });
    return kelas;
  }

  static async findUniqueBy(filter) {
    const kelas = await prisma.kelas.findUnique({
      where: filter,
    });
  }

  static async findManyBy(filter) {
    const kelas = await prisma.kelas.findMany({
      where: filter,
    });
  }

  static async createSingle(kelasData) {
    const kelas = await prisma.kelas.create({
      data: kelasData,
    });
    console.log(
      kelas,
      "==== kelas.repository.createSingle | return value ===="
    );
    return kelas;
  }

  static async createMany(kelassData) {}

  static async updateSingle(kelasData) {
    const kelas = await prisma.kelas.update({
      where: {
        id: kelasData.id,
      },
      data: kelasData,
    });
    console.log(
      kelas,
      "==== kelas.repository.updateSingle | return value ===="
    );
    return kelas;
  }
}

module.exports = KelasRepository;
