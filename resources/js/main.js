const mobileMenu = document.querySelector('.nav-links-container');
const mobileButton = document.querySelector('.mobile-menu');

mobileButton.addEventListener('click', () => {
	if (mobileMenu.style.display === 'none') {
		mobileMenu.style.display = 'flex';
	} else {
		mobileMenu.style.display = 'none';
	}
});
