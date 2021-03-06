const requestPopup = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.closePopup');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

// set default style
menu.style.left = '-50vw';
popup.style.display = 'none';

// true false condition
let openMenuState = (menu.style.left == '-50vw');
let popupState = (popup.style.display == 'none');

burger.onclick = function() {
	if (openMenuState) {
		menu.style.left = '0';
	}

};

closeMenu.onclick = function() {
	if (openMenuState) {
		menu.style.left = '-50vw';
	}
};

requestPopup.onclick = function() {
	if (popupState) {
		popup.style.display = 'flex';
	}
};

closePopupButton.onclick = function() {
	if (popupState) {
		popup.style.display = 'none';
	}
};
