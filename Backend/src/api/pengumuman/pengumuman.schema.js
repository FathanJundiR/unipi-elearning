const { z } = require("zod");

const pengumumanDataSchema = z.object({
  judul: z.string().max(50),
  isi: z.string().min(2),
});

module.exports = { pengumumanDataSchema };
