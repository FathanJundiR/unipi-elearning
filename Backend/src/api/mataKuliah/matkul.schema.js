const { z } = require("zod");

const matkulDataSchema = z.object({
  judul: z.string().min(2).max(100),
  deskripsi: z.string().min(2).max(5),
});

module.exports = { matkulDataSchema };
