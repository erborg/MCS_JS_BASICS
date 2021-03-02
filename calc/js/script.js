const totalCash = parseInt(prompt('Total Cash'));
const watchesCount = parseInt(prompt('Watches Count'));
const earringsCount = parseInt(prompt('Earrings Count'));
const watchesSum = parseInt(prompt('Watches Cost')) * watchesCount;
const earringsSum = parseInt(prompt('Earrings Cost')) * earringsCount;
const totalSum = alert(watchesSum + earringsSum);
document.write(totalCash >= totalSum);