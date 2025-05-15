
# Tugas White Box Testing dengan JavaScript

## Dosen Pengampu
**Deni Suprihadi, S.T, M.Kom., MCE.**

## Materi
1. **Session 1**: Definisi dan konsep
2. **Session 2**: Model White Box Testing

**Disusun Oleh:**  
- Arya Nugraha  
- NIM: 20221310064  
- Denita Alhamdina Putri Arisandi  
- NIM: 20221310013
- Kelompok SQ
- Sri purnama Royani putri
- NIM: 20211310066
- Melvin Chairul Azfa
- NIM: 20211310019

## Deskripsi
Tugas ini bertujuan untuk memahami dan mengimplementasikan pengujian **White Box Testing** menggunakan JavaScript. **White Box Testing** adalah metode pengujian perangkat lunak yang melibatkan pemeriksaan struktur internal kode program. Pengujian ini mengharuskan penguji untuk memahami alur logika dalam kode yang diuji, serta bagaimana kode tersebut menangani berbagai kondisi dan perulangan.

Pada tugas ini, model-model pengujian yang digunakan mencakup:
1. **Desk Checking**
2. **Code Walkthrough**
3. **Formal Inspections**
4. **Control Flow Testing**
5. **Data Flow Testing**
6. **Basic Path Testing**
7. **Loop Testing**

## Model Pengujian yang Digunakan

### 1. **Desk Checking**
Desk Checking adalah proses memeriksa kode secara manual tanpa menjalankan kode tersebut. Ini dilakukan dengan membaca kode dan mencari kesalahan secara visual.

### 2. **Code Walkthrough**
Code Walkthrough adalah proses di mana pengembang atau tim pengembang lain memeriksa kode yang telah ditulis oleh pengembang lain untuk menemukan bug atau area yang bisa diperbaiki.

### 3. **Formal Inspections**
Formal Inspections adalah pemeriksaan kode secara formal dan sistematis, biasanya dilakukan oleh tim dengan prosedur yang telah ditetapkan untuk menilai kualitas kode.

### 4. **Control Flow Testing**
Control Flow Testing berfokus pada pengujian jalur percabangan dalam kode (seperti `if-else` atau `switch-case`) untuk memastikan bahwa jalur keputusan diuji dengan benar.

**Contoh Kode**:
```javascript
function cekGenapGanjil(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}
```

### 5. **Data Flow Testing**
Data Flow Testing memfokuskan pengujian pada bagaimana data bergerak dan diproses dalam program, memastikan bahwa data dikelola dengan benar.

**Contoh Kode**:
```javascript
function kalikan(a, b) {
  return a * b;
}
```

### 6. **Basic Path Testing**
Basic Path Testing menguji jalur dasar dalam kode untuk memastikan bahwa jalur utama berfungsi dengan baik dan tidak ada masalah.

**Contoh Kode**:
```javascript
function cekBilanganPositif(angka) {
  if (angka > 0) {
    return "Positif";
  } else {
    return "Non-Positif";
  }
}
```

### 7. **Loop Testing**
Loop Testing berfokus pada pengujian perulangan dalam kode untuk memastikan bahwa perulangan berjalan dengan benar dan tidak terjadi kesalahan atau loop tak terbatas.

**Contoh Kode**:
```javascript
function cetakAngka() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
```

## Instalasi

Untuk menjalankan kode ini di lokal, ikuti langkah-langkah berikut:

1. **Clone Repository**:
   - Salin URL repository ini dan jalankan perintah berikut di terminal:
     ```
     git clone https://github.com/username/white-box-testing-js.git
     ```

2. **Akses Folder Proyek**:
   - Masuk ke folder proyek yang telah di-clone:
     ```
     cd white-box-testing-js
     ```

3. **Jalankan Kode**:
   - Kode dalam file `tugas.js` dapat dijalankan menggunakan Node.js. Pastikan Anda telah menginstal [Node.js](https://nodejs.org/).
   - Untuk menjalankan kode, ketik perintah berikut di terminal:
     ```
     node tugas.js
     ```

## Pengujian
Pada file `tugas.js`, terdapat beberapa fungsi yang diuji menggunakan model pengujian **White Box Testing**. Fungsi-fungsi tersebut meliputi:

1. **`cekGenapGanjil(angka)`**: Fungsi ini menguji apakah angka yang diberikan genap atau ganjil.
2. **`kalikan(a, b)`**: Fungsi ini mengalikan dua angka.
3. **`cetakAngka()`**: Fungsi ini mencetak angka dari 1 hingga 10.
4. **`cekBilanganPositif(angka)`**: Fungsi ini menguji apakah angka lebih besar dari 0 (positif) atau tidak (non-positif).

### **Cara Pengujian**:
- Uji fungsi **Control Flow Testing** dengan memasukkan angka genap dan ganjil.
- Uji fungsi **Data Flow Testing** dengan memberikan dua parameter angka untuk dikalikan.
- Uji fungsi **Loop Testing** dengan menjalankan fungsi yang mencetak angka 1 hingga 10.
- Uji fungsi **Basic Path Testing** dengan memasukkan angka positif dan non-positif.

## Kontribusi
Jika Anda ingin berkontribusi pada repository ini, silakan buat fork dan kirim pull request. Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan.

---


