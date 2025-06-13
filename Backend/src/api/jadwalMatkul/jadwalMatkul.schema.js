const { z } = require("zod");

const jadwalMatkulDataSchema = z.object({
  kelasId: z.string().regex(/^\d*$/),
  dosenId: z.string().regex(/^\d*$/),
  matkulId: z.string().regex(/^\d*$/),
  tahunAjaranId: z.string().regex(/^\d*$/),
  sesiMatkul: z.enum(["PAGI", "MALAM"]),
  hari: z.enum(["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]),
  jamMulai: z.string().time().optional(),
});

module.exports = { jadwalMatkulDataSchema };
