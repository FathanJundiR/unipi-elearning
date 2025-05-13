const { z } = require("zod");

const userLoginSchema = z.object({
  nikNpm: z.string(),
  password: z.string().min(8),
});

const userDataSchema = z.object({
  nikNpm: z.string().min(10).max(11),
  nama: z.string().min(1).max(100),
  foto: z.nullable(z.string()),
  password: z.string().min(8).max(100),
  noTelepon: z.nullable(z.string().max(20)),
  email: z.nullable(z.string().max(100)),
  alamat: z.nullable(z.string()),
  role: z.enum(["ADMIN", "DOSEN", "MAHASISWA"]),
  sesiKuliah: z.enum(["PAGI", "MALAM", "SHIFT"]),
  status: z.enum(["AKTIF", "CUTI", "KELUAR", "DIKELUARKAN"]),
});

module.exports = { userLoginSchema, userDataSchema };
