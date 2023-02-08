let dbStudent = [
    {
        name: "Nadhif",
        email: "andhif@mail.com",
        age: "1999-04-24",
        score: 70
    },
    {
        name: "Adip",
        email: "adip@mail.com",
        age: "1998-11-15",
        score: 20
    },
    {
        name: "Franka",
        email: "fran@mail.com",
        age: "2001-04-28",
        score: 90
    }
]

function calculateStudent(students) {
    //TODO: Return age (min, max, average)
    //TODO: Return score (min, max, average)

    //Sort the array, so the object start from the lowest (ASC) for both score and age
    //sorting [4,2,1,5,6] 
    /**
     * object:{
     * name:"asdasd",
     * age:12
     * }
     * 
     * object.name
     * object["name"]
     */

    // sorting score
    students.sort(function (a, b) {
        return a.score - b.score
    })

    let totalScore = 0
    students.forEach((student) => {
        totalScore = totalScore + student.score
    })

    let score = {
        min: students[0],
        max: students[students.length - 1],
        average: totalScore / students.length
    }


    //sorting age
    students.sort(function (a, b) {
        a = new Date(a.age)
        b = new Date(b.age)
        return b - a
    })

    let totalAge = 0
    students.forEach((student) => {
        // console.log("year now", new Date().getFullYear())
        // console.log("dob year", new Date(student.age).getFullYear())
        totalAge = totalAge + new Date().getFullYear() - new Date(student.age).getFullYear()
    })


    let age = {
        min: students[0],
        max: students[students.length - 1],
        average: totalAge / students.length
    }

    return { ...score, ...age }
}

// console.log(
//     calculateStudent(dbStudent)
// )


//Exercise 2
//Create class for Product

class Product {
    name = ""
    price = 0
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class Transaction {
    total = 0
    products = []
    constructor(total, products) {
        this.total = total
        this.products = products
    }

    addToCart(product, quantity) {
        this.products.push(product)
        this.total = this.total + product.price * quantity
    }

    showTotal() {
        // let totalDisplayIDR = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.total);
        return this.total.toLocaleString('id-ID', {
            currency: "IDR",
            style: "currency"
        });
    }

    checkOut() {
        console.log("Harga", this.total)
        console.log("======================================")
        this.products.forEach((product) => {
            console.log(product.name, product.price)
        })
    }


}


let apel = new Product("Apel", 1000)
let jeruk = new Product("Jeruk", 2000)

let transaction1 = new Transaction(0, [])
let transaction2 = new Transaction(0, [])

transaction1.addToCart(apel, 10)
transaction1.addToCart(jeruk, 5)

console.log(
    "total transaksi", transaction1.showTotal()
)

// transaction1.checkOut()

// transaction2.checkOut()



// console.log("apel", apel)
// console.log("jeruk", jeruk)
// console.log("transaction1", transaction1)


let obj = {
    name: "aji",
    age: 20,
}

let newKey = "name"
console.log(
    obj[newKey]
    // obj.newKey
)
