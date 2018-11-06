const mobileMenu = document.querySelector('.nav-links-container');
const mobileButton = document.querySelector('.mobile-menu');

mobileButton.addEventListener('click', () => {
	mobileMenu.style.display = 'flex';
});
