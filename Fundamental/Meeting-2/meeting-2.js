// Conditional Statement
// IF Statement
// Else Statement
// If Else Statement


// IF Statement
let age = 17

if (age >= 17) {
    console.log(`Anda boleh lanjut karena anda berumur ${age} tahun`)
}

if (age < 17) {
    console.log("anda belum cukup umur")
}

// Else Statement
let tinggi = 160
if (tinggi >= 175) {
    console.log("Anda lolos")
} else {
    console.log("Anda tidak lolos")
}

// Else If Statement
let nilai = 10

if (nilai > 90) {
    console.log("A")
} else if (nilai > 70) {
    console.log("B")
} else if (nilai > 50) {
    console.log("C")
} else {
    console.log("E")
}

// Example
let username = "nadhif123"
if (username == "nadhif123") {
    console.log("Account verified")
} else {
    console.log("wrong username")
}

// SWTICH CASE
let score = 80
switch (score) {
    case 90:
        console.log("nilai A")
        break;
    case 80:
        console.log("nilai B")
        break;
    case 70:
        console.log("nilai C")
        break;
    default:
        console.log("Tidak masuk")
}

// Truthy and Falsy value
const isTrue = true
const isFalse = false

console.log(Boolean("nadhif"))
console.log(Boolean(1))

console.log(Boolean(0))
console.log(Boolean(""))

let umur = 17
if (umur - 17) {
    console.log("diatas 17 tahun")
} else {
    console.log("dibawah 17 tahun")
}

console.log(Boolean(umur - 17))

// Ternary Operator
let str = "Purwadhika"
console.log(str.includes('Purwa') ? 'Ada si kata Purwa' : 'Gaada si kata Purwa')

console.log(str === 'Purwadhika' ? 'Ada si kata Purwa' : 'Gaada si kata Purwa')

// == vs ===
let jarak = 150


if (jarak === 150) {
    console.log(`Jaraknya ${jarak}`)
} else {
    console.log(`Jaraknya tidak ${jarak}`)
}


// LOOP STATEMENT
// 1. For Loop
// 2. While Loop
// 3. Do While Loop

// Ketika i kurang 10, maka lakukan console.log

let i = 0
while (i < 0) {
    console.log("Nilai I", i)
    i++
}

// Lakukan konsole log, cek ketika J kurang 10

let j = 0
do {
    j++
    console.log("DO NIlai J", j)
} while (j < 10)


//FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log("nilai i:", i)
}

// Tampilkan bilangan genap aja
// 1 - 10
// tampilkan angka 1-10
// genap = bilangan yang habis dibagi 2
// jika dia habis dibagi 2 maka tampilkan dilayar

// equal == ===
// not equal != !==
// for (let i = 1; i =< 1000; i++) {
//     console.log("Hello")
// }
