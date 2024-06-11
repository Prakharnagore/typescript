const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alisa
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprit: Drink = ["clear", true, 40];
const tea: Drink = ["brown", true, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  hoursePower: 400,
  weight: 3354,
};
