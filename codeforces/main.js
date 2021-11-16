'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
	inputString += inputStdin;
});

process.stdin.on('end', (_) => {
	inputString = inputString
		.trim()
		.split('\n')
		.map((string) => {
			return string.trim();
		});

	main();
});

function readLine() {
	return inputString[currentLine++];
}

function main() {
	const number = parseInt(readLine());
	const string = readLine().split(' ').map(Number);
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] < string[i + 1]) {
			[string[i - 1], string[i]] = [string[i], string[i - 1]];
			count++;
		}
	}
}
