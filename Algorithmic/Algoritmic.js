function algorithm (params) {
    let result = []
    for (let i = 1; i <= params; i++) {
        let temp = []
        let int = 0
        let add = i

        while (int !== params) {
            if (int > params) {
                int -= add 
                let index = temp.indexOf(add)
                temp.splice(index, 1)
                add--
            }else {
                temp.push(add)
                int += add
            }
            if (int === params) {
                result.push(temp)
            }
        }
    }
    return result
}

console.log(algorithm(40));