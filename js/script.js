let totalCash = parseInt(prompt('Total Cash'));
let watchesCount = parseInt(prompt('Watches Count'));
let earringsCount = parseInt(prompt('Earrings Count'));
let watchesSum = parseInt(prompt('Watches Cost')) * watchesCount;
let earringsSum = parseInt(prompt('Earrings Cost')) * earringsCount;
let totalSum = alert (watchesSum + earringsSum);
document.write(totalCash >= totalSum);