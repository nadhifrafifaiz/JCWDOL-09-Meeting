const calculateNumber = (numbers) => {
    //sort method
    let newArr = numbers.sort(function (a, b) {
        return a - b
    })

    let sum = 0
    newArr.forEach((number) => {
        sum = sum + number
    })


    console.log(`Min ${newArr[0]},max ${newArr[newArr.length - 1]}, average ${sum / newArr.length}`)

    //no sort
    //[5, 67, 12, 71, 3]
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
            }
        }
    }

}

// calculateNumber([2, 67, 12, 71, 3])


//Exercise 2
// Write a function that takes an array of words and returns a string by concatenating the words in 
// the array, separated by commas and - the last word - by an 'and'.
// ["fadhli", "adip", "jeremy"]
// fadhli, adip, dan jeremy


const concateArr = (names) => {
    // ["John", "Karen", "Alex"]
    // Dijadiin string "John, Karen, dan Alex"
    const lastWord = names[names.length - 1]

    names.pop()
    let string = names.join(', ')

    console.log(string + ' dan ' + lastWord)

}

// concateArr(["John", "Karen", "Alex"])


function split(sentence) {
    let splitted = sentence.split(" ")
    console.log(splitted)
}

// split("jalan jalan kemana")


// arr1 = [1,2,3]
// arr2 = [3,2,1]
// result [4,4,4]


// Exercise 4
const calculateArray = (arr1, arr2) => {
    return arr1.map((number, index) => {
        return number + arr2[index]
    })

}
// console.log(calculateArray([1, 2, 3], [4, 5, 6]))


// PARAMETER IN MAP AND FILTER
let integers = [4, 5, 8, 2, 4]
integers.map((currenValue, index) => {
    console.log("current value", currenValue, "index", index, "arr", integers)
})


// Exercise 5
function addItem(arr, element) {
    //check if element exist inside arr
    if (!arr.includes(element)) {
        arr.push(element)
        console.log(arr)
    } else {
        console.log("sepertinya sudah ada")
    }

}

addItem(["jono", "joni", "jona"], "jono")