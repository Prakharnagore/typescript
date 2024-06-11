// Variables
let apples: number = 5;
let speed: string = "fast";
let nothingMuch: null = null;

// Buit in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ["red", "green"];
let number: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Objects
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// any type
const json = '{"x":10,"y":20}';
const coordinates1 = JSON.parse(json);

// Fixing any type
const coordinates2: { x: number; y: number } = JSON.parse(json);
