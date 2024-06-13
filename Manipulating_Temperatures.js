// Define a variable named temperatures and assign it an array containing several temperature readings in Celsius (e.g., -3, 14, 22, 5, -10).

const temperatures = [-3, 14, 22, 5, -10];

// Log each temperature to the console using forEach with arrow function
console.log("Temperatures in Celsius:");
temperatures.forEach(temperature => console.log(temperature));

// Convert each temperature to Fahrenheit and log to the console using forEach with arrow function
console.log("\nTemperatures in Fahrenheit:");
temperatures.forEach(temperature => console.log((temperature * 9/5) + 32));

// Create new array temperaturesInFahrenheit using map with arrow function
const temperaturesInFahrenheit = temperatures.map(temperature => (temperature * 9/5) + 32);
console.log("\nTemperatures in Fahrenheit (using map):");
console.log(temperaturesInFahrenheit);

// Create new array belowFreezing using filter with arrow function
const belowFreezing = temperatures.filter(temperature => temperature < 0);
console.log("\nTemperatures below freezing:");
console.log(belowFreezing);
