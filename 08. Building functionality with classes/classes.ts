// Classes
// class Vehicle {
//   constructor() {}
//   drive(): void {
//     console.log("chugga chugga");
//   }
//   honk(): void {
//     console.log("beep");
//   }
// }

// const vehicle = new Vehicle();
// vehicle.drive();

// Basic inheritance
// class Car {
//   drive(): void {
//     console.log("chugga chugga");
//   }
//   honk(): void {
//     console.log("beep");
//   }
// }

// class Car extends Vehicle {
//   drive(): void {
//     console.log("vroom");
//   }
// }

// const car = new Car();
// car.drive();

// Instance method modifiers
// 1. public
// class Vehicle {
//   constructor() {}
//   public drive(): void {
//     console.log("chugga chugga");
//   }
//   public honk(): void {
//     console.log("beep");
//   }
// }

// class Car extends Vehicle {
//   public drive(): void {
//     console.log("vroom");
//   }
// }

// const car = new Car();
// car.drive();

// 2. private
// class Vehicle {
//   constructor() {}
//   public honk(): void {
//     console.log("beep");
//   }
// }

// class Car extends Vehicle {
//   private drive(): void {
//     console.log("vroom");
//   }
//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// const car = new Car();
// car.drive(); // Property 'drive' is private and only accessible within class 'Car'.
// car.startDrivingProcess();

// 3. protected
// class Vehicle {
//   constructor() {}
//   protected honk(): void {
//     console.log("beep");
//   }
// }

// class Car extends Vehicle {
//   private drive(): void {
//     console.log("vroom");
//   }
//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();

// Fields in classes
// class Vehicle {
//   color: string = "red";
//   constructor() {}
// }

// const vehicle = new Vehicle();
// console.log(vehicle.color);

// class Vehicle {
//   color: string;
//   constructor(color: string) {
//     this.color = color;
//   }

// const vehicle = new Vehicle("orange");
// console.log(vehicle.color);

// class Vehicle {
//   constructor(public color: string) {
//     this.color = color;
//   }
// }

// const vehicle = new Vehicle("orange");
// console.log(vehicle.color);

// class Vehicle {
//   constructor(private color: string) {
//     this.color = color;
//   }
// }

// const vehicle = new Vehicle("orange");
// console.log(vehicle.color); // Property 'color' is private and only accessible within class 'Vehicle'

// class Vehicle {
//   constructor(protected color: string) {
//     this.color = color;
//   }
// }

// class Car extends Vehicle {
//   getColor() {
//     return this.color;
//   }
// }

// const car = new Car("Red");
// console.log(car.getColor());

// class Vehicle {
//   constructor(protected color: string) {
//     this.color = color;
//   }
// }

// class Car extends Vehicle {
//   constructor(public wheels: number, color: string) {
//     // we did not put public in color because we do not want to reassign or create a new field in car of colors
//     super(color);
//   }
//   getColor() {
//     return this.color;
//   }
// }

// const car = new Car(4, "Red");
// console.log(car.getColor());
