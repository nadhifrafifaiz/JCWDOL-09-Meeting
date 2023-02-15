// //CALLBACK = memanggil fungsi didalam fungsi jika sudah selesai
// // example : map(), forEach(), filter(()=>{})
// const callFirstName = (callback) => {
//     setTimeout(() => {
//         callback("nadhif")
//     }, 3000)
// }

// const login = () => {
//     callFirstName((result) => {
//         const firstName = result
//         const lastName = "Rafifaiz"
//         const name = firstName + lastName
//         console.log(name)
//     })
//     // callFirstName((result) => { })

//     // callFirstName(function (result) {

//     // })
// }

// login()



// //CALLBACK HELL : The reason why we need to use promise
// const callFirstName = (callback) => {
//     setTimeout(() => {
//         callback("Nadhif")
//     }, 1000)
// }

// const callLastName = (callback) => {
//     setTimeout(() => {
//         callback("Rafifaiz")
//     }, 2000)
// }

// const login = () => {
//     callFirstName((resultFirstName) => {
//         callLastName((resultLastName) => {
//             console.log(resultFirstName + resultLastName)
//         })
//     })
// }

// login()


//PROMISE
// resolve & rejected = resolve ketika sukses, rejected error atau proses gagal
// const callFirstName = () => {
//     return new Promise((resolve, rejected) => {
//         setTimeout(() => {
//             resolve("Nadhif")
//         }, 2000)
//     })
// }
// const login = () => {
//     callFirstName().then(result => {
//         console.log(result)
//     })
// }
// login()

// const statusDownload = () => {
//     return new Promise((resolve, rejected) => {
//         let download = 9
//         if (download === 100) {
//             resolve("Success")
//         } else {
//             rejected("Error download")
//         }
//     })
// }

// const checkDownload = () => {
//     statusDownload().then(result => {
//         console.log(result)
//     }).catch(error => {
//         console.log(error)
//     })
// }
// checkDownload()


// //PROMISE ALL
// const callFirstName = () => {
//     return new Promise((resolve, rejected) => {
//         setTimeout(() => {
//             resolve("Nadhif")
//         }, 2000)
//     })
// }

// const callLastName = () => {
//     return new Promise((resolve, rejected) => {
//         setTimeout(() => {
//             let number = 1
//             if (number >= 1) {
//                 resolve("Rafifaiz")
//             } else {
//                 rejected("Error load last name...")
//             }
//         }, 1000)
//     })
// }

// const login = () => {
//     Promise.all([callFirstName(), callLastName()])
//         .then(([resultFirstName, resultLastName]) => {
//             console.log(resultFirstName + resultLastName)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }
// login()


// ASYNC AWAIT
const callFirstName = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            let number = 1
            if (number > 1) {
                resolve("Nadhif")
            } else {
                rejected({ errorMessage: "Error first name not found", code: 402 })
            }
        }, 2000)
    })
}

const callLastName = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            let number = 1
            if (number > 1) {
                resolve("Rafifaiz")
            } else {
                rejected({ errorMessage: "Error las name not found", code: 402 })
            }
        }, 1000)
    })
}

const login = async () => {
    try {
        let lastName = await callLastName() // berhasil atau gagal
        let firstName = await callFirstName()
        console.log(firstName + lastName)

    } catch (error) {
        console.log(error)
    }
}

login()

