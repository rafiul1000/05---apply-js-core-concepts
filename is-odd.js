function isOdd (number) {
    const reminder = number % 2;
    if(reminder === 1) {
        return true;
    }
    else if(reminder === 3) {
        return true;
    }
    else if(reminder === 5) {
        return true;
    }
    else if(reminder === 7) {
        return true;
    }
    else if(reminder === 9) {
        return true;
    }
    else{
        return false;
    }
}

const myNumber = isOdd(169);
console.log(myNumber);


const herNumber = isOdd(11259);
console.log(herNumber);