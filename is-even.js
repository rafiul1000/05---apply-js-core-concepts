function isEven (number) {
    const reminder = number % 2;
    if(reminder === 0) {
        return true;
    }
    else{
        return false;
    }
}

const myNumber = isEven(100);
console.log(myNumber);

const herNumber = isEven(105);
console.log(herNumber);