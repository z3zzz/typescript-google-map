const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Tuple: Array-like structure where each element
// represents some property of a record
const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 30];
