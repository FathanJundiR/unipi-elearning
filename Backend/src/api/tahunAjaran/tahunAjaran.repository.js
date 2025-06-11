const prisma = require("../../db");

class TahunAjaranRepository {
  static async fetchAll() {
    const tahunAjaran = await prisma.tahunAjaran.findMany();
    return tahunAjaran;
  }

  static async findById(tahunAjaranId) {
    const tahunAjaran = await prisma.tahunAjaran.findUnique({
      where: {
        id: tahunAjaranId,
      },
    });
    return tahunAjaran;
  }

  static async createSingle(tahunAjaranData) {
    const tahunAjaran = await prisma.tahunAjaran.create({
      data: tahunAjaranData,
    });
    console.log(
      tahunAjaran,
      "==== tahunAjaran.repository.createSingle | return value ===="
    );
    return tahunAjaran;
  }

  static async createMany(tahunAjaransData) {}

  static async updateSingle(id, tahunAjaranData) {
    const tahunAjaran = await prisma.tahunAjaran.update({
      where: {
        id,
      },
      data: tahunAjaranData,
    });
    console.log(
      tahunAjaran,
      "==== tahunAjaran.repository.updateSingle | return value ===="
    );
    return tahunAjaran;
  }
}

module.exports = TahunAjaranRepository;
