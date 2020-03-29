process.stdin.setEncoding('utf-8');
process.stdin.on("data", evaluate);
process.stdin.on("pause", () => console.log('terminé.'));

function evaluate(input) {
    input.includes('pause') ? process.stdin.pause(): console.log(input);
}