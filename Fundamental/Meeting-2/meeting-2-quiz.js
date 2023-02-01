/**Convert celsius to fahrenheit */
let celsius = 20
let fahrenheit = (celsius * 1.8) + 32
console.log(`${celsius}C = ${fahrenheit}F`)

/**Number is odd or even */
let number = 10
if (number % 2 === 0) {
    console.log("Angka Genap")
} else {
    console.log("Angka Ganjil")
}

for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(`${i} Angka Genap`)
    } else {
        console.log(`${i} Angka Ganjil`)
    }
}

/**Bilangan Prima */
// Bilangan hanya bisa dibagi angka 1 dan angka itu sendiri
/**
 * 2 % 2 = 0
 * 
 * 3 % 2 = 1
 * 3 % 3 = 0
 * 
 * 5 % 2 = 1
 * 5 % 3 = 2
 *  
 */

number = 10
if (number % 2 !== 0 && number % 3 !== 0) {
    console.log(number + " bilangan prima")
} else {
    console.log(number + " bukan bilangan prima")
}

// Prima menggunakan checking setiap angkanya
number = 25
let pembagi = 0
for (let i = number; i >= 0; i--) {
    if (number % i === 0) {
        pembagi = pembagi + 1
    }
}

if (pembagi == 2) {
    console.log(`${number} adalah prima`)
} else {
    console.log(`${number} bukan prima`)
}


/**Write a code to find the sum of the numbers 1 to N */
// 5 = 1+2+3+4+5=15

number = 5
let sumNumber = 0
for (let i = 1; i <= number; i++) {
    sumNumber = sumNumber + i
}

console.log(`nilai dari 5 adalah ${sumNumber}`)


/** Write a code to find factorial of a number. */
number = 5
sumNumber = 1
for (let i = 1; i <= number; i++) {
    sumNumber = sumNumber * i
}
console.log(`nilai faktorial dari 5 adalah ${sumNumber}`)


/**Write a code to print the first N fibonacci numbers. */
// 0 1 1 2 3 5 8 13 21 34
// a b c
// 0 1 0+1

number = 5
let a = 0
let b = 1
let c
let strFibonacci = "0,1"

console.log(a)
console.log(b)
for (let i = 0; i <= number; i++) {
    c = a + b
    a = b
    b = c
    console.log(c)
    strFibonacci = strFibonacci + `,${c}`
}

console.log(strFibonacci)


