// Hello World Coding JavaScript

console.log ("Hello World")




// Sintaks dasar JavaScript

var x = "Contoh Teks"
console.log (x)


var y = 234
console.log (y)


var z = 3.14
console.log (z)




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




// Sintaks dasar 3 JavaScript

var nama = "Claire Shane Ailie Sumantri"
var kelas = "12"
var sekolah = "SMA Pradita Dirgantara"
let bidang = "Informatika"
let lomba = "Olimpiade Sains Nasional"


console.log ("Nama lengkap :", nama)

console.log ("Kelas :", kelas)

console.log ("Sekolah :", sekolah)

console.log ("Bidang :", bidang)

console.log ("Lomba :", lomba)




// Tipe data dasar

var teks = "Contoh aja"
var angka = 234
var desimal = 3.14
var char = 'A'
var cek = true 


console.log (teks)
console.log (angka)
console.log (desimal)
console.log (char)
console.log (cek)




// Operasi dasar 

var n = 4
var k = 2

console.log (n + k)
console.log (n - k)
console.log (n * k)
console.log (n ** k)
console.log (n / k)
console.log (n % k)




// Operasi Perbandingan

console.log (n > k)
console.log (n < k)
console.log (n == k)
console.log (n != k)
console.log (n >= k)
console.log (n <= k)




// Operasi logika

console.log (n && k)
console.log (n || k)
console.log (! k)
console.log (! n)




// Percabangan dasar 1

var o = 7

if (o > 5) {
    console.log ("Besar")
}

else {
    console.log ("Kecil")
}




// Percabangan dasar 2

var s = 4 

if (s > 5) {
    console.log ("Besar")
}

else {
    console.log ("Kecil")
}




// Percabangan dasar 3


var t = 8

if (t > 5) {
    console.log ("Besar")
}

else {
    console.log ("Kecil")
}




// Percabangan dasar 4

var s = 8

if (s > 5) {
    console.log ("Besar")
}

else {
    console.log ("Kecil")
}




// Percabangan Lanjutan

var t = 8


if (t > 5) {
    console.log ("Besar")
}

else if (t < 5) {
    console.log ("Kecil")
}

else {
    console.log ("Semula")
}




// Percabangan Lanjutan 2

var r = 3


if (r > 5) {
    console.log ("Besar")
}

else if (r < 5) {
    console.log ("Kecil")
}

else {
    console.log ("Semula")
}




// Percabangan Lanjutan 3

var n = 10

if (n > 5) {
    console.log ("Besar")
}
    
else if (n < 5) {
    console.log ("Kecil")
}

else {
    console.log ("Semula")
}




// Percabangan Lanjutan 4

var j = 15

if (j > 5) {
    console.log ("Besar")
}

else if (j < 5) {
    console.log ("Kecil")
}

else {
    console.log ("Semula")
}




// Percabangan Lanjutan 5

var b = 7

if (b > 5) {
    console.log ("Besar")
}

else if (b < 5) {
    console.log ("Kecil")
}

else {
    console.log ("Semula")
}




// Percabangan Bersarang (Nested) 1

var n = 9

if (n > 5) {
    if (true) {
        console.log ("Besar")
    }
    
    else if (n == 4) {
        console.log ("4")
    }
    
    else if (n == 3) {
        console.log ("3")
    }
    
    else if (n == 2) {
        console.log ("2")
    }
    
    else if (n == 1) {
        console.log ("1")
    }
}

else {
    console.log ("Semula")
}




// Percabangan Bersarang (Nested) 2

var c = 9

if (c > 5) {
    if (true) {
        console.log ("Besar")
    }
    
    else if (c == 4) {
        console.log ("4")
    }
    
    else if (c == 3) {
        console.log ("3")
    }
    
    else if (c == 2) {
        console.log ("2")
    }
    
    else if (c == 1) {
        console.log ("1")
    }
}

else {
    console.log ("Semula")
}




// Percabangan Bersarang (Nested) 3

var x = 9

if (x > 5) {
    if (true) {
        console.log ("Besar")
    }
    
    else if (x < 5) {
        console.log ("Kecil")
    }
}

else {
    console.log ("Semula")
}




// Switch Case

var nilai = 5

switch (nilai) {
    
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
        
    case 5:
        console.log ("5")
        
    default:
    console.log ("Semula")
}




// Switch Case 1

var m = 2

switch (m) {
    case 1:
        console.log ("Yes")
        break
        
    case 2:
        console.log ("No")
        break
        
    default:
    console.log ("Semula")
}




// For Perulangan

for (n = 0; n < 10; n++) {
    console.log ("n", n)
}



for (d = 0; d < 10; d++) {
    console.log ("d", d)
}



for (j = 0; j < 10; j++) {
    console.log ("j", j)
}



for (w = 0; w < 10; w++) {
    console.log ("w", w)
}



for (k = 0; k < 10; k++) {
    console.log ("k", k)
}



for (l = 0; l < 10; l++ ) {
    console.log ("l", l)
}




// While Perulangan

var b = 0

while (b < 10) {
    console.log ("b", b)
    b++
}



var z = 0

while (z < 20) {
    console.log ("z", z)
    z++
}



var g = 0

while (g < 30) {
    console.log ("g", g)
    g++
}



var j = 0

while (j < 40) {
    console.log ("j", j)
    j++
}



var g = 0

while (g < 45) {
    console.log ("g", g)
    g++
}




// Do While Perulangan

var w = 0

do {
    console.log ("w", w)
    w++
} while (w < 10)



var q = 0

do {
    console.log ("q", q)
    q++
} while (q < 20)



var d= 0

do {
    console.log ("d", d)
    d++
} while (d < 10)



// Fungsi dasar

function dasar () {
    console.log ("Tes")
}

dasar ()



// Fungsi dasar 2

function das () {
    console.log ("Tell")
}

das ()
das ()
das ()



// Fungsi dasar 3


function dat () {
    console.log ("San")
    console.log ("Sef")
    console.log ("Set")
    console.log ("Daf")
}

dat ()



// Fungsi dengan parameter

function def (nama) {
    console.log ("Halo " + nama + ", Selamat datang di Jakarta")
}

def ("Expo")
def ("Johan")
def ("Idang")



