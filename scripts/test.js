//var, let, and cons are the same thing but you should use let and cons.
//let, lets you reassign values.
//always use const unless you plan to reassign a value such as scores should be let.
// don't put quotes around a var when you place it in something like console.
//Strings, Numbers, Bool, Null, Undefined, Symbol b
//String
const name = 'follower';
//Numbers
const age = 27;
const rating = 5.0;
//Bool
const isEvil = true;
//null
const x = null;
//Undefined
const y = undefined;
let z;

//  Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);
// Can be done in const as well.
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);
// Gets the # of characters in the word.

const s = 'Hello World';

console.log(s.length);

//methods need parenthesis and are objects that are associated with an object.

console.log(s.toUpperCase());

//can combine methods

console.log(s.substring(0, 5));

console.log(s.split(''))

//Arrays - variables that hold multiple values in one array
/* multi 
line comment */

const fruits = ['apples', 'oranges', 'pears', 10, true];
//arrays are 0 based

fruits[3] = 'grapes';
//can add values to array, manipulate, but can't reassign it.

//adds to end of array.
fruits.push('mangos');

// adds to start of array
fruits.unshift('strawberries');

//takes off the last part of an array.
fruits.pop();

//checks to see if something is an array
console.log(Array.isArray(fruits));

//gives the index of the input
console.log(fruits.indexOf('oranges'));

console.log(fruits);




//Objcet literals - key value pairs.

const person = {
    firstName: 'Lucas',
    lastName: 'Meyer',
    age: 21,
    hobbies: [' Listening to music', 'exploring', 'relaxing'],
    address: {
        street: '320 forest path',
        Planet: 'Middle',
        Interverse: 'Severse'
        
    }
}

console.log(person.address.street);
//to access single value in a variable put a . after the variable name the an the name of something you want to access and can access as many as you want. 

const { firstName, lastName, address: { Planet } } = person;

console.log(Planet);

person.email = 'lucas@lol.com';

console.log(person)

const todos = [
 {
    id: 1,
    text: 'Go find Artifacts',
    isCompleted: true
 },
 {
    id: 2,
    text: 'Fight Evil orb',
    isCompleted: false
 },
 {
    id: 3,
     text: 'Relax',
     isCompleted: false
 }
]

console.log(todos);


//quiz and other shenanigas
let myButton = document.querySelector('button');  
let q = "What is 5 + 10?";
  let a = 15;
  let response = prompt(q,"0");
  // Answer 

  function startGame() 
  {
   myGameArea.start();
  }

  var myGameArea = 
  {
   canvas : document.createElement("canvas"),
   start : function() 
   {
    this.canvas.width = 400;
    this.canvas.height = 270;
    this.context = this.canvas.getContent("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
   }
  }
  if(response == a) 
  {
  alert("Genius!");
  }
  else 
  { 
  alert("Stupid!");
  }
  let o = (response == a);

 myButton.onclick = function()
 {
   alert("Are you ready for freddy?"); 
 }

