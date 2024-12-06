const fs = require('fs');
const path = require('path');

// Path to the 'test' directory where your test files are located
const testDir = path.join(__dirname, 'test');

// Read all files in the test directory
fs.readdirSync(testDir)
  .filter(file => file.endsWith('.js'))  // Only pick .js files
  .forEach(file => {
    console.log(`Running tests from: ${file}`);
    
    try {
      // Dynamically require and execute the test file
      require(path.join(testDir, file));

      console.log(`Finish testing: ${file}\n\n`);
    } catch (error) {
      console.error(`Error running test file ${file}:`, error);
    }
  });

console.log('Test execution completed!');