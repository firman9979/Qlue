function prime(params) {
    
    let result = []
    for (let i = 2; i < params; i++) {
        let check = 0
        for (let j = 1; j <= i; j++) {
            if(i%j===0){
                check++
            }
        }
        if(check <=2){
            result.push(i)
        }  
    }

    return result
}

console.log(prime(13));