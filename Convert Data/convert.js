const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

function convert (params) {
    let h = []
    let d = []

    for (let keys in params[0]){
        h.push(keys)
    } 

    for (let i = 0; i < params.length; i++) {
        let temp = []
        for (let keys in params[i]) temp.push(params[i][keys])
        d.push(temp)
    }

    return {
        "h": h,
        "d": d
    }
}

console.log(convert(data))