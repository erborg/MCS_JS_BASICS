let answer = prompt("Number?");
answer = parseFloat(answer);

if (answer > 0) {
	console.log(answer);
}
else if (answer < 0) {
	console.log(Math.abs(answer));
}
else {
	console.log(0)
}
