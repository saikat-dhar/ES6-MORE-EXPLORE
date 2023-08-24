
// const numbers = [1, 2, 3, 4, 5];

// const number = numbers.forEach( x => x);
// console.log(number);

const numbers2 = [ 17, 34, 33, 78, 57, 26, 30];
const number2 = numbers2.filter( p =>  p % 2 === 1 );
console.log(number2);

const number3 = numbers2.filter( c => c > 30);
console.log(number3);

const players2 = [ 'karim', 'messi', 'ronaldo', 'maradona', 'ronaldino', 'alvarez'];
const player2 = players2.filter( y => y.length > 5);
console.log(player2);