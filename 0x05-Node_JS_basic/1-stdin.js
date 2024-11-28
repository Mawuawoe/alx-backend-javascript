// Display a welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
if (process.stdin.isTTY) {
  process.stdin.on('data', (input) => {
    // remove extra whitespace or newlines
    const name = input.trim();
    console.log(`Your name is: ${name}`);

    // Exit the program after displaying the input
    process.exit(0);
  });
} else {
  process.stdin.on('data', (input) => {
    // remove extra whitespace or newlines
    const name = input.trim();
    console.log(`Your name is: ${name}`);

    // Exit the program after displaying the input
    console.log('This important software is now closing');
    process.exit(0);
  });
}
