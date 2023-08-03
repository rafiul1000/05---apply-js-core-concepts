// factorial 
//  3! = 3* 2* 1
// 4! = 4* 3* 2* 1
// 5! = 5* 4* 3* 2* 1

function factorial (numbers) {
    let result = 1;
    for(let i = 1; i <= numbers; i ++){
        result = result * i;
    }
    return result;
}
const myNumbers = 6;
const result = factorial(myNumbers);
console.log('My result is: ', result);


const herNumbers = 7;
const herResult = factorial(herNumbers);
console.log('Her result is: ', herResult);