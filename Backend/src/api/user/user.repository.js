const prisma = require("../../db");

class UserRepository {
  static async fetchAll() {
    const users = await prisma.user.findMany();
    return users;
  }

  static async findById(userId) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  }

  static async findUniqueBy(filter) {
    // console.log(filter, "==== repository ====");
    const users = await prisma.user.findUnique({
      where: filter,
    });
    // console.log(users, "==== repository ====");
    return users;
  }
  static async findManyBy() {
    // const users = await prisma
  }

  static async createSingle(userData) {
    const user = await prisma.user.create({
      data: userData,
    });
    console.log(user, "==== user.repository | return value ====");
    return user;
  }

  static async createMany(usersData) {}

  static async updateSingle(userCredential, userData) {
    const user = await prisma.user.update({
      where: {
        nikNpm: userData.nikNpm,
      },
      data: userData,
    });
    console.log(user, "==== user.repository | return value ====");
    return user;
  }
}

module.exports = UserRepository;
