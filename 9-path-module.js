const path = require('path');

// Get normalized path
const filePath = path.join('/content', 'subfolder', 'test.text')
console.log(filePath);

// Access the last part of the path
const base = path.basename(filePath);
console.log(base);

// Returns absolute path
const absPath = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absPath);