
const person = [{
    name: 'saikat',
    age: 23 ,
    height: '5.6ft',
    address: {
        first: 'noakhali , subarnachar',
        seconde: 'hazipur , comirhat',
        third: {
            secondethird: 'samer bari',
            
        }
    }
}]

console.log(person[0].address.third.secondethird);

const nestedObject = {
    name: 'John',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA'
    },
    hobbies: ['reading', 'painting', 'coding'],
    education: {
      degree: 'Bachelor',
      major: 'Computer Science',
      university: 'ABC University'
    }
  };
  
console.log(nestedObject.address.country);
console.log(nestedObject.education.university);