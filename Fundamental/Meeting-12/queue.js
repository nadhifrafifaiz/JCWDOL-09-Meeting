class Queue{
    #container = []
    enqueue(element){
        this.#container.push(element)
    }

    dequeue(){
        return this.#container.shift()
    }
    execute = async()=>{
        let i=0
        while(i<this.#container.length){

            let promiseQueue = new Promise((resolve)=>{
                let time = Math.ceil(Math.random()*10) *1000
                setTimeout(()=>{
                    // resolve(this.#container[i])
                    resolve({
                        order: this.#container[i],
                        time
                    })
                }, time)
            })

            let result = await promiseQueue
            console.log(`${result.order} wait time: ${result.time} ms`)
            i++
        }
    }
}


module.exports= Queue
