const prisma = require("../../src/db");
const seedUser = require("./user.seeder");

async function main() {
  await seedUser(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
