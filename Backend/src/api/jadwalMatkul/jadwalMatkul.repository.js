const prisma = require("../../db");

class JadwalMatkulRepository {
  static async fetchAll() {
    const jadwalMatkul = await prisma.jadwalMatkul.findMany();
    return jadwalMatkul;
  }

  static async findById(jadwalMatkulId) {
    const jadwalMatkul = await prisma.jadwalMatkul.findUnique({
      where: {
        id: jadwalMatkulId,
      },
    });
    return jadwalMatkul;
  }

  static async findUniqueBy(filter) {
    const jadwalMatkul = await prisma.jadwalMatkul.findFirst({
      where: filter,
    });
    return jadwalMatkul;
  }

  static async findManyBy(filter) {
    const jadwalMatkul = await prisma.jadwalMatkul.findMany({
      where: filter,
    });
  }

  static async createSingle(jadwalMatkulData) {
    const jadwalMatkul = await prisma.jadwalMatkul.create({
      data: jadwalMatkulData,
    });
    console.log(
      jadwalMatkul,
      "==== jadwalMatkul.repository.createSingle | return value ===="
    );
    return jadwalMatkul;
  }

  static async createMany(jadwalMatkulsData) {}

  static async updateSingle(id, jadwalMatkulData) {
    const jadwalMatkul = await prisma.jadwalMatkul.update({
      where: {
        id,
      },
      data: jadwalMatkulData,
    });
    //hapus
    console.log(
      jadwalMatkul,
      "==== jadwalMatkul.repository.updateSingle | return value ===="
    );
    return jadwalMatkul;
  }

  static async deleteSingle(id) {
    const deletedJadwalMatkul = await prisma.jadwalMatkul.delete({
      where: {
        id,
      },
    });
    //hapus
    console.log(
      deletedJadwalMatkul,
      "==== jadwalMatkul.repository.deleteSingle | return value ===="
    );
    return deletedJadwalMatkul;
  }
}

module.exports = JadwalMatkulRepository;
