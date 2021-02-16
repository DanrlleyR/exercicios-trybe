let custo = 90
let vendaSemImp = 150
let vendaComImp = vendaSemImp * 1.2
let lucro = vendaComImp - custo

if (custo < 0 || vendaSemImp < 0){
    console.log('Erro: Valores Invalidos')
} else{
    console.log('Lucro do Produto: ' + lucro)
}

