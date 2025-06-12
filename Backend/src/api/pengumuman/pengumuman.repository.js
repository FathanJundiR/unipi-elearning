const prisma = require("../../db");

class PengumumanRepository {
  static async fetchAll() {
    const pengumuman = await prisma.pengumuman.findMany();
    return pengumuman;
  }

  static async findById(pengumumanId) {
    const pengumuman = await prisma.pengumuman.findUnique({
      where: {
        id: pengumumanId,
      },
    });
    return pengumuman;
  }

  static async findUniqueBy(filter) {
    const pengumuman = await prisma.pengumuman.findUnique({
      where: filter,
    });
  }

  static async findManyBy(filter) {
    const pengumuman = await prisma.pengumuman.findMany({
      where: filter,
    });
  }

  static async createSingle(pengumumanData) {
    const pengumuman = await prisma.pengumuman.create({
      data: pengumumanData,
    });
    console.log(
      pengumuman,
      "==== pengumuman.repository.createSingle | return value ===="
    );
    return pengumuman;
  }

  static async createMany(pengumumansData) {}

  static async updateSingle(id, pengumumanData) {
    const pengumuman = await prisma.pengumuman.update({
      where: {
        id,
      },
      data: pengumumanData,
    });
    //hapus
    console.log(
      pengumuman,
      "==== pengumuman.repository.updateSingle | return value ===="
    );
    return pengumuman;
  }

  static async deleteSingle(id) {
    const deletedPengumuman = await prisma.pengumuman.delete({
      where: {
        id,
      },
    });
    //hapus
    console.log(
      deletedPengumuman,
      "==== pengumuman.repository.deleteSingle | return value ===="
    );
    return deletedPengumuman;
  }
}

module.exports = PengumumanRepository;
