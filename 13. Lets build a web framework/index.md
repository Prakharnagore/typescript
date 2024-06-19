# Notes

- To build the app and run the development server, simply run the following command in your terminal:
  npx parcel index.html
- Also, make sure to add type="module" to the script tag of your index.html
  <script type="module" src="./src/index.ts"></script>

# Web Framework Structure

![STEP 1](./images/image-1.png)
![STEP 2](./images/image-2.png)
![STEP 3](./images/image-3.png)
![STEP 4](./images/image-4.png)
![STEP 5](./images/image-5.png)
![STEP 6](./images/image-6.png)
![STEP 7](./images/image-7.png)
![STEP 8](./images/image-8.png)
![STEP 9](./images/image-9.png)
![STEP 10](./images/image-10.png)
![STEP 11](./images/image-11.png)
![STEP 12](./images/image-12.png)
![STEP 13](./images/image-13.png)
![STEP 14](./images/image-14.png)
![STEP 15](./images/image-15.png)
![STEP 16](./images/image-16.png)
![STEP 17](./images/image-17.png)
![STEP 18](./images/image-18.png)
![STEP 19](./images/image-19.png)
![STEP 20](./images/image-20.png)
![STEP 21](./images/image-21.png)
![STEP 23](./images/image-23.png)
![STEP 24](./images/image-24.png)
![STEP 25](./images/image-25.png)
![STEP 26](./images/image-26.png)
![STEP 27](./images/image-27.png)
![STEP 28](./images/image-28.png)
![STEP 29](./images/image-29.png)
![STEP 30](./images/image-30.png)
![STEP 31](./images/image-31.png)
![STEP 32](./images/image-32.png)
![STEP 33](./images/image-33.png)
![STEP 34](./images/image-34.png)
![STEP 35](./images/image-35.png)
![STEP 36](./images/image-36.png)
![STEP 37](./images/image-37.png)
![STEP 38](./images/image-38.png)
![STEP 39](./images/image-39.png)
![STEP 40](./images/image-40.png)

# Using typescript in for assigning types to key value pair in object

type Callback = () => void;

interface Event {
[key:string]: Callback[];
}

# Small Update for JSON server and Parcel Start Script

- In the upcoming lecture, we will be installing our JSON server globally. It would actually be a better idea to
  install this locally to our web project:
  npm install json-server@0
  npx json-server --watch db.json

- Note - We are installing the latest version less than 1.0 as all 1.0+ versions are currently very broken.
  Additionally, we need to make one small change to our scripts in the package.json file. Now that we are using npx to run Parcel, our command should instead be the following:
  "start:parcel": "npx parcel index.html"

# Two Important Rules

- In Typescript, string can be types
  type Monday='monday'
- In JS(and therefore TS), all object keys are string.

# '!' in TS (Strict Null Check)

- use '!' to tell TS that you're sure that the element is not null
