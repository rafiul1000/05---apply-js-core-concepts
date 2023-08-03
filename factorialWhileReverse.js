function factorialWhileReverse (number) {
    let i = number;
    let result = 1;
    while( i >= 1 ){
        result = result * i;
        i--;

    }
    return result;
}
const myNumber = 10;
const myResult = factorialWhileReverse(myNumber);
console.log('My result is: ', myResult);