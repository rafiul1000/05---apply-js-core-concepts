/* const myInshes = 12;
const myFeet = myInshes / 12;
console.log('My feet :',myFeet);


const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('Dada feet: ',dadaFeet);


const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log('Dadi Feet :', dadiFeet);

 */


function inchToFeet (inches) {
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log('Dada feet: ', dadaFeet);


const nanaInches = 120;
const nanaFeet = inchToFeet(nanaInches);
console.log('Nana feet: ', nanaFeet);
