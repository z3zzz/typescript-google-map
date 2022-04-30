// When to use annotations

// 1) Function that returns the 'any' type
const json = '{"x": 20, "y": 100}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'yellow', 'green'];
let hasFoundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    hasFoundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
