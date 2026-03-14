var a = parseInt (prompt ("Masukkan angka A"))
var b = parseInt (prompt ("Masukkan angka B"))




// operator dasar

var hasil = a + b
console.log ("Hasilnya adalah (tambah)", hasil)

var hasil = a - b
console.log ("Hasilnya adalah (kurang)", hasil)

var hasil = a * b
console.log ("Hasilnya adalah (kali)", hasil)

var hasil = a ** b
console.log ("Hasilnya adalah (pangkat)", hasil)

var hasil = a / b
console.log ("Hasilnya adalah (bagi)", hasil)

var hasil = a % b
console.log ("Hasilnya adalah (modulus)", hasil)




// perbandingan

var hasil = a > b
console.log ("Apakah A lebih besar dari B? :", hasil)

var hasil = a < b
console.log ("Apakah A lebih kecil dari B? :", hasil)

var hasil = a != b
console.log ("Apakah A tidak sama dengan B? :", hasil)




// logika

var hasil = (a > b) && (a < b)
console.log ("Apakah A lebih besar dari B dan A lebih kecil dari B? :", hasil)

var hasil = (a > b) || (a < b)
console.log ("Apakah A lebih besar dari B atau A lebih kecil dari B? :", hasil)

var hasil = ! (a < b)
console.log ("tidak sama", hasil)

var hasil = ! (a > b)
console.log ("Tidak sama", hasil)

var hasil = (! b)
console.log ("Tidak sama", hasil)

var hasil = ("Tidak sama", ! a)
console.log (hasil)