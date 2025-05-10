// tugas.js

// 1. Control Flow Testing - Mengecek apakah angka genap atau ganjil
function cekGenapGanjil(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

// 2. Data Flow Testing - Mengalikan dua angka
function kalikan(a, b) {
  return a * b;
}

// 3. Loop Testing - Mencetak angka 1 hingga 10
function cetakAngka() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 4. Basic Path Testing - Mengecek apakah angka lebih besar dari 0 (positif) atau tidak
function cekBilanganPositif(angka) {
  if (angka > 0) {
    return "Positif";
  } else {
    return "Non-Positif";
  }
}

// Pengujian fungsi-fungsi di atas
console.log("Control Flow Testing:");
console.log(cekGenapGanjil(4));  // Output: Genap
console.log(cekGenapGanjil(7));  // Output: Ganjil

console.log("\nData Flow Testing:");
console.log(kalikan(5, 3));  // Output: 15

console.log("\nLoop Testing:");
cetakAngka();  // Output: Angka 1 hingga 10

console.log("\nBasic Path Testing:");
console.log(cekBilanganPositif(10));  // Output: Positif
console.log(cekBilanganPositif(-5));  // Output: Non-Positif
