const prisma = require("../../db");

class MatkulRepository {
  static async fetchAll() {
    const matkul = await prisma.mataKuliah.findMany();
    return matkul;
  }

  static async findById(matkulId) {
    const matkul = await prisma.mataKuliah.findUnique({
      where: {
        id: matkulId,
      },
    });
    return matkul;
  }

  static async findUniqueBy(filter) {
    const matkul = await prisma.mataKuliah.findUnique({
      where: filter,
    });
  }

  static async findManyBy(filter) {
    const matkul = await prisma.mataKuliah.findMany({
      where: filter,
    });
  }

  static async createSingle(matkulData) {
    const matkul = await prisma.mataKuliah.create({
      data: matkulData,
    });
    console.log(
      matkul,
      "==== matkul.repository.createSingle | return value ===="
    );
    return matkul;
  }

  static async createMany(matkulsData) {}

  static async updateSingle(matkulData) {
    const matkul = await prisma.mataKuliah.update({
      where: {
        id: matkulData.id,
      },
      data: matkulData,
    });
    console.log(
      matkul,
      "==== matkul.repository.updateSingle | return value ===="
    );
    return matkul;
  }
}

module.exports = MatkulRepository;
