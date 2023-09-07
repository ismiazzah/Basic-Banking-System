var saldo = 0;

// Fungsi untuk menambah saldo
function tambahSaldo() {
  var penambahan = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:")
  );
  if (!isNaN(penambahan)) {
    saldo += penambahan;
    alert("Saldo berhasil ditambahkan. Saldo sekarang: " + saldo);
  } else {
    alert("Input tidak valid. Saldo tidak berubah.");
  }
}

// Fungsi untuk mengurangi saldo
function kurangiSaldo() {
  var pengurangan = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin dikurangi:")
  );
  if (!isNaN(pengurangan)) {
    if (saldo >= pengurangan) {
      saldo -= pengurangan;
      alert("Saldo berhasil dikurangi. Saldo sekarang: " + saldo);
    } else {
      alert("Saldo tidak cukup untuk melakukan pengurangan.");
    }
  } else {
    alert("Input tidak valid. Saldo tidak berubah.");
  }
}

// Menjalankan fungsi mengelola saldo
function kelolaSaldo() {
  var pilihan = window.prompt(
    "Pilih tujuan: 1. Tambah Saldo | 2. Kurangi Saldo"
  );

  if (pilihan === "1") {
    tambahSaldo();
  } else if (pilihan === "2") {
    kurangiSaldo();
  } else {
    alert("Pilihan tidak valid.");
  }
}

kelolaSaldo();
