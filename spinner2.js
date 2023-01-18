process.stdout.write('hello from spinner1.js... \rheyyy\n');
let spinner = ["|", "/", "-", "\\", "|"]
let delay = 100;

for (const element of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${element}    `);
  }, delay += 200)
};
