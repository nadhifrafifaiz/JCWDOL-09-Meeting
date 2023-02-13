// BAHASA G
function bahasaG(text) {
    //Mengubah huruf vokal menjadi vokal+g+vokal
    let vowel = ["a", "i", "u", "e", "o"]
    let splittedText = text.split('') //array of character

    let answer = []
    splittedText.forEach((character) => {
        if (vowel.includes(character)) {
            answer.push(`${character}g${character}`)
        } else {
            answer.push(character)
        }
    })
    // console.log(answer.join(''))
}
bahasaG("jalan yang jauh jangan lupa pulang")

//MOST WORD
function mostWord(text) {
    let words = text.split(" ")

    let counts = {} //penyimpanan kata yang uduah dicek
    let keys = [] //berisi kata2 unik

    for (let i = 0; i < words.length; i++) {
        var word = words[i]

        if (counts[word] === undefined) {
            counts[word] = 1
            keys.push(word)
        } else {
            // counts[word] = counts[word] + 1
            counts[word]++
        }
    }

    keys.sort(function compare(a, b) {
        var countA = counts[a]
        var countB = counts[b]
        return countB - countA
    })

    // console.log(`${keys[0]} yang muncul ${counts[keys[0]]}`)


}

mostWord("jalan jalan jangan pulang aku gak mau kamu pulang aku aja yang pulang")


//MOST WORD PRISKA
// const findMostFrequent = (str) => {
//     const strArr = str.split(' ');
//     const map = {};
//     strArr.forEach(word => {
//         if (map.hasOwnProperty(word)) {
//             map[word]++;
//         } else {
//             map[word] = 1;
//         }
//     });
//     const frequencyArr = Object.keys(map).map(key => [key, map[key]]);
//     frequencyArr.sort((a, b) => b[1] - a[1]);
//     return frequencyArr[0]
// };
// console.log(findMostFrequent('kamu dan aku sama sama suka jeruk'));
const findMostFrequent = (str) => {
    const strArr = str.split(' ');
    const map = {};
    strArr.forEach(word => {
        if (map.hasOwnProperty(word)) {
            map[word]++;
        } else {
            map[word] = 1;
        }
    });

    const arrayOfKeys = Object.keys(map) //menghasilkan array of keys
    const frequencyArr = []

    arrayOfKeys.map(key => {
        frequencyArr.push([key, map[key]])
        //[key, map[key]] = ['kamu', 1]
    });
    frequencyArr.sort((a, b) => b[1] - a[1]);
    return frequencyArr[0]
};
// console.log(findMostFrequent('kamu dan aku sama sama suka jeruk'));

//CLASS AND OBJECT
class Product {
    name = ""
    price = 0
    displayPrice
    constructor(name, price) {
        this.name = name
        this.price = price
        this.displayPrice = price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
    }
}

class Transaction {
    total = 0
    amount = 0
    products = []
    constructor(total, products) {
        this.total = total
    }

    setAmount(number) {
        this.amount = this.amount + number
    }

    addToCart(product, quantity) {
        //without spread operator
        // product.qty = quantity
        // this.products.push(product)

        this.products.push({ ...product, qty: quantity }) //object berisi nama dan harga , quantity?
        this.total = this.total + (product.price * quantity)
        this.setAmount(quantity)
    }
    showTotal() {
        let totalDisplayIDR = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.total);
        console.log(`Current total transaction: ${totalDisplayIDR}`
        )
    }

    checkOut() {
        let displayCheckOut = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.total);
        console.log(`RECEIPT`)
        console.log("=============")
        this.products.forEach((product) => {
            console.log(product.name, product.qty, product.displayPrice)
        })
        console.log("=============")
        console.log(`Total ${this.amount} items, Price: ${displayCheckOut}`)
    }
}

// add product to stock

let apple = new Product("Apple", 6000)
let grape = new Product("Grape", 30000)
let orange = new Product("Orange", 8000)

// make new transaction

let transaction1 = new Transaction(0, [])
let transaction2 = new Transaction(0, [])

// add product to transaction
transaction1.addToCart(apple, 2)
transaction1.addToCart(grape, 1)
transaction1.showTotal()
transaction1.checkOut()

transaction2.addToCart(orange, 4)
transaction2.addToCart(apple, 3)
transaction2.showTotal()
transaction2.checkOut()


//Morse code to string text
const morse_Code = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
};

// function decodeMorse(morseText) {
//     // kalimat morse ini, perhuruf dipisahkan spasi 1
//     // perkata dipisahkan spasi 3

//     let splitKata = morseText.split('   ')
//     // console.log(splitKata)

//     splitKata.forEach((kata) => {
//         let splitedHuruf = kata.split(' ')
//         console.log(splitedHuruf)
//     })
// }
const decodeMorse = (morse) => {
    const hasil = [];
    morse.split('   ').forEach((el) => {
        el.split(' ').forEach((code) => {
            for (const [key, value] of Object.entries(morse_Code)) {
                if (value === code) hasil.push(key);
            }
        });
        hasil.push(' ');
    });

    return hasil.join('');
};
console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));



//Pseudocode Palindrom
// Mengecek apakah sebuah kata akan sama jika dibalik => "tebet"= "tebet" ✅
// "soto" =  "otos" ❌

// Understand
// 1. input  = string kata
// 2. output = true or false


//Pseudocode 
/**
 * 1. Membuat variabel untuk menyimpan kata
 * 2. Membuat variabel untuk menampung array of letter
 * 3. split kata inputan .split('')
 * 4. array of letter aku reverse agar mendapatkan array of yang terbalik ==> ["a","k","u"] = ["u", "k", "a"]
 * 5. Buat variabel untuk menyimpan array of letter yang dibalik dan sudah di join ==> "uka"
 * 6. Cek apakah inputan awal samadengan reverseString
 * 7. jika sama maka palindrome
 */

//CODING
let text = "aka"
let splittedText = text.split('')
let reverseSplittedText = splittedText.reverse()
let joinSplit = reverseSplittedText.join('')

if (text === joinSplit) {
    console.log("Palindrome")
} else {
    console.log("Tidak Palindrome")
}

//Challenge #1 = Buatkan pseudocode palindrome lengkap menggunakan pengecekan huruf besar kecil,
//              dan buatkan dalam bentuk function

//Challenge #2 = Buatkan pseudocode untuk bahasa G, dalam function


//Challenge #3 = ubah vowel menjadi huruf i
// Nanti kita cerita tentang hari ini = ninti kiti ciriti tinting hiri ini
// function(text, huruf) = ("nanti", "o") = nonto koto coroto
