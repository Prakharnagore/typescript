/* Property Descriptor 

const car = { make: "honda", year: 2000 };
console.log(Object.getOwnPropertyDescriptor(car, "make"));
Object.defineProperty(car, "make", { writable: false });
car.make = "chevy";
console.log(car);
 */

/* Decorators  */
@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("Something bad!")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: Boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}

function testDecorator(target: any, key: string) {
  // console.log(target[key]); // error because we cannot read property of instance of boat, its not available to us
  // console.log(target.color); // error because we cannot read property of instance of boat, its not available to us
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat();
