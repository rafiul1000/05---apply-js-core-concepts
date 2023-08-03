// 1. variable
var myName = 'Khan';

// math operation : +, -, *, /
// Short hand : +=, -=, *=, /=
// ++, --

// 2. array
var friends = ['Abul', 'Babul', 'Cabul', 'Dabul', 'Ebul'];

var thirdFriends = friends[2];
friends[3] = 'Dambool';


// 3. conditionals

// <, >, <=, >=, ==, ===, !=, !==


if(friends.length < 2) {
    console.log('Fokir, tor kono friend nai');
}
else{
    console.log('You are a good boy');
}


// 4. loop

var number = 0;
while(number <= 6) {
    console.log('Number');
    number++;
}

for(var i = 0; i <= 10; i ++) {
    console.log(i);
}

// 5. function

function isMoonUp (time) {
    if(time > 7) {
        return true;
    }
}

// 6. object

var jantus = {
    height : 60,
    romanticism : 'habby',
    baperTaka : 'boroloks'
}