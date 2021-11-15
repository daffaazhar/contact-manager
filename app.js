const { tulisPertanyaan, simpanContact } = require("./contacts");

const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama Anda : ");
  const email = await tulisPertanyaan("Masukkan email Anda : ");
  const noHP = await tulisPertanyaan("Masukkan nomor HP Anda : ");

  simpanContact(nama, email, noHP);
};

main();
