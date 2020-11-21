  let fibonacci = {
    [Symbol.iterator]() {
        let previousNo = 0, currentNo = 1
        return {
           next () {
               [ previousNo, currentNo ] = [ currentNo, previousNo + currentNo ]
               return { done: false, value: currentNo }
           }
        }
    }
}

for (let n of fibonacci) {
    if (n > 1000)
        break
    console.log(n)
}