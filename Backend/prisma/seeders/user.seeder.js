const { hash } = require("../../src/helpers/bcrypt");
const fs = require("fs").promises;

const seedUsers = async (prisma) => {
  const userStr = await fs.readFile("./prisma/seeders/data/users.json");
  const userJson = JSON.parse(userStr);
  const users = userJson.map((user) => {
    user.password = hash(user.password);
    return user;
  });

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true,
  });
};

module.exports = seedUsers;
