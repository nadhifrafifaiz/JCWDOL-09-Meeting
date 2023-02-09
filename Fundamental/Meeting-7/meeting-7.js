let obj1 = {
    firstName: "nadhif",
    lastName: "Rafifaiz",
}

let obj2 = {
    firstName: "nadhif",
    lastName: "Rafifaiz",
}
// let valueAsJsonString = JSON.stringify(obj1)
// console.log(valueAsJsonString)

// let backJson = JSON.parse(valueAsJsonString)
// console.log(backJson)


function compareObject(obj1, obj2) {
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    let isSame = true

    if (keys1.length !== keys2.length) {
        isSame = false
    }

    keys1.forEach((key) => {
        console.log("key", key)
        console.log("obj1", obj1[key])
        console.log("obj2", obj2[key])

        if (obj1[key] !== obj2[key]) {
            isSame = false
        }
    })

    return isSame
}
// console.log(
//     compareObject(obj1, obj2)
// )

let objA = {
    name: "dani",
    age: 2
}

let objB = {
    name: "dani",
    age: 2,
    phone: 3
}

function intersection(obj1, obj2) {
    let keys1 = Object.keys(obj1) //["name", "age"]

    let results = {}
    keys1.forEach((key) => {
        // console.log(key)
        // console.log("obj1", obj1[key])
        // console.log("obj2", obj2[key])
        // obj1.name === obj1["name"] ==> name didalam obj1
        if (obj1[key] === obj2[key]) {
            //seharusnya results.name = "dani"
            results[key] = obj1[key]
        }
    })

    console.log(results)
}

// intersection(objA, objB)



let dataStu1 = [
    {
        name: "student 1",
        email: "student1@gmail.com",
    },
    {
        name: "student 2",
        email: "student2@gmail.com",
    },
];
let dataStu2 = [
    {
        name: "student 1",
        email: "student1@gmail.com",
    },
    {
        name: "student 3",
        email: "student3@gmail.com",
    },
];

function myMergeFunction(arr1, arr2) {
    let merged = arr1


    // looping sebanyak item di arr2 (me looping setiap item arr2 "student1" "student3")
    for (let i = 0; i < arr2.length; i++) {
        let dataExist = false
        // looping array merged
        for (let j = 0; j < merged.length; j++) {
            // cek value property name dari 2 object yang dibandingkan

            if (arr2[i].name === merged[j].name) {
                // kalau datanya sama, maka dataExist diubah menjadi true
                dataExist = true;
                // stop looping
                break;
            }
        }
        if (!dataExist) {
            merged.push(arr2[i])
        }
    }

}


// myMergeFunction(dataStu1, dataStu2)



//Switch keys
let list = [
    {
        name: "David",
        age: 20,
    },
    {
        phone: "012314",
        address: "Jakarta",
    },
];

function mySwitchFunction(arr) {
    let res = []
    arr.forEach((item) => {
        let tempSwitch = {}
        // console.log("item", item)


        for (let key in item) {
            tempSwitch[item[key]] = key // "David": name
            console.log("key", key)
        }

        res.push(tempSwitch)
    })

    console.log(res)
}

mySwitchFunction(list)

// Rekursif function  = fungsi yang bisa memanggil dirinya snediri

function countDown(fromNumber) {
    console.log(fromNumber)
    let nextNumber = fromNumber - 1 //9

    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

// countDown(10)



function factorial(fromNumber) {
    if (fromNumber > 1) {
        return fromNumber * factorial(fromNumber - 1) // 5 4 3 2 1 
    } else {
        return 1
    }
}
// 5! = 5 X 4 X 3 X 2 X 1
// 1! = 1

console.log(factorial(5))


