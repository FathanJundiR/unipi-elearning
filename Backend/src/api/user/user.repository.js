const prisma = require("../../db");

class UserRepository {
  static async fetchAll() {
    const users = await prisma.user.findMany({
      omit: {
        password: true,
      },
    });
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
      omit: { password: false },
    });
    // console.log(users, "==== repository ====");
    return users;
  }
  static async findManyBy(filter) {
    const users = await prisma.user.findMany({
      omit: {
        password: true,
      },
      where: filter,
    });
  }

  static async createSingle(userData) {
    const user = await prisma.user.create({
      omit: {
        password: true,
      },
      data: userData,
    });
    console.log(user, "==== user.repository | return value ====");
    return user;
  }

  static async createMany(usersData) {}

  static async updateSingle(userCredential, userData) {
    const user = await prisma.user.update({
      omit: {
        password: true,
      },
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
