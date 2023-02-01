/**
 * Write a code to display the multiplication table of a given integer.
 * number = 9
 * 9X1 = 9
 * 9X2 = 18
 * 9X3
 * 9X4
 * 9X5
 * 9X6
 * 9X7
 * 9X8
 * 9X9
 * 9X10
 */

let number = 4
let i = 1
while (i <= 10) {
    // console.log(`${number} X ${i} = ${number * i}`)
    i = i + 1
}

for (let i = 1; i <= 10; i++) {
    // console.log(`${number} X ${i} = ${number * i}`)
}

/**Write a code to check whether a string is a palindrome or not. */
/**
 * Ex: 
 * Palindrome = adalah kata yang jika dibalik hasilnya tetap sama
 * tebet = tebet
 * kodok = kodok
 * katak = katak
 * nadhif = fihdan ❌
 * purwadhika = akihdawrup ❌
 */
// hint: javascript string method 

let nama = "Tebet" //String
// P u r w a d h i k a
let splittedNama = nama.split("") //Array 
// [
//     'P', 'u', 'r', 'w',
//     'a', 'd', 'h', 'i',
//     'k', 'a'
//   ]
let reverseSplittedNama = splittedNama.reverse()
// [
//   'a', 'k', 'i', 'h',
//   'd', 'a', 'w', 'r',
//   'u', 'P'
// ]
let reverseNama = reverseSplittedNama.join("")
console.log("nama", nama)
console.log("nama dibalik", reverseNama)

if (nama.toLowerCase() === reverseNama.toLowerCase()) {
    console.log("Palindrome")
} else {
    console.log("Tidak Palindrome")
}


nama = "batuk"
let namaDibalik = ""

//  b a t u k 
//  0 1 2 3 4 

for (let i = nama.length - 1; i >= 0; i--) {
    console.log(nama[i])
    namaDibalik = namaDibalik + nama[i]
}

console.log(namaDibalik)


/**Write a code to convert centimeter to kilometer */
let centimeter = 5300
console.log(`${centimeter}CM = ${centimeter / 100000}KM`)



/**Write a code to format number as currency (IDR) */
let amount = 12000000
console.log("currency", amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR"
}))

/**Write a code to remove the first occurrence of a given “search string” from a string */
// let string = "Hello World"
// let searchString = "ello"
// H World

let string = "Hello World"
let searchString = "l"

if (string.includes(searchString)) {
    console.log(string.replace(/l/g, "L"))
} else {
    console.log("Kata tidak ditemukan")
}


/**Write a code to capitalize the first letter of each word in a string */
// "hello World" ==> "Hello World"
// "aku programmer" ==> "Aku Programmer"

string = "Hello world, let me shout"
let splitString = string.split(" ")
let finalString = ""

for (let i = 0; i <= splitString.length - 1; i++) {
    console.log(splitString[i])
    finalString = finalString + splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1) + " "
}
console.log(finalString)










