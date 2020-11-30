// Exercicio 1
function sum(a, b) {
    return a + b;
}

let c = sum(15, 10);
console.log(c)

// Exercicio 2

function sub(a, b) {
    return a - b;
}

let c = sub(15, 10);
console.log(c)

// Exercicio 3

function mul(a, b) {
    return a * b;
}

let c = mul(15, 10);
console.log(c)

// Exercicio 4

function div(a, b) {
    return a / b;
}

let c = div(15, 10);
console.log(c)

// Exercicio 5

function res(a, b) {
    return a % b;
}

let c = res(15, 10);
console.log(c)


// Exercicio 6

function sub(a, b) {
    if (a > b){
        console.log(a + " é maior que " + b)
    } else if(b > a){
        console.log(b + " é maior que " + a)
    } else{
        console.log("Números tem o mesmo valor.")
    }
}

let c = sub(15, 10);

// Exercicio 7

function res(a, b, c) {
    if (a > b && a > c){
        console.log(a + " é o maior número.")
    } else if(b > a && b > c) {
        console.log(b + " é o maior número.")
    } else if(c > a && c > b) {
        console.log(c + " é o maior número.")
    } else{
        console.log("Valores são iguais.")
    }
}

let d = res(15, 10, 20);

// Exercicio 8

let a = "oi"

if (a > 0){
    console.log("positive")
} else if(a < 0) {
    console.log("negative")
} else if(a == 0) {
    console.log("zero")
} else{
    console.log("error: expected an integer")
}

// Exercicio 9

function res(a, b, c) {
    if (a + b + c <= 180){
        console.log(true)
    } else{
        console.log(false)
    }
}

let d = res(15, 10, 90);
