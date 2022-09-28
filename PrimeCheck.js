const num = Number(window.prompt('primeCheck'))

function primeCheck(num) {
    if(Number.isNaN(num)) {
        alert("The inserted value is not a valid number")
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
        document.write(`${num} is prime`)
        
    } else {
        document.write(`${num} is not prime`)
    }
}

primeCheck(num)