function getFunctional (number) {
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
        console.log(i, factorial);

    }
    return factorial
}

const myNumberIs = 21;
const factorial = getFunctional(myNumberIs);
console.log('Factorial of 8 is ', factorial);