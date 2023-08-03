// 1 + 2 + 3 + 4 + 5

/* let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
    console.log(i, sum);
} */


/* let sum = 0;
for(let i = 1; i <= 5; i ++){
    sum = sum + i;
    console.log(i, sum);
} */


// 1+2+3+4+5+6+7+8+......+100 = ?

/* let sum = 0;
for(let i = 0; i <= 100; i ++){
    sum = sum + i;
    console.log(i, sum);
} */

function sumOfNumbers (number) {
    let sum = 0;
    for(let i = 0; i <= number; i ++){
        sum = sum + i;
    console.log(i, sum);
  }

  return sum;
}

let mySum = 10;
let totalSum = sumOfNumbers(mySum);
console.log('My Total sum: ', totalSum);


let herSum = 20;
let herTotalSum = sumOfNumbers(herSum);
console.log('Her Total sum: ', herTotalSum);