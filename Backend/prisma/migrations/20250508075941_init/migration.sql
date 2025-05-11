-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ADMIN', 'DOSEN', 'MAHASISWA');

-- CreateEnum
CREATE TYPE "SESIKULIAH" AS ENUM ('PAGI', 'MALAM', 'SHIFT');

-- CreateEnum
CREATE TYPE "SESIMATKUL" AS ENUM ('PAGI', 'MALAM');

-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('AKTIF', 'CUTI', 'KELUAR', 'DIKELUARKAN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nikNpm" VARCHAR(11) NOT NULL,
    "nama" VARCHAR(100) NOT NULL,
    "foto" TEXT,
    "password" VARCHAR(100) NOT NULL,
    "noTelepon" VARCHAR(20),
    "email" VARCHAR(100),
    "alamat" TEXT,
    "role" "ROLE" NOT NULL DEFAULT 'MAHASISWA',
    "sesiKuliah" "SESIKULIAH" NOT NULL,
    "status" "STATUS" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kelas" (
    "id" SERIAL NOT NULL,
    "namaKelas" VARCHAR(5) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Kelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TahunAjaran" (
    "id" SERIAL NOT NULL,
    "tahunAjaran" VARCHAR(25) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "TahunAjaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MataKuliah" (
    "id" SERIAL NOT NULL,
    "judul" VARCHAR(100) NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "MataKuliah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengumuman" (
    "id" SERIAL NOT NULL,
    "judul" VARCHAR(100) NOT NULL,
    "isi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Pengumuman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JadwalMatkul" (
    "id" SERIAL NOT NULL,
    "kelasId" INTEGER NOT NULL,
    "dosenId" INTEGER NOT NULL,
    "matkulId" INTEGER NOT NULL,
    "tahunAjaranId" INTEGER NOT NULL,
    "sesiMatkul" "SESIMATKUL" NOT NULL,
    "enrollCode" VARCHAR(6) NOT NULL,
    "hari" VARCHAR(6) NOT NULL,
    "jamMulai" TIMETZ,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "JadwalMatkul_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JadwalMahasiswa" (
    "id" SERIAL NOT NULL,
    "mahasiswaId" INTEGER NOT NULL,
    "jadwalMatkulId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "JadwalMahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PengumumanMatkul" (
    "id" SERIAL NOT NULL,
    "jadwalMatkulId" INTEGER NOT NULL,
    "pengumumanId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "PengumumanMatkul_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pertemuan" (
    "id" SERIAL NOT NULL,
    "jadwalMatkulId" INTEGER NOT NULL,
    "judul" VARCHAR(100),
    "deskripsi" TEXT,
    "pertemuanKe" SMALLINT NOT NULL,
    "attachment" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Pertemuan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tugas" (
    "id" SERIAL NOT NULL,
    "pertemuanId" INTEGER NOT NULL,
    "attachment" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "judul" VARCHAR(100) NOT NULL,
    "desktripsi" TEXT,
    "tanggalMulai" TIMESTAMP(3) NOT NULL,
    "tanggalBerhenti" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Tugas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HasilTugas" (
    "id" SERIAL NOT NULL,
    "mahasiswaId" INTEGER NOT NULL,
    "tugasId" INTEGER NOT NULL,
    "attachment" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "nilai" DOUBLE PRECISION,
    "feedback" TEXT,
    "tanggalPengumpulan" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "HasilTugas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nikNpm_key" ON "User"("nikNpm");

-- AddForeignKey
ALTER TABLE "JadwalMatkul" ADD CONSTRAINT "JadwalMatkul_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalMatkul" ADD CONSTRAINT "JadwalMatkul_dosenId_fkey" FOREIGN KEY ("dosenId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalMatkul" ADD CONSTRAINT "JadwalMatkul_matkulId_fkey" FOREIGN KEY ("matkulId") REFERENCES "MataKuliah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalMatkul" ADD CONSTRAINT "JadwalMatkul_tahunAjaranId_fkey" FOREIGN KEY ("tahunAjaranId") REFERENCES "TahunAjaran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalMahasiswa" ADD CONSTRAINT "JadwalMahasiswa_mahasiswaId_fkey" FOREIGN KEY ("mahasiswaId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalMahasiswa" ADD CONSTRAINT "JadwalMahasiswa_jadwalMatkulId_fkey" FOREIGN KEY ("jadwalMatkulId") REFERENCES "JadwalMatkul"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PengumumanMatkul" ADD CONSTRAINT "PengumumanMatkul_jadwalMatkulId_fkey" FOREIGN KEY ("jadwalMatkulId") REFERENCES "JadwalMatkul"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PengumumanMatkul" ADD CONSTRAINT "PengumumanMatkul_pengumumanId_fkey" FOREIGN KEY ("pengumumanId") REFERENCES "Pengumuman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pertemuan" ADD CONSTRAINT "Pertemuan_jadwalMatkulId_fkey" FOREIGN KEY ("jadwalMatkulId") REFERENCES "JadwalMatkul"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tugas" ADD CONSTRAINT "Tugas_pertemuanId_fkey" FOREIGN KEY ("pertemuanId") REFERENCES "Pertemuan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasilTugas" ADD CONSTRAINT "HasilTugas_mahasiswaId_fkey" FOREIGN KEY ("mahasiswaId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasilTugas" ADD CONSTRAINT "HasilTugas_tugasId_fkey" FOREIGN KEY ("tugasId") REFERENCES "Tugas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
