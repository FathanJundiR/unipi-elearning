const { z } = require("zod");

const jadwalMahasiswaDataSchema = z.object({
  jadwalMatkulId: z.string().regex(/^\d*$/),
  mahasiswaId: z.string().regex(/^\d*$/),
});

const enrollDataSchema = z.object({
  enrollCode: z.string(6),
});
module.exports = { jadwalMahasiswaDataSchema, enrollDataSchema };
