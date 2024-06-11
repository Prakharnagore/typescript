# Bundling parcel

- Tool to help us run typescript in browser
  npm install -g parcel-bundler
- This is no longer necessary as the new Parcel tool can be run without installation using npx.
  To build the app and run the development server, simply run the following command in your terminal:
  npx parcel index.html

# NPM Faker Library

- Generate massive amounts of fake (but realistic) data for testing and development.
  npm install @faker-js/faker@7.6.0
  import { faker } from "@faker-js/faker";

# Type definition files

- They define the types for the functions, objects, and variables in the JavaScript libraries, enabling TypeScript to understand and type-check the JavaScript code.
- The type definition files provide the necessary type information, allowing TypeScript to safely and
  effectively use the JavaScript libraries
  JS Library -> Type definition file -> Typescript code
  @types/{library_name}

# Google maps type declaration file

- npm install @types/google.maps

# Implements

- In TypeScript, the implements keyword is used to enforce that a class adheres to a specific interface.
  This means that the class must contain all the properties and methods defined in the interface.

# Note

- In typescript do not export default statement for clean code
- Google API Key : AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU
