// Function
const add = (a: number, b: number): number => {
  return a + b;
};

// void type
const logger = (message: string): void => {
  console.log(message);
};

// never type
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: "Sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

// Destructuring with annotations (ES2015)

const logWeather1 = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather1(todaysWeather);
