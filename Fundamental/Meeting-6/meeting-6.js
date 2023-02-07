//Array
let car1 = ["Honda", "Brio", 2022, 220000000, 4 ]

// console.table(car1)
// console.log("Brand",car1[0], "Tahun",car1[2])

//Object key-value pair 
let car2={
    // Properties
    brand:"Honda",
    type:"Brio",
    year:2022,
    price:220000000,
    seats:4,
    color:"white",

    //Method = fungsi didalam object/class. behavior

    introduction(){
        return `Halo aku ${this.type}`
    }
}

car2.year=2021
delete car2.year

// console.log(car2)

// console.log("Tahun", car2.year)
// console.log(car2.introduction())
// console.log(car2["brand"])
// console.log(car2.brand)

let user={}
// console.log(user.address?.street)
if(user.address?.street){
    console.log(user.address.street)
}else{
    console.log("street not found")
}

// Accessing Key
let numbers = [1,4,6,2,3]
numbers.forEach((number,index)=>{
//   console.log("index",  numbers[index])
})

let cat = {
    name:"Koma si jeruk",
    address:"Jakarta"
}

let cat2 = {
    name:"Nona Chemy",
    address:"Jakarta"
}

let keys = Object.keys(cat)

let isSame = true
keys.forEach((key)=>{
    if(cat[key]===cat2[key]){
        // console.log("NAMANYA SAMA")
    }else{
        // console.log("NAMANYA TIDAK SAMA")
        isSame=false
    }
})

if(isSame){
    // console.log("Objectnya sama")
}else{
    // console.log("Object tidak sama")
}

// FOR IN => untuk object
// FOR OF => untuk array
let cat3 = {
    name:"Bintik",
    address:"Jakarta"
}

for(let key in cat3){
    console.log(key)
}

// GETTER AND SETTER
// get: mengambil sesuatu dari object
// set: mengubah atau menge-set sesuatu dari object 

let movie = {
    title:"Inception",
    genre:"Sci-fi",
    year:2023,

    get description(){
        return this.title + this.year
    },
    set description(value){
        // if(value ===){}
        this.genre = value
    }
}

// console.log(movie.description)
movie.description="Test"


// SPREAD OPERATOR
let movie1 = {
    title:"Puss in boot",
    year: 2022
}

let movie2 ={
    title2:"Frozen",
    year2:2013
}


let newObj = {...movie1, ...movie2}

// console.log(newObj)

let order = {
    number:"123",
    description:"Food",
    items:[
        {
        name:"Seblak",
        price: 10000
        },
        {
        name:"Aqua",
        price: 2000
        },
    ],
    totalPrice:12000,
    discount:{
        percentage:10,
        amount: 1200
    }
}

let customer={
    firstName:"Nadhif",
    lastName:"Rafifaiz",
    fullName:"Nadhif Rafifaiz",
    paymentMethod:"CASH",
}

let orderData = {...order,...customer}

// console.log(orderData)

// console.log(orderData.fullName)
// console.log(`=====ORDER ITEM====`)
orderData.items.forEach((item)=>{
    // console.log(item)
    // console.log(`${item.name} harganya ${item.price}`)
})



let {lastName, items} = orderData

// console.log(lastName)
// console.log(items)






class Rumah{
    lantai=1
    luas=100
    warna="putih"

    constructor(lantai,luas,warna){
        this.lantai = lantai
        this.luas = luas
        this.warna = warna
    }
}

let rumah1 = new Rumah(2,400,"Hijau")
let rumah2 = new Rumah(1,800,"Hitam")
// console.log(rumah1)
// console.log(rumah2)





class User{ 
    name = ""
    #age = 0
    scores=[]

    constructor(name="", age=0, scores=[]){
            this.name = name
            this.#age = age
            this.scores=scores

    }

    greeting(){
        return "Hello im" + this.#age 
    }

    getAge(){
        return this.#age
    }
}

let user1 = new User("M. Ichsan", 25, [10,10])

// console.log(user1)
// console.log(user1.getAge())



//INHERITANCE

class Book {
    constructor(title, year,author){
        this.title = title
        this.year = year
        this.author = author
    }

    getBookTitle(){
        return this.title
    }
}


class Encyclopedia extends Book{
    subtotal = 0
    constructor(title, year, author, price, quantity){
        super(title, year, author)
        this.price = price
        this.quantity = quantity
        this.subtotal = price *quantity
    }

    getEncyclopediaTitle(){
        return this.title
    }
    getSubtotal(){
        return this.subtotal
    }
}


let book1 = new Book("AADC", 2009, "Someone")

let encyclopedia1 = new Encyclopedia("Jeruk", 2009, "Someone", 10000, 2)


console.log(book1)
console.log(encyclopedia1.getSubtotal())
