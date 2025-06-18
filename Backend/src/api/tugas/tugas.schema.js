const { z } = require("zod");

const tugasDataSchema = z.object({
  pertemuanId: z.string().regex(/^\d*$/),
  attachment: z.string().array(),
  judul: z.string().min(1).max(100),
  deskripsi: z.string().optional(),
  tanggalMulai: z.string().datetime(),
  tanggalBerhenti: z.string().datetime(),
});

module.exports = { tugasDataSchema };
