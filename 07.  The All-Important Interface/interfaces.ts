// Syntac around interfaces
interface Vehicle {
  name: string;
  year: Date;
  isBroken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civin",
  year: new Date(),
  isBroken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.isBroken}`);
  console.log(`Summary: ${vehicle.summary()}`);
};

printVehicle(oldCivic);

// Functions in interfaces
interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(`Summary: ${item.summary()}`);
};

printSummary(oldCivic);

// Code reuse
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Name ${this.color}`;
  },
};

printSummary(drink);
