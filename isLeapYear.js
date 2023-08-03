/* function isLeapYear (year) {
    const remainder = year % 4;
    if(remainder === 0) {
        return true;
    }
    else{
        return false;
    }
} */


function isLeapYear (year) {
    const remainder = year % 4;
    if(remainder === 0) {
        return true;
    }


    // else{
    //     return false;
    // }

    // return কে এই ভাবেও লেখা যায়।

    return false;

    // return কে এই ভাবেও লেখা যায়।
}

const isMyYearLeapYear = isLeapYear(2000);
console.log('My year is leap year', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1999);
console.log('Her year is leap year', isHerYearLeapYear);