/** ARRAY 
 * Array : sebuah tipe data yang dapat meyimpan berbagai macam data didalamnya, baik datanya memiliki tipe data yang sama 
 *  ataupun berbeda
 * Array ditandai dengan bracket [ ]
 * Isi dari array bisa kita identifikasi dengan index
 * 
 * 
*/

// let fruits = ["Apel", "Jeruk", "Mangga"]
// console.table(fruits)

// Why we use array
// Array dapat mempermudah kita dalam mengelola data
// data type object 
let person = {
    "name": "Nadhif",
    "umur": 25,
    "address": "Jakarta"
}
let person1 = {
    "name": "Amadeus",
    "umur": 25,
    "address": "Tangerang"
}

let students = [
    {
        "name": "Nadhif",
        "umur": 25,
        "address": "Jakarta",
        "score": [90, 20, 70]
    },
    {
        "name": "Amadeus",
        "umur": 25,
        "address": "Tangerang",
        "score": [90, 20, 70]
    },
]
console.log(students[0].score[0])

let fruits = ["Apel", "Jeruk", "Mangga"]
console.table(fruits[0])

// ARRAY METHOD
// array.length : menghitung jumlah data didalam array
// console.log('Lenght Fruits:', fruits.length)
// console.log(fruits[fruits.length - 1])

//push, pop, unshift, shift
// array.push('data'): menambahkan data ke akhir array
fruits.push("Pisang")
// console.table(fruits)

// array.pop(): menghapus data terkahir dari array
fruits.pop()
// console.table(fruits)

fruits.unshift("Anggur")
// console.table(fruits)

fruits.shift()
// console.table(fruits)

//Splice : digunakan untuk memanipulasi array
// array.splice(indexAwal, berapaBanyak, dataBaru)

let brands = ["Samsung", "Apple", "Xiaomi", "LG", "Oppo", "Vivo", "Lenovo", "Infinix"]
brands.splice(4, 3)
brands.splice(3, 5, "Nokia")
// console.table(brands)


// Array.includes("data") : mengecek apakah data ada di dalam array ==> true or false
console.log(brands.includes("Apple"))
if (brands.includes("Apple")) {
    console.log("Brand ada")
} else {
    console.log("Brand ga ada")
}

let arr = [1, 2, 3]
// Array.indexOf("data") : mengecek posisi index dari data 
// Truty and falsy (-1)
console.log(arr.indexOf(4))

if (arr.indexOf(4) != -1) {
    console.log(`posisi dari 4 adalah ${arr.indexOf(4)}`)
} else {
    console.log("4 gaada disana")
}


// Arr.reverse() = untuk membalikkan posisi data di array
let toys = ["Woody", "Buzz", "Mr. Potato", "Bo Peep"]
console.log(toys.reverse())

let letters = ["T", "e", "b", "e", "t"]
console.log(letters.reverse().join(""))

// Menggabungkan Array
let avengers = ["Iron man", "Captain America", "Black Widow", "Hawkeye", "Thor", "Hulk"]
let justiceLeague = ["aquaman", "superman", "wonder women", "batman"]
let jagatBumiLangit = ["Gundala", "Gatot Kaca", "Sri Asih"]

// array.concat
let gabungan = avengers.concat(justiceLeague).concat(jagatBumiLangit)
console.log(gabungan)

// spread notation
let featuring = [...avengers, ...justiceLeague, ...jagatBumiLangit, "Black Panther", "Loki"]
console.log(featuring)


// Array 2 dimensi
let example1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

// 1. tolong ambilkan angka 
console.log(example1[1][1])

// 2. tolong ubah 4=14, 5=25, 6=26
// example1[1] = [14, 25, 26]

// example1.splice(1, 1, [14, 25, 26])

// example1[1][0] = 14
// example1[1][1] = 25
// example1[1][2] = 26




// FUNCTION
// Function : sekumpulan program yang dapat dieksekusi untuk menyelesaikan suatu proses


// Beli nasi goreng
// "Buk saya beli nasi goreng" <==function

// code/ isi dari function
// 1. si ibu mengambil nasi
// 2. si ibu menggoreng nasi
// 3. return / hasilnya adalah nasi goreng dikasih kita

// 2 Jenis function : Build-in javascript function dan User defined function

// 3 cara membuat function
/**
 * - Declarative function
 *   function namaFunc(parameter...){
 *      tasks  
 *   }
 * 
 * - Function Expression
 *   let namaFunc = function(parameter...){
 *      tasks  
 *   }
 * 
 * - Arrow Function
 *   let namaFunc = (parameter...)=> {
 *      tasks
 *   }
 */

function nasiGoreng() {
    return "Ini Nasi Gorengnya"
}
console.log(nasiGoreng())

function getDateTomorrow() {
    let now = new Date()
    return now.getDate() + 1
}

console.log(`Besok adalah tanggal ${getDateTomorrow()}`)


function sumNumber(a, b) {
    return a + b
}
console.log(sumNumber(2, 3))


function introduction(name = "", age = 0, address = "") {
    return `My name is ${name}, I'm ${age} years old. I live in ${address}`
}
console.log(introduction("Nadhif", 25, "Jakarta"))



function goodBye(name, address) {
    // if (name == undefined || address == undefined) {
    //     return `No Goodbye`
    // } else {
    //     return `Goodbye ${name}, See you on ${address}`
    // }

    // if (Boolean(name) || Boolean(address)) { // Boolean(name) jika ada isinya akan mengasilkan true
    //     return `Goodbye ${name}, See you on ${address}`
    // } else {
    //     return `No Goodbye`
    // }

    if (name && address) {
        return `Goodbye ${name}, See you on ${address}`
    } else {
        return `No Goodbye`
    }

    // Perbedaan && dan || 
    // && 
    /**
     * true true = true
     * true false = false
     * false true = false
     * false false = false
     *  */

    // ||
    /**
     * true true = true
     * true false = true 
     * false true = true
     * false false = false
     */

}
// console.log(goodBye())


// function goodBye1(name, address) {
//     if (typeof name == "string" && typeof address == "string") {
//         console.log(`Goodbye ${name}, see you on ${address}`)
//     } else {
//         console.log(`No goodbye`)
//     }

// }
// goodBye1("Jason", "Pluit")
// goodBye1(123, 123)

function goodBye1(name, address) {
    if (name === undefined && address === undefined) {
        console.log(`No goodbye`)
    } else {
        console.log(`Goodbye ${name}, see you on ${address}`)
    }
}

goodBye1()


// Buat function yang memiliki parameter angka, dan kita harus menentukan apakah angka tersebut prima atau tidak
const checkPrime = (number) => {
    let isPrime = 0
    if (number === 1) {
        return "is Prime"
    }
    for (i = 0; i <= number; i++) {
        if (number % i === 0) {
            isPrime = isPrime + 1
        }
    }
    if (isPrime === 2) {
        return "is Prime"
    } else {
        return "is not prime"
    }
}

console.log(checkPrime(12))
console.log(checkPrime(25))
console.log(checkPrime(77))


// Buat function yang memiliki parameter array of angka, dan kita harus mengembalikan array baru yang hanya berisi bilangan
// genap

const checkEven = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

console.log(checkEven([12, 31, 242, 3, 4, 5, 6]))



// For Of Loop
// For Each

let numbers = [2, 3, 4, 1, 3, 4]
for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(number, "ini genap")
    } else {
        console.log(number, "ini ganjil")
    }
}

numbers.forEach((number) => {
    console.log(number)
})









