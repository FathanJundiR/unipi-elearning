const prisma = require("../../db");

class HasilTugasRepository {
  static async fetchAll() {
    const hasilTugas = await prisma.hasilTugas.findMany();
    return hasilTugas;
  }

  static async findById(hasilTugasId) {
    const hasilTugas = await prisma.hasilTugas.findUnique({
      where: {
        id: hasilTugasId,
      },
    });
    return hasilTugas;
  }

  static async createSingle(hasilTugasData) {
    const hasilTugas = await prisma.hasilTugas.create({
      data: hasilTugasData,
    });
    console.log(
      hasilTugas,
      "==== hasilTugas.repository.createSingle | return value ===="
    );
    return hasilTugas;
  }

  static async createMany(hasilTugassData) {}

  static async updateSingle(id, hasilTugasData) {
    const deletedHasilTugas = await prisma.hasilTugas.update({
      where: {
        id,
      },
      data: hasilTugasData,
    });
    console.log(
      hasilTugas,
      "==== hasilTugas.repository.updateSingle | return value ===="
    );
    return hasilTugas;
  }

  static async deleteSingle(id) {
    const deletedHasilTugas = await prisma.hasilTugas.delete({
      where: {
        id,
      },
    });
    console.log(
      deletedHasilTugas,
      "==== hasilTugas.repository.deleteSingle | return value ===="
    );
    return deletedHasilTugas;
  }
}

module.exports = HasilTugasRepository;
