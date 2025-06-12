const { z } = require("zod");

const tahunAjaranDataSchema = z.object({
  tahunAjaran: z
    .string()
    .regex(/^\d{4}\/\d{4}$/, "Tahun Ajaran must be in YYYY/YYYY format"),
});

module.exports = { tahunAjaranDataSchema };
