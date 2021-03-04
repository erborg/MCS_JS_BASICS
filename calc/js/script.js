let haveEnough = (totalCash, watchesCount, watchesCost, earringsCount, earringsCost) => {
	watchesSum = watchesCount * watchesCost;
	earringsSum = earringsCount * earringsCost;
	totalSum = watchesSum + earringsSum;
	if (totalCash >= totalSum) {
		document.write("Enough $$$");
	}
	else {
		document.write("Not enough $$$");
	}
}
