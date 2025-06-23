const { z } = require("zod");

const hasilTugasDataSchema = z.object({
  mahasiswaId: z.string().regex(/^\d*$/),
  tugasId: z.string().regex(/^\d*$/),
  attachment: z.string().array(),
  nilai: z.string().regex(/^\d*$/),
  feedback: z.string(),
  tanggalPengumpulan: z.date(),
});

module.exports = { hasilTugasDataSchema };
