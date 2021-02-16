let n = 5
let t = ''
let espaco = ''


for(let i2 = 0; i2 < n; i2 += 1){
    espaco += ' '
}

for(let i = 0; i < n; i += 1){
    t += '*'
    espaco = i * ' '
    console.log(espaco + t)
}


