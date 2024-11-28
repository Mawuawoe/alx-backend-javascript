const { stdin, stdout } = require('process');
const readline = require('readline');

// Create an interface to read input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for input
console.log('Welcome to Holberton School, what is your name?');
rl.prompt();

// Listen for the 'line' event to get the user's input
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

// Listen for the close event to display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
});
