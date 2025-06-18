const prisma = require("../../db");

class TugasRepository {
  static async fetchAll() {
    const tugas = await prisma.tugas.findMany();
    return tugas;
  }

  static async findById(tugasId) {
    const tugas = await prisma.tugas.findUnique({
      where: {
        id: tugasId,
      },
    });
    return tugas;
  }

  static async createSingle(tugasData) {
    const tugas = await prisma.tugas.create({
      data: tugasData,
    });
    console.log(
      tugas,
      "==== tugas.repository.createSingle | return value ===="
    );
    return tugas;
  }

  static async createMany(tugassData) {}

  static async updateSingle(id, tugasData) {
    const deletedTugas = await prisma.tugas.update({
      where: {
        id,
      },
      data: tugasData,
    });
    console.log(
      tugas,
      "==== tugas.repository.updateSingle | return value ===="
    );
    return tugas;
  }

  static async deleteSingle(id) {
    const deletedTugas = await prisma.tugas.delete({
      where: {
        id,
      },
    });
    console.log(
      deletedTugas,
      "==== tugas.repository.deleteSingle | return value ===="
    );
    return deletedTugas;
  }
}

module.exports = TugasRepository;
