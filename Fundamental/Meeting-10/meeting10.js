//Exercise ala2
let newArr = []
newArr[99] = "hello"

// console.log(newArr)
// console.log(newArr.length)

let complicatedData = [12, "Juki",
    {
        name: "John",
        age: 20,
        scores: [20, 100, 50,
            { mid: 100, final: 80 }
        ]
    }
    ,
    [1, 2, [3, 4]],
    {
        "score": [500, "700", 800]
    }
]

/**
 * 0 = 12
 * 1 ="Juki"
 * 2 = {
        name: "John",
        age: 20,
        scores: [20, 100, 50,
            { mid: 100, final: 80 }
        ]
    }
    3 = [1, 2, [3, 4]]
    4 = {
        "score": [500, "700", 800]
    }
 */

//tampilkan data mid:100
// console.log(complicatedData[2].scores[3].mid)
// console.log(complicatedData[2]["scores"][3]["mid"])

let newObj = {
    name: "John",
    age: 20,
    scores: [20, 100, 50,
        { mid: 100, final: 80 }
    ]
}

// console.log(newObj.scores[3].mid)
// console.log(newObj["scores"][3]["mid"])


let objStudent = {
    name: "Jaelani",
    age: 10,
    address: "Tangerang",
    id: "123456",
}

// let key = "age"

// console.log(objStudent.key)
// console.log(objStudent[key])

let keysObjStudent = Object.keys(objStudent)
// console.log(keysObjStudent)
keysObjStudent.forEach((key) => {
    // console.log(key, objStudent[key])
})

//buat sebuah object
let objSecondStudent = {
    name: "Jaelani",
    age: 10,
    address: "Tangerang",
    id: "123456",
}

//Tampilkan keys
//name
//age
//address
//id
let keysObjSecondStudent = Object.keys(objSecondStudent)
for (let i = 0; i < keysObjSecondStudent.length; i++) {
    // console.log(keysObjSecondStudent[i])
}

//Ada berapa banyak data didalam objectnya
// Banyaknya data adalah 4
// console.log("Banyak data didalam obj", keysObjSecondStudent.length)


// Ubah data salah satu isi objectnya
// name = jaelani ==> ubah menjadi "zul"
objSecondStudent["name"] = "Zul"
// console.log(objSecondStudent)


let employee = {
    name: "Jaelani",
    age: 30,
    address: "Tangerang",
    id: "123456",
    division: "HR",
    subordinates: [
        {
            name: "Kemal",
            age: 23,
            address: "Jakarta",
            id: "123456",
            status: "Internship"
        },
        {
            name: "Putri",
            age: 25,
            address: "Jakarta",
            id: "123456",
            status: "Full Time"
        }
    ],
    status: "Full Time",
    insurance: ["AXA", "AIA", "BPJS"],
    startedDate: "2013-06-01",
}

// employee =  data employee

function displayDataPribadiEmployee(data) {
    const { name, address, age } = data
    // console.log(address)
    // console.log(name)
    // console.log(age)
}

displayDataPribadiEmployee(employee)

let string = "Z"

// console.log(string.charCodeAt(0))


//EXERCISE 1 : Excel sheet
function stringToNumber(string) {
    let result = 0
    for (let i = 0; i < string.length; i++) {
        result = result * 26
        result = result + (string[i].charCodeAt() - 'A'.charCodeAt() + 1)
    }
    return result
}

// console.log(stringToNumber("AA"))



//Exercise 2: sendirian
function uniqueValue(numbers) {
    let uniqueData = new Set(numbers)

    let single
    uniqueData.forEach((data) => {
        let duplicate = 0
        numbers.forEach((number) => {
            if (number == data) {
                duplicate++
            }
        })

        if (duplicate == 1) {
            single = data
        }

    })

    return single

}

// console.log(

//     uniqueValue([1, 2, 4, 4, 1, 2, 5, 6, 7, 7, 6, 8, 8])
// )


//Exercise 3: anagram
function checkAnagram(string1, string2) {
    const temp1 = string1.split('') // a n a g r a m == sort a a a g n m r
    const temp2 = string2.split('') // n a g a r a m == sort a a a g n m r

    if (JSON.stringify(temp1.sort()) === JSON.stringify(temp2.sort())) {
        return true
    } else {
        return false
    }
    // if (temp1.sort().join('') === temp2.sort().join('')) {
    //     return true
    // } else {
    //     return false
    // }
}

console.log(checkAnagram("anagram", "nagaram"))


//PR : Breakout room zoom
//Room : 5
//User: 10
// room will be consist 2 people
//Room: 3
//User:10
//room will be consist 3-4 people


