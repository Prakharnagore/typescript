const carMakers = ["ford", "toyota", "chevy"]; // string[]
const dates = [new Date(), new Date()]; // Date[]

const carsByMake = [["f150"], ["corolla"], ["camaro"]]; // string[][]

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Help with "map"
// Here if you remove type string from (car: string), ts will already know it is a string.

carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates = [new Date(), "2030-10-10"];
importantDates.push("2030-10-10");
importantDates.push(new Date());
// importantDates.push(100);
// Argument of type 'number' is not assignable to parameter of type 'string | Date'
