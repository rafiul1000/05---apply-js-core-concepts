function miterToCentimeterConverter (miters) {
    const centimeter = miters * 100;
    return centimeter;
}

const myMiter = 1;
const centimeter = miterToCentimeterConverter(myMiter);
console.log('My centimeter :', centimeter);