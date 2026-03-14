// Hello World JavaScript

console.log ("Hello World")




// sintaks dasar JavaScript

var teks = "Halo Teks"
console.log (teks)

var angka = 34
console.log (angka)

var desimal = 3.14
console.log (desimal)



// Sintaks dasar opsi

console.log ("Halo Dunia MAN 2")

console.log ("Halo Dunia Kuliah")

console.log ("Halo Baraju")




// Sintaks dasar 2

var iniText = "Soft File"
var iniAngka = 345
var iniDesimal = 3.14
var iniBool = true
var iniChar = 'A'


console.log (iniText)
console.log (iniAngka)
console.log (iniDesimal)
console.log (iniBool)
console.log (iniChar)




// sintaks dasar 3 JavaScript

var nama = "Habib Muzakki "
var umur = 20
var koma = 5.67


console.log ("Nama :", nama)
console.log ("Umur :", umur)
console.log ("Koma :", koma)




// sintaks dasar 3 JavaScript 

var ad = "- Halo "
var bk = "Claire Shane Ailie Sumantri, "
var ck = "Cantik dan Keren, "
var dk = "Karena ikut dan berhasil juara OSN Informatika 2025"
	
var hasil = ad + bk + ck + dk
	
console.log (hasil)




// sintaks dasar 4 JavaScript
	
var x = "- Halo "
var z = "Joanne Henrietta Fajar, "
var w = "Semangat ya Cantik "
	
var hasil = x + z + w
	
console.log (hasil)
	


	
// sintaks dasar 4 JavaScript
	
var v = "- Halo Felicia Kurniawati, "
var t = "kamu sangat cantik dan ceria dan pemilik Cimi Timi Cafe Malang, "
var e = "dan kamu itu sangat manis "
	
var hasil = v + t + e
	
console.log (hasil)



// Sintaks dasar 5 JavaScript

var gk = "- Halo Kezia Samantha, "
var km = "kamu adalah seorang Influencer terkenal dari Surabaya, "
var ml = "dan kamu itu sangat manis "

var hasil = gk + km + ml

console.log (hasil)



	
// operasi dasar JavaScript

var a = 10
var b = 5

console.log ("Penjumlahan:", a + b)
console.log ("Pengurangan:", a - b)
console.log ("Perkalian:", a * b)
console.log ("Pembagian:", a / b)
console.log ("Modulus:", a % b)
console.log ("Pangkat:", a ** b)




// operator perbandingan JavaScript

console.log ("Sama dengan:", a == b)
console.log ("Tidak sama dengan:", a != b)
console.log ("Lebih besar dari:", a > b)
console.log ("Lebih kecil dari:", a < b)




// operator logika JavaScript

console.log ("Dan:", (a > b) && (b > 0))
console.log ("Atau:", (a > b) || (b < 0))
console.log ("Tidak:",  ! (a > b))




// tipe data dasar JavaScript

var teks = "Belajar JavaScript"
var angka = 42
var desimal = 3.14159
var boolean = true

console.log (teks)
console.log (angka)
console.log (desimal)
console.log (boolean)




// percabangan dasar

var nilai = 75

if (nilai > 85) {
    console.log ("Besar")
}

else {
   console.log ("Nilai Anda C")
}
    
 
 
    
// percabangan lanjutan

var nilai_kop = 90

if (nilai_kop > 85) {
    console.log ("Nilai Anda A")
}


else if (nilai_kop > 70) {
    console.log ("Nilai Anda B")
}

else if (nilai_kop > 60) {
    console.log ("Nilai Anda B")
}

else if (nilai_kop > 50) {
    console.log ("Nilai Anda B")

}

else {
    console.log ("Nilai Anda E")
}
    


    
// percabangan bersarang (nested)

var nilai_kor = 65

if (nilai_kor > 50) {
    if (true) {
        console.log ("besar")
    }

    else if (nilai_kor == 40) {
        console.log ("60")
    }

    else if (nilai_kor == 30) {
        console.log ("30")
    }

    else if (nilai_kor == 20) {
        console.log ("20")
    }
}

