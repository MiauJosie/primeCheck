num = primeCheck(window.prompt('primeCheck'))

function primeCheck(num) {
    /*esse bloco condicional retorna uma mesangem de
    invalidez se o valor inserido não for um número.*/
    if(Number(num).toString() == "NaN") {
        document.write(`O valor informado não é um número válido`)
        return;
    }


    let prime = true //valor padrão

    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for
    for(let divisor = 2; divisor < num; divisor++) {
        /*se o resto da divisão entre o num e o divisor
        for igual a zero, significa que o número não é primo*/
        if(num % divisor === 0) {
            prime = false
            break
        }
    }
    if(prime && num != 1) {
        document.write(`O número ${num} é primo`)
    }
    else{
        document.write(`O número ${num} não é primo`)
    }
}