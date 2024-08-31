let name = "lanz"; //declaring and assignment
let age = 20; 
let hasHobby = true;
let hobbies = ["Reading", "Coding", "Gaming"]; //this is an array

// accessing array elements
// console.log(hobbies[0]);
// console.log(hobbies[1]);


// looping through array
// method 1
for (let hobby of hobbies) {
    console.log(hobby);
}

// method 2
hobbies.map((hobby) => { 
    console.log(hobby)
});

// method 3 
hobbies.forEach((hobby) => {
    console.log(hobby)
});

// this is an object
const person = {
    name: "Jhon", //key: pair = value
    age: 25,
    greet: function(){
        console.log("HELLO, I am " + this.name);
    },
};

// accessing object properties
console.log(person.greet());

// this is a function with 3 parameters/arguments
function summarizeUser(userName, userAge, userHasHobby)
{
    return (
        "Name is " + userName + ", age is " + userAge + 
        " and the user has hobbies: " + userHasHobby 
    );
}

function add(number1, number2){
    let sum = number1 + number2;
    return
} console.log(add(2,3));
console.log(summarizeUser(name, age, hasHobby))

if (age > 18) {
    console.log("Your are an adult!");
} else if (age >= 60) {
    console.log("You're a Senior!");
} else {
    console.log("You're a Minor!");
}

const fullName = "Jhon Doe";

