// let i = 0 
// while(i<=50){
//     console.log(Math.ceil(Math.random()*10))
//     i++
// }
const callFirstName = () => {
    return new Promise((resolve, rejected) => {
        let time = Math.ceil(Math.random() *10) * 1000

        setTimeout(() => {
            if(time>10000){
                rejected("Time out...")
            }else{
                resolve({
                    firstName:"John",
                    waitTime: time
                })
            }
        }, time) //setTimeout milisekon 
    })
}
const callLastName = () => {
    return new Promise((resolve, rejected) => {
        let time = Math.ceil(Math.random() *10) * 1000
        setTimeout(() => {
            if(time>10000){
                rejected("Time out...")
            }else{
                resolve({
                    lastName:"Doe",
                    waitTime: time
                })
            }
        }, time)
    })
}

const login = async() => {
    try{
        let dataCallFirstName = await callFirstName()
        let dataCallLastName = await callLastName()

        console.log(dataCallFirstName.waitTime + dataCallLastName.waitTime)
        // console.log(dataCallFirstName.firstName +  dataCallLastName.lastName)
        // console.log("Wait Time", dataCallFirstName.waitTime, dataCallLastName.waitTime)
    }catch(err){
        console.log(err)
    }
}

login()
