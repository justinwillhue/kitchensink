// My name
let Myname = 'justin';

// the number of states in the U.S
const numberofstates = 50;
console.log('There are' + "", + numberofstates, 'states in the US')

// This should be the 5 + 4 answer
let answer = (5 + 4);

console.log(answer);
// hello alert function
function sayHello() {
    alert("Hello World!!")
};


sayHello();

//checkAge function for under 21
function checkAge(age, cname) {

    if (age < 21) {
        alert('Sorry ' + cname + ", you aren't old enough to view this page!")
    } else{
        return cname
    }
};

console.log(checkAge(21, "Charles"));
console.log(checkAge(27, "Abby"));
console.log(checkAge(18, 'James'));
console.log(checkAge(17, 'John'));
//arry of vegetables
let vegetables = ['Garlic', 'Carrot', 'Celery', 'Lettace']
//loop for arry vegterables
for (var x = 0; x < vegetables.length; x++) {
    console.log(vegetables[x])
};
// object pet name
let pet = { breed: "Diluted Calico", pname: 'Daisy' };

console.log(pet.pname)
console.log(pet.breed)
// fancy arry with checkAge function
let friends = [
    { Fname: 'Jake', age: 32 },
    { Fname: 'Jill', age: 31 },
    { Fname: 'Levi', age: 14 },
    { Fname: 'Kyle', age: 17 },
    { Fname: 'Beth', age: 21 }
];
// Determining which people can view the site based on the checkAge function
for (let x = 0; x < friends.length; x++) {
    console.log(checkAge(friends[x].age, friends[x].Fname))
};
// a fucntion to count the lenght of a word and determine if it is even or odd.
function getLength() {
    word = String.length
    if (word %2==0) {
        return('The world is nice and even!')
    } else if (word %1==0) {
        return('The world is and odd place!')
    }
};
console.log(getLength('helllo world'))












