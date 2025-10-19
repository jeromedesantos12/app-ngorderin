# 📦 Telegram Stock Monitoring Bot

Sistem ini adalah **automation bot Telegram** yang digunakan untuk memantau stok barang dari para supplier. Bot ini dibangun dengan integrasi ke **Google Sheets** untuk menyimpan data user dan produk, serta menggunakan **automation flow builder** (seperti n8n / Pipedream / Botpress) untuk menjalankan logika pesan dan notifikasi otomatis.

- [Landing Page](https://app-ngorderin.vercel.app)
- [Dashboard N8N](https://n8n-fygesfg1plg1.kobalt.sumopod.my.id)
- [Fix Bug Theme](md/fix-theme.md)

---

## 🧾 Struktur Data

### 1. **Sheet: `register_data`**

Menyimpan data pengguna yang telah mendaftar melalui Telegram.

| Kolom             | Deskripsi                               |
| ----------------- | --------------------------------------- |
| `username`        | Username Telegram pengguna              |
| `chat_id`         | Chat ID Telegram untuk pengiriman pesan |
| `first_name`      | Nama depan pengguna                     |
| `registered_date` | Tanggal dan waktu registrasi            |

**Contoh data:**
| username | chat_id | first_name | registered_date |
|-----------|----------|-------------|------------------|
| tepen0 | 7591878864 | Ananda Steven | 2025-10-16T19:36:47.771+07:00 |
| jeromedesantos1 | 6946950539 | Jeremy | 2025-10-17T16:10:34.406+07:00 |

---

### 2. **Sheet: `product_data`**

Menyimpan data stok barang dari masing-masing supplier.

| Kolom           | Deskripsi                                       |
| --------------- | ----------------------------------------------- |
| `supplier_name` | Nama supplier (harus sesuai username terdaftar) |
| `product_name`  | Nama produk yang disuplai                       |
| `stock`         | Jumlah stok barang tersedia                     |

**Contoh data:**
| supplier_name | product_name | stock |
|----------------|---------------|--------|
| tepen() | Indomie | 100 |
| tepen() | Bango | 10 |
| jeromedesantos12 | Mi Sedap | 9 |
| jeromedesantos12 | Baygon | 7 |
| tepen() | Detol | 100 |

---

## ⚙️ Alur Otomasi (Workflow Overview)

### 🔹 1. Pengingat Harian

- Trigger otomatis (misalnya jam tertentu setiap hari)
- Membaca data dari:
  - `register_data`
  - `product_data`
- Mengecek apakah stok barang kurang atau data supply kosong.
- Jika ada stok rendah atau belum ada data supply, bot mengirim pesan peringatan ke supplier terkait melalui Telegram.

---

### 🔹 2. Registrasi Pengguna Baru (`/start`)

- Ketika user mengetik `/start` di Telegram:
  - Bot mencari data user berdasarkan `chat_id` di `register_data`.
  - Jika **belum terdaftar**, bot mengirimkan form register.
  - Setelah form dikirim, data baru disimpan ke sheet `register_data`.
  - Jika sudah terdaftar, bot mengirimkan pesan konfirmasi bahwa user sudah terdaftar.

---

### 🔹 3. Cek Stok (`/stock`)

- Ketika user mengetik `/stock`:
  - Bot mencari data produk berdasarkan `username` supplier di `product_data`.
  - Jika **tidak ada data supply**, bot mengirim pesan _“Belum ada data supply”_.
  - Jika ada data tapi stok rendah, bot mengirim pesan _“Stock kurang”_.
  - Jika semua stok aman, bot mengirim pesan _“Stock aman”_.

---

## 💬 Notifikasi Telegram

Bot secara otomatis mengirimkan pesan ke supplier terkait kondisi stok:

- **Belum supply data**
- **Stock data kurang**
- **Stock aman**

---

## 🧠 Logika Utama

| Kondisi                                | Aksi Bot                        |
| -------------------------------------- | ------------------------------- |
| User belum terdaftar                   | Kirim form register             |
| User sudah terdaftar                   | Cek produk berdasarkan username |
| Produk belum diinput                   | Kirim pesan “Belum supply data” |
| Stok di bawah batas minimum (mis. <10) | Kirim pesan “Stock kurang”      |
| Semua stok normal                      | Kirim pesan “Stock aman”        |

---

## 📅 Automation Trigger

| Trigger            | Deskripsi                                        |
| ------------------ | ------------------------------------------------ |
| `pengingat harian` | Mengecek stok semua supplier setiap hari         |
| `/start`           | Registrasi user baru                             |
| `/stock`           | Menampilkan kondisi stok untuk supplier tersebut |

---

## 🧩 Tools & Integrasi

- **Google Sheets**: Penyimpanan data user & produk
- **Telegram Bot API**: Komunikasi dua arah dengan pengguna
- **Automation Flow (n8n / sejenisnya)**: Menjalankan logika otomatis seperti pengecekan stok dan pengiriman notifikasi

---

## 🚀 Fitur yang Bisa Dikembangkan

- Penambahan kolom `minimum_stock` di sheet produk untuk batas bawah stok per item
- Notifikasi ke admin ketika ada supplier baru mendaftar
- Grafik visualisasi stok mingguan
- Integrasi dengan Google Form untuk input data supply

## Note dari Penulis

- Penambahan fitue timpa spreaadsheet product dari report erp, tapi masalahnya jangan sampai format tabelnya beda (kolomnya terbalik dll)
- masalah authentifikasi juga, siapa yang bisa nimpa spreadsheet? jangan sampai semua user bisa akses /update (command untuk timpa product) mungkin pakai sistem role? tapi balik lagi gimana cara telegram bisa bedain ini user role admin atau bukan? masa iya via command juga? kalo admin pas /start tambah detail bawahnya atau pakai command tambahan /admin gitu buat super user? atuh gampang banget diakalinnya kalo gitu
- jadi lebih baik mungkin timpa manual via google drive
