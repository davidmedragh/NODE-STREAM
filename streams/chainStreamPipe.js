const fs = require('fs');
const writeFileStream = fs.createWriteStream('../bigFile');

process.stdin.setEncoding('utf-8');

process.stdin.pipe(writeFileStream);