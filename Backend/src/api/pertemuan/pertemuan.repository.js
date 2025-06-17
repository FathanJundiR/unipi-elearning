const prisma = require("../../db");

class PertemuanRepository {
  static async fetchAll() {
    const pertemuan = await prisma.pertemuan.findMany();
    return pertemuan;
  }

  static async findById(pertemuanId) {
    const pertemuan = await prisma.pertemuan.findUnique({
      where: {
        id: pertemuanId,
      },
    });
    return pertemuan;
  }

  static async findUniqueBy(filter) {
    const pertemuan = await prisma.pertemuan.findUnique({
      where: filter,
    });
  }

  static async findManyBy(filter) {
    const pertemuan = await prisma.pertemuan.findMany({
      where: filter,
    });
  }

  static async createSingle(pertemuanData) {
    const pertemuan = await prisma.pertemuan.create({
      data: pertemuanData,
    });
    console.log(
      pertemuan,
      "==== pertemuan.repository.createSingle | return value ===="
    );
    return pertemuan;
  }

  static async createMany(pertemuansData) {}

  static async updateSingle(pertemuanData) {
    const pertemuan = await prisma.pertemuan.update({
      where: {
        id: pertemuanData.id,
      },
      data: pertemuanData,
    });
    console.log(
      pertemuan,
      "==== pertemuan.repository.updateSingle | return value ===="
    );
    return pertemuan;
  }
}

module.exports = PertemuanRepository;
