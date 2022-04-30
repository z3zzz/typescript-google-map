const cars = ['Toyota', 'Honda', 'Tesla'];
const dates = [new Date(), new Date()];

const cars2: string[][] = [];

// Help with inference when extracting values
const car = cars[0];
const car1 = cars.pop();

// Prevent incompatible values
cars.push(10);

// Help with 'map'
cars.map((car): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-11'];
const myVars: (string | number)[] = [];

myVars.push(1);
myVars.push('1');
myVars.push(true);
