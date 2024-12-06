const fs = require('fs');

const GetDataFromJSON = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8'); // Reading the file synchronously
    const parsedContent = JSON.parse(fileContent); // Parse the JSON content
    if (parsedContent.data) {
      return parsedContent.data; // Return the data
    } else {
      throw new Error("Data is null or missing the 'data' property"); // Throw an error if 'parsedContent.data' is missing or null
    }
  } catch (err) {
    throw new Error(`Error reading JSON file: ${err.message}`); // Rethrow the error with additional message
  }
}

module.exports = GetDataFromJSON;
