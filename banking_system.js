// Fungsi untuk mengonversi nilai numerik menjadi format mata uang Rupiah (IDR)
const formatToRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(value);
}

// Fungsi untuk menampilkan saldo dalam elemen dengan ID "saldoDisplay"
const displaySaldo = (value) => {
    value = formatToRupiah(value);
    document.getElementById("saldoDisplay").textContent = value;
}

// Fungsi untuk mengatur tampilan notifikasi (elemen dengan ID "notification")
const setNotificationDisplay = (style) => {
    document.getElementById("notification").style.display = style;
}

// Fungsi untuk menampilkan pesan notifikasi dan mengatur warna latar belakang notifikasi
const showNotification = (message, bgColor) => {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.backgroundColor = bgColor;
}

class BankAccount {
    constructor() {
        this.saldo = 0;
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
            amount = +amount;
            if (isNaN(amount)) {
                reject("Masukkan input yang sesuai");
                return;
            }

            setTimeout(() => {
                this.saldo += amount;
                displaySaldo(this.saldo);

                showNotification("Deposit Berhasil!", "#22C55E");
                resolve({
                    message: "Deposit berhasil",
                    amount: amount,
                    saldo: this.saldo,
                });
            }, 1000);
        });
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            amount = +amount;
            if (isNaN(amount)) {
                reject("Masukkan input yang sesuai");
                return;
            }

            if (this.saldo < amount) {
                reject(`Maaf saldo anda kurang dari ${amount}`);
                return;
            }

            setTimeout(() => {
                this.saldo -= amount;
                displaySaldo(this.saldo);

                showNotification("Withdraw Berhasil!", "#22C55E");
                resolve({
                    message: "Withdraw berhasil",
                    amount: amount,
                    saldo: this.saldo,
                });
            }, 1000);
        });
    }
}

// penggunaan
const account = new BankAccount();

// Tombol Deposit
const depositBtn = document.getElementById("depositBtn");
const depositAmountInput = document.getElementById("depositAmount");
depositBtn.addEventListener("click", () => {
    const amount = depositAmountInput.value;
    account.deposit(amount)
        .then((result) => {
            console.log(result.message);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Tombol Withdraw
const withdrawBtn = document.getElementById("withdrawBtn");
const withdrawAmountInput = document.getElementById("withdrawAmount");
withdrawBtn.addEventListener("click", () => {
    const amount = withdrawAmountInput.value;
    account.withdraw(amount)
        .then((result) => {
            console.log(result.message);
        })
        .catch((error) => {
            console.error(error);
        });
});