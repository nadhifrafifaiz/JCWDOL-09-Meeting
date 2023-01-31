// /** Write a code to find area of rectangle */
// let width = 5
// let length = 10
// let areaRectangle = length * width
// console.log(`Area: ${areaRectangle}`)


// /** Write a code to find area of rectangle */
// width = 10
// length = 20
// let perimeter = 2 * (length + width)
// console.log(`Perimeter: ${perimeter}`)







// /**  Write a code to find diameter, circumference and area of a circle.*/
// let radius = 7
// let diameter
// let circumference
// let areaCircle
// const pi = 3.14

// diameter = 2 * radius
// circumference = 2 * pi * radius
// area = pi * radius * radius
// console.log(`Diameter: ${diameter}`)
// console.log(`Circumference: ${circumference}`)
// console.log(`Area: ${area}`)






// /**  Write a code to find angles of triangle if two angles are given. */
// const triangle = 180
// let firstAngle = 90
// let secondAngle = 45
// let thirdAngle

// thirdAngle = triangle - firstAngle - secondAngle
// console.log(`Sudut Ketiga: ${thirdAngle}`)





/** Write a code to get difference between dates in days. */
// let date1 = new Date('2023-01-01')
// let date2 = new Date('2023-01-20')

// console.log(date1)

// const diffTime = date2 - date1;

// console.log(diffTime + " milliseconds");

// // 1 sekon = 1000ms
// // 1 menit = 60 sekon
// //  1 jam = 60 menit
// //  1 hari = 24 jam

// const diffDays = diffTime / (1000 * 60 * 60 * 24);
// console.log(diffDays + " days");










/** Write a code to convert days to years, months and days. */
let totalDays = 400
let sisaTahun = totalDays % 365
let sisaBulan = sisaTahun % 30

console.log(sisaTahun)
console.log(sisaBulan)

let yearResult = Math.floor(totalDays / 365)
let monthResult = Math.floor(sisaTahun / 30)
let dayResult = sisaBulan

console.log("tahun " + yearResult)
console.log("bulan " + monthResult)
console.log("hari " + dayResult)