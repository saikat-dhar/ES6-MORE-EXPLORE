
const friends = [2, 3, 6, 7, 4];

const result = friends.map( x => x*2);
console.log(result);

const friend = friends.map( x => x + 6);
console.log(friend);

const friendsName  = [ 'saikat', 'shrabon', 'antor', 'rokibul', 'robiul'];

const friendLength = friendsName.map( y => y.length);
console.log(friendLength);

const name = friendsName.map( frnd => frnd[0]);
console.log(name);