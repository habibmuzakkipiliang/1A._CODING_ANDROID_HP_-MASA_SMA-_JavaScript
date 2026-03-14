// hello world

console.log ("Hello World", "\n")

// sintaks dasar dan variabel

let t = "Belajar "
let h = "Coding "
let a = "JavaScript "
let d = "dan Python "
let e = "dengan semangat "

let hasil = t + h + a + d + e
console.log (hasil, "\n")

let star = "Hanya untuk latihan JavaScript "

console.log (star, "\n")


// operator

let x = 30;
let y = 2;

console.log ("Tambah =",x + y)
console.log ("Kali = ", x * y)
console.log ("Kurang =", x - y)
console.log ("Pangkat = ", x ** y)
console.log ("Bagi = ", x / y)
console.log ("Modulus = ", x % y)

// perbandingan dan logika

console.log ("Hasilnya = ", x > y)
console.log ("Hasilnya = ", x < y)
console.log ("Hasilnya = ", x == y)
console.log ("Hasilnya = ", x || y)
console.log ("Hasilnya = ", x != y)


// percabangan 

let nilai = 5

if (nilai < 6) {
    console.log ("Besar")
}

else if (nilai > 6) {
    console.log ("Kecil")
}

else {
    console.log ("Sama saja")
}

// nested

let angka = 6
let bar = true

if (angka < 5) {
    if (angka == true) {
        console.log ("Besar")
    }
    
    else if (angka > 5) {
        console.log ("Kecil")
    }
}

else {
    console.log ("Sama saja")
}

// for 

for (h = 0; h < 3; h++) {
    console.log ("Tes ", h)
}

// while

let u = 0

while (u < 3) {
    console.log ("while ", u)
    u++
}

// do while 

let w = 0

do {
    console.log ("Do ", w)
    w++
} while (w < 3)

// switch 

let an = 3

switch (an) {
    
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
        
    default:
    console.log ("Biasa")
}