// Exercise 1
const createTriangle = (height) => {
    let pattern = ''
    let numberSeries = 1
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
            if (numberSeries < 10) {
                numberSeries = `0${numberSeries}`
            }
            pattern = pattern + numberSeries + " "
            numberSeries++
        }
        pattern = pattern + '\n'
    }
    console.log(pattern)
}
// createTriangle(5)

//Exercise 2
const fizzBuzz = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

// fizzBuzz(30)

// Exercise 3
let getBMI = (weight, height) => {
    let bmi = weight / Math.pow(height, 2)
    switch (Boolean(bmi)) {
        case (bmi < 18.5):
            return "Less Weight"
            break;
        case (bmi > 18.5 && bmi < 25.0):
            return "ideal";
            break;
        case (bmi > 25.0 && bmi < 29.9):
            return "overweight";
            break;
        case (bmi > 30.0 && bmi < 39.9):
            return "very overweight";
            break
        case (bmi > 39.9):
            return "obesity";
            break;
        default:
            return "not within range"
            break;
    }
}
// let getBMI = (numb1, numb2) => {
//     return (numb1 / Math.pow(numb2, 2))
// }
// function bmiCalculator(weight = 0, height = 0) {
//     let bmi = getBMI(weight, height)
//     if (bmi < 18.5) {
//         return "Less Weight"
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         return "Ideal"
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         return "Overweight"
//     } else if (bmi >= 30 && bmi < 39.9) {
//         return "Very Overweight"
//     } else if (bmi >= 39.9) {
//         return 'Obesity'
//     }
// }

console.log(getBMI(90, 1.68))

//Exercise 4
function filterNumber(numbers) {
    return numbers.filter((number) => {
        if (number % 2 === 0) {
            return number
        }
    })
}

let numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(filterNumber(numbers))

// Filter
let scores = [90, 70, 80, 75, 20]
let newScore = scores.filter((score) => {
    if (score <= 70) {
        return score
    }
})
console.log(newScore)

// Map
let curang = scores.map((score) => {
    return score + 30
})

console.log(curang)
