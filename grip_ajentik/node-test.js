console.log("Node.js is working correctly!");
console.log(`Node version: ${process.version}`);
console.log(`NPM version: ${require('child_process').execSync('npm --version').toString()}`);
