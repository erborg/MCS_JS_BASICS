let haveEnough = (totalCash, watchesCount, earringsCount, watchesSum, earringsSum) => {
	totalCash = parseInt(prompt('Total Cash'));
	watchesCount = parseInt(prompt('Watches Count'));
	watchesSum = parseInt(prompt('Watches Cost')) * watchesCount;
	earringsCount = parseInt(prompt('Earrings Count'));
	earringsSum = parseInt(prompt('Earrings Cost')) * earringsCount;
	totalSum = watchesSum + earringsSum;
	if (totalCash >= totalSum) {
		document.write("Enough $$$");
	}
	else {
		document.write("Not enough $$$");
	}
}

haveEnough();
