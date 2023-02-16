const Queue = require('./queue')

const queue = new Queue

queue.enqueue("Order 1")
queue.enqueue("Order 2")
queue.enqueue("Order 3")
queue.enqueue("Order 4")
queue.enqueue("Order 5")
queue.enqueue("Order 6")

// const jalankanOrder =async=>(){

// }

async function jalankanOrder(){
    await queue.execute()
    console.log("Order Finished") //Notification
} 

jalankanOrder()

