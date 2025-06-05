const { z } = require("zod");

const kelasDataSchema = z.object({
  namaKelas: z.string().min(2).max(5),
});

module.exports = { kelasDataSchema };
