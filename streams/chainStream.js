const fs = require('fs');
const writeFileStream = fs.createWriteStream('../bigFile');
process.stdin.setEncoding('utf-8');
process.stdin.on("data", pipeToWriteStream);
process.stdin.on("pause", () => console.log('terminé.'));

function pipeToWriteStream(input) {
    writeFileStream.write(input);
}