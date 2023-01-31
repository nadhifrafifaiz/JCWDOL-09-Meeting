//Single Comment
// This is where i print hello world
console.log("Hello World")
console.log("Hello Juga")

/**
 * Login Page
 * This login have 2 functionality
 * For admin and user
 */

console.log("Hello comment")



/*-----------------VARIABLE---------------*/
// var, let, const
// letters, digit, symbol "$" / "_"

var _name = "Nadhif"
_name = "Dafa"
var fullName = "Nadhif Rafifaiz"

console.log("ini nama panjang ", fullName)
console.log("Fullname: " + fullName)

/**
 * var let const
 * var : Redeclare, Reassign
 * let: Non-redeclare, Reassign
 * const: Non-redeclare, Non-reassign
 */

//Redeclare ✅
var myName = "Jake"
var myName = "Not Jake"

//Redeclare❌
let myAddress = "Jakarta"
// let myAddress = "Depok"

//Redeclare❌
const myNumber = 9
// const myNumber = 10


//Reassign ✅
var age = 25
age = 30

let myAge = 25
myAge = 30

//Reassign❌
const myHeight = 170
// myHeight = 180


/*-----------------DATA TYPE---------------*/
let message = "This is 'javascript'" //String
let singleString = 'This is single string'
let backTickString = `This is backtick`

console.log('double', message)
console.log('single', singleString)
console.log('backtick', backTickString)

let count = 1 //Integer
let berat = 15.5//Float Decimal
console.log('count', count)
console.log('berat', berat)

//boolean
let isTrue = true
let isFalse = false
console.log('IsTrue', isTrue)

// STRING METHOD
var myString = "Hello, Purwadhika Student"
console.log('length', myString.length)

console.log('upper', myString.toUpperCase())
console.log('lower', myString.toLowerCase())

console.log('split', myString.split(' '))

console.log('posisi', myString.indexOf('Purwadhika'))

console.log('slice', myString.slice(7, 25))


// NUMBER
let firstNumber = 10
let secondNumber = 2

let penjumlahan = firstNumber + secondNumber
console.log("Jumlah", penjumlahan)

console.log("kurang", firstNumber - secondNumber)
console.log("kali", firstNumber * secondNumber)
console.log("bagi", firstNumber / secondNumber)
console.log("sisa bagi", firstNumber % secondNumber)

let days = 1000
console.log("tahun", Math.floor(days / 365))
console.log("sisa hari", days % 365)

// DATE TIME
// const now = new Date()

// console.log("Now", now)
// console.log("Year", now.getFullYear())
// console.log("Hour", now.getHours())
// console.log("Minute", now.getMinutes())

// const jan1_1970 = new Date(0)
// console.log("first", jan1_1970)

// console.log("Milisekon", Date.parse(now))

// console.log(new Date('2023-1-30'))

let now = new Date()

console.log(now.getHours())
console.log(now.getMinutes())


// Increment & Decrement
let hitung = 0
hitung = hitung + 1
hitung = hitung + 1
// hitung = 0 + 1
// hitung = 1 + 1  

hitung++

console.log('Hitung', hitung)

// COMPARISON

let a = 10
let b = 12

console.log("equal", a == b)
console.log("not equal", a != b)

console.log(">", a > b)



// Template Literal
// let backTickString = `This is backtick`

var kotaA = "Jakartaasdasdasdasd"
var kotaB = "Ciputat"
var jarak = 500

console.log("Jarak dari Jakarta ke Ciputat itu " + 500)

console.log(`Jarak dari ${kotaA} ke ${kotaB} itu ${jarak}`)
