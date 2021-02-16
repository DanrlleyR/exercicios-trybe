let salarioBruto = 3000
let inss
let ir

if (salarioBruto >= 5189.82){
    inss = 570.88
} else if(salarioBruto >= 2594.93){
    inss = salarioBruto * 0.11
} else if(salarioBruto >= 1556.95){
    inss = salarioBruto * 0.09
} else if(salarioBruto >= 1045){
    inss = salarioBruto * 0.08
} else{
}

let salarioBase = salarioBruto - inss

if (salarioBase >= 4664.68){
    ir = (salarioBase * 0.275) - 869.36
} else if(salarioBase >= 3751.06){
    ir = (salarioBase * 0.225) - 636.13
} else if(salarioBase >= 2826.66){
    ir = (salarioBase * 0.15) - 354.80
} else if(salarioBase >= 1903.99){
    ir = (salarioBase * 0.075) - 142.80
} else{
}

let salarioLiquido = salarioBase - ir
console.log(salarioLiquido)
