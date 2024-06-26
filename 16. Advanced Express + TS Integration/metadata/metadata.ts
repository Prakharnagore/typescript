import "reflect-metadata";

const plane = {
  color: "red",
};

/* Example for image-3.png */
/* { color:'red', note:'hi there' } it add note as a property to plane but is not visible in the plane object */
// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("height", 10, plane);

// const note = Reflect.getMetadata("note", plane);
// const heigth = Reflect.getMetadata("height", plane);

// console.log(note, heigth);

/* Example for image-4.png */
// Reflect.defineMetadata("note", "hi there", plane, "color");

// const note = Reflect.getMetadata("note", plane, "color");

// console.log(note);
@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    const middleware = Reflect.getMetadata("middleware", target.prototype, key);
    // router.get(path, middleware, target.prototype[key])
  }
}