else {
        console.log ("semula")
    }




// switch case

var nilai_t = 6

switch (nilai_t) {

    case 1:
    console.log ("1")
    break

    case 2:
    console.log ("2")
    break

    case 3:
    console.log ("3")
    break

    case 4:
    console.log ("4")
    break
    
    case 5:
    console.log ("5")
    break

    case 6:
    console.log ("6")
    break

    case 7:
    console.log ("7")
    break

    default:
    console.log ("Semula")
}




// perulangan for

for (i = 0; i < 10; i++) {
    console.log ("i", i)
}



for (y = 0; y < 15; y++) {
    console.log ("y", y)
}



for (h = 0; h < 10; h++) {
    console.log ("Ph", h)
}



for (v = 0; v < 10; v++) {
    console.log ("v", v)
}



for (j = 0; j < 20; j++) {
    console.log ("j", j)
}




// Perulangan While

var fg = 5
while (fg < 5) {
    console.log ("fg", fg)
    fg++
}



var df = 3
while (df < 3) {
    console.log ("df", df)
    df++
}



var fl = 4
while (fl < 4) {
    console.log ("fg", fl)
    fl++
}




// perulangan do while 

var yu = 4
do {
    console.log ("yu", yu)
    yu++
} while (yu < 4)



var hu = 5
do {
    console.log ("hu", hu)
    hu++
} while (hu < 5)



var nk = 6
do {
    console.log ("nk", nk)
    nk++
} while (nk < 6)




// Array

var buah = ["apel", "pisang", "jeruk"]
console.log (buah)



var lor = ["mobil", "motor", "sepeda"]
console.log (lor)



var fon = ["samsung", "iphone", "xiaomi"]
console.log (fon)



var rt = ["Cimi", "Mbok To", "Chipi", "Taka"]
console.log  (rt)



var ko = ["Jerman", "Inggris", "Jepang", "Tiongkok"]
console.log  (ko)




// Objek

var data = {
    "nama" : "Jose Rizal",
    "kerja" : "Programmer",
    "asal" : "Jakarta",
    "usia" : "25 tahun",
}

console.log ("Nama :", data ["nama"])

console.log ("Kerja :", data ["kerja"])

console.log ("Asal :", data ["asal"])

console.log ("Usia :", data ["usia"])

console.log (data)




// fungsi dasar

function dar () {
    console.log ("Selamat datang di Tes")
}

dar ()



function far () {
    console.log ("Halo Dunia")
}

far ()
far ()



function ror () {
    console.log ("Halo OSN Informatika")
    console.log ("Halo OSN-K Informatika")
    console.log ("Halo OSN-P Informatika")
    console.log ("Halo OSN-S Informatika")
}

ror ()




// fungsi dengan parameter

function ton (nama) {
    console.log ("Halo " + nama + ", Selamat datang di CCIT-FTUI")
}

ton ("Habib")
ton ("Rayyan")
ton ("Hayyan")
ton ("Dio")



function end (namo) {
    console.log ("Halo " + namo + ", kamu lagi dimana ?")
}

end ("Habib")
end ("Ryder")
end ("Robert")



function jao (nas) {
    console.log ("Tes " + nas + ", untuk membuat Inovasi")
}



jao ("AC")
jao ("IoT")
jao ("Robot")
jao ("Jansen")



function toa (ver) {
    console.log ("Cek " + ver + ", alat baru")
}

toa ("Jansen")
toa ("Jump")
toa ("Kop")




// fungsi dengan return

function tambah (a, b) {
    return a + b
}



hasil = tambah (4, 5)
console.log (hasil)



function kurang (x, y) {
    return x - y
}

hasil = kurang (9, 5)
console.log (hasil)



function pangkat (v, n) {
    return v * n
}

hasil = 10, 6
console.log (hasil)
