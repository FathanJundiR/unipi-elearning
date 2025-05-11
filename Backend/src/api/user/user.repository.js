const prisma = require("../../db");
const { hash } = require("../../helpers/bcrypt");

const fetchAllUser = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const findUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};

const findUniqueBy = async (filter) => {
  // console.log(filter, "==== repository ====");
  const users = await prisma.user.findUnique({
    where: filter,
  });
  // console.log(users, "==== repository ====");
  return users;
};

const findManyBy = async () => {
  // const users = await prisma
};

module.exports = {
  fetchAllUser,
  findUserById,
  findUniqueBy,
  findManyBy,
};
