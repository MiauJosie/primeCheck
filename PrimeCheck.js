const num = Number(window.prompt('primeCheck'))

function primeCheck(num) {
    if(Number.isNaN(num)) {
        alert("O valor inserido não é um número válido")
        throw new Error()
    }

    let primo = true

    for(let divisor = 2; divisor < num; divisor++) {
        if(num % divisor === 0) {
            primo = false;
            break
        }
    }

    if(primo === true && num !== 1) {
        document.write(`${num} É um número primo`)
        
    } else {
        document.write(`${num} Não é um número primo`)
    }
}

primeCheck(num)