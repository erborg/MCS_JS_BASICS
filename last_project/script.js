const APIKey = '97c7803c55e126a47dd90988c78e5e8c'
const city = 'Moscow'

let xhr = new XMLHttpRequest()
let request = function() {
	let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey
	xhr.open('GET', url, false)
	xhr.send()
	let DATA = JSON.parse(xhr.responseText).main.temp - 273;
	return DATA
}

class Person {
	constructor(name) {
		this.name = name
		this.happiness = 0
	}
	hasCat() {
		return this.happiness + 1
	}
	hasRest() {
		return this.happiness + 1
	}
	hasMoney() {
		return this.happiness + 1
	}
	isSunny() {
		if (request() > 15) {
			return this.happiness + 1
		} else {
			return this.happiness
		}
	}
}

window.addEventListener('load', (event) => {
	const form = document.forms[0];
	const insertName = document.querySelector('.personName');
	const insertIcon = document.querySelector('.icon');
	form.onsubmit = function(e) {
		e.preventDefault();
		const name = new Person(form.elements.name.value)
		insertName.innerHTML = name.name + ':'

		if (form.elements.cat.value === 'yes') {
			name.happiness = name.hasCat()
		}
		if (form.elements.rest.value === 'yes') {
			name.happiness = name.hasRest()
		}
		if (form.elements.money.value === 'yes') {
			name.happiness = name.hasMoney()
		}
		name.happiness = name.isSunny()

		if (name.happiness === 4) {
			insertIcon.innerHTML = '😄'
		}
		else if (name.happiness === 3 || name.happiness === 2 && name.isSunny() < 15) {
			insertIcon.innerHTML = '😐'
		}
		else {
			insertIcon.innerHTML = '☹️'
		}
	}
});
