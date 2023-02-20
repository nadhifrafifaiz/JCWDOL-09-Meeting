//WEEKEND CHECKER
const weekendChecker = (data) => {
    let day = new Date(data).getDay()
    if (day === 0 || day === 6) {
        return "Weekend"
    } else {
        return "Weekday"
    }
}
console.log(weekendChecker("2023/02/17"))

//GCD FPB
const gcd = (num1, num2) => {
    let factorA = []
    let factorB = []
    let intersection = []

    let i = 0
    while (i < num1) {
        if (num1 % i === 0) {
            factorA.push(i)
        }
        i++
    }

    let j = 0
    while (j < num2) {
        if (num2 % j === 0) {
            factorB.push(j)
        }
        j++
    }

    console.log(factorA)
    console.log(factorB)

    factorA.forEach((item) => {
        if (factorB.includes(item)) {
            intersection.push(item)
        }
    })
    console.log("intersection", intersection)
    return Math.max(...intersection)


}
// console.log(gcd(500, 650))

const gcd_2 = (num1, num2) => {
    let a = 1;
    let maxnum = 0;
    while (a <= num1 || a < num2) {
        if (num1 % a === 0 && num2 % a === 0) {
            if (a > maxnum) {
                maxnum = a;
            }
        }
        a++;
    }
    return maxnum;
};
// console.log(gcd_2(500, 650));


//LCM KPK
const lcm = (num1, num2) => {
    let limit = num1 * num2 //50
    let multipleA = [num1] // 5 10 15 20 25 30 35 40 45 50
    let multipleB = [num2] //10 20 30 40 50
    let intersection = []

    let i = 0
    do {
        multipleA.push(multipleA[i] + num1)
        i++
    } while (multipleA[i] < limit)

    let j = 0
    do {
        multipleB.push(multipleB[j] + num2)
        j++
    } while (multipleB[j] < limit)

    console.log(multipleA)
    console.log(multipleB)

    multipleA.forEach((item) => {
        if (multipleB.includes(item)) {
            intersection.push(item)
        }
    })
    console.log("intersection", intersection)
    return Math.min(...intersection)
}

console.log(lcm(5, 10))

//Most Common Character
const mostCommon = (string) => {
    let check = {}
    let split = string.split('') // j a l a n
    split.forEach((element) => {
        if (check.hasOwnProperty(element)) {
            check[element] = check[element] + 1
        } else {
            check[element] = 1
        }
    })

    console.log(check)
    console.log(Object.entries(check))
    let sort = Object.entries(check).sort((a, b) => {
        return b[1] - a[1]
    })
    console.log(sort)
    return sort[0][0]
}

// console.log(mostCommon("jalan"))

//SORT STRING
const sortString = (string) => {
    //USING SORT
    // return string.split('').sort().join('')

    let arr = string.split('')
    //j a l a n 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

// console.log(sortString("jalan"))

const checkString = (strings) => {
    return strings.sort()
}

// console.log(checkString(["aka", "aki", "aku", "akut", "akasia"]))


//MINIMUM DATE
const checkMinDate = (dates) => {
    let parsedDate = dates.map((date) => {
        return Date.parse(date)
    })

    console.log(parsedDate)

    let sortedParsedDate = parsedDate.sort((a, b) => {
        return a - b
    })

    console.log(sortedParsedDate)

    return new Date(sortedParsedDate[0]).toLocaleDateString()


}

// console.log(checkMinDate(['2023-02-15', '2023-01-10', '2023-04-01', '2023-11-01']))



//CALCULATE 2 DIMENSIONAL ARRAY
/**
 * arr = [
 * [1,2,3],
 * [4,5,6]
 * ]
 */


function sumTwoDimensionalArray(twoDimensionArr) {
    let result = 0;
    twoDimensionArr.forEach(arr => {
        // [1,2,3] dan [4,5,6]
        arr.forEach(num => {
            //1,2,3 dan 4,5,6
            result += num;
        })
    })

    return result;
}

console.log(sumTwoDimensionalArray([[1, 2, 3], [4, 5, 6]]))


const sum = (arr) => {
    let sum = 0;

    // Finding the sum
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            // Add the element
            sum = sum + arr[i][j];
        }
    }
    return sum;
}
console.log(sum([[1, 2, 3], [4, 5, 6]]))

const sumFunc = (array1, array2) => {
    // let array3 = []
    // for (let i = 0; i < array1.length; i++) {
    //     array3.push(array1[i] + array2[i])
    // }
    let array3 = [...array1, ...array2]
    let sum = 0
    array3.forEach((number) => {
        sum += number
    })
    console.log(`The sum of ${array1} & ${array2} is ${sum}`)
}

sumFunc([1, 2, 3], [4, 5, 6])


let twoDimArr = [
    [1, 2, 3], // 6
    [4, 5, 6] // 15
];

let sum_2 = (arr) => {
    // return twoDimArr.map((val) => {
    //     return val.reduce((a, b) => {
    //         return a + b;
    //     });
    // }).reduce((a, b) => {
    //     return a + b
    // })

    let reduced = twoDimArr.map((val) => {
        return val.reduce((a, b) => {
            return a + b;
        });
    })
    console.log(reduced)

    let total = reduced.reduce((a, b) => {
        return a + b
    })

    return total
};

console.log(sum_2(twoDimArr));


//flower, flint, flank
//fl
