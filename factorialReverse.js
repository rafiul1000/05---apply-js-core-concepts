
function factorialReverse (number) {
    let result = 1;
    for(let i = number; i >= 1; i--) {
        result = result * i;
        console.log(i);
    }
    return result;
    
}

const number = 5;
const fact = factorialReverse(number);
console.log('Factorial of my number is: ', fact);
