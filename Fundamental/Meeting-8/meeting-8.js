//For in, forEach, for loop, for of

for (let i = 0; i < 10; i++) {
    // console.log(i)
    // newArr[i]
}

//For each hanya bisa digunakan untuk array
let newArr = ["ayam", "sapi", "kambing"]
let newObj = { name: "ayam", age: 2 }

newArr.forEach((item, index) => {
    // console.log(item, index)
})
for (let item of newArr) {
    // console.log(item)
}

//for in untuk object
for (let key in newObj) {
    // console.log(newObj[key])
}


// console.log(Object.keys(newObj))

/**
 * Book {
  productName: 'Shopaholic',
  price: 50000,
  quantity: 2,
  subtotal: 100000,
  author: 'Sophie'
}
 */

/**
 * STACK
 * LAST IN FIRST OUT
 *  
 */
class Stack {
    #maxSize;
    #container = [];

    constructor(maxSize = 10) {
        this.#maxSize = maxSize
    }

    #isFull() {
        return this.#container.length >= this.#maxSize
    }
    #isEmpty() {
        return this.#container.length == 0
    }

    push(element) {
        if (this.#isFull()) {
            console.log("Stack Full")
            return
        }
        this.#container.push(element)
    }
    pop() {
        if (this.#isEmpty()) {
            console.log("Stack Empty")
            return
        }
        this.#container.pop()
    }
    getElements() {
        return this.#container
    }
}

const stack = new Stack()
// stack.push("Browser Page 1")
// stack.push("Browser Page 2")
// stack.push("Browser Page 3")
// console.log(stack.getElements())
// stack.pop()
// console.log(stack.getElements())

// console.log(stack)

/**
 * QUEUE
 * FIRST IN FIRST OUT
 */

class Queue {
    #container = []
    enqueue(element) {
        this.#container.push(element)
    }
    dequeue() {
        return this.#container.shift()
    }

    getElements() {
        return this.#container
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.getElements())

queue.dequeue()
queue.dequeue()
console.log(queue.getElements())




/**
 * ARRAY = Ordered List of data, duplicates allow
 * SET = Unordered List of data, no duplicates
 * OBJECT = Key values pair of unordered data
 * MAP = key value pairs of ordered iterable data
 */

//ordered
let newArray = [1, 2, 3, 4]
// 1 index 0
// 2 index 1

let newObject = {}
const ids = new Set([])
ids.add("id-001")
ids.add("id-002")
ids.add("id-003")
ids.add({ name: "nadhif" })
ids.add({ name: "nadhif" })
// ids.add("id-003")
// ids.add("id-001")

// console.log(ids.delete("id-001"))

for (item of ids) {
    // console.log(item)
}

// console.log(ids)


//MAP
let obj1 = { name: "nadhif" }

const resultData = new Map()
resultData.set("name", "Lia")
resultData.set("age", { age: 10 })
resultData.delete('name')
console.log(resultData)




// Bahasa G
// Apa itu? || Agapaga igitugu?
// Kerja iya? || kergerjaga igiyaga
// Programming || progogragammiging
// Masih kurang tepat || magasigihh kuguragangng tegepagatt

// setiap kita bertemu huruf vokal tambahkan g+huruf vokal tersebut

// BAHASA G
/**
 * input/ parameter = "aku dan dia"
 *
 * [a k u  d a n  d i a]
 *
 * looping perhuruf
 * lalu cek kalo ada vokal a/A i/I u/U e/E o/O
 * kalo ada tambahkan vokal+g+vokal
 * aga k ugu  d aga n  d  igi  aga
 *
 *
 */

// MOST WORDS
/**
 * input/parameter = "aku dia mereka aku juga mereka yang melihat mereka"
 * 
 * split katanya perkata
 * ["aku" "dia" "mereka" "aku" "juga" "mereka" "yang" "melihat" "mereka"]
 * looping data tersebut lalu cek apakan katanya itu muncul lebih banyak dari kata lainnya
 * 
 * ["aku", "dia", "mereka", "juga", "yang", "melihat"]
 * let tempMostWord = "mereka"
 * 
 */

