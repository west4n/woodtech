document.addEventListener('DOMContentLoaded', () => {

	const toggleMenu = (openSelector, closeSelestor, openMenuSelector, closeMenuSelector) => {
		const open = document.querySelector(openSelector);
		const openMenu = document.querySelector(openMenuSelector);


		open.addEventListener('click', () => {
			open.classList.toggle(closeSelestor);
			openMenu.classList.toggle(closeMenuSelector);

		});

		document.addEventListener('click', (e) => {
			if (e.target !== document.querySelector('.menu-container')) {
				// open.classList.remove(closeSelestor);
				// openMenu.classList.remove(closeMenuSelector);
				console.log(1)
			}
		})
	};

	toggleMenu('.menu-toggle', 'menu-toggle_active', '.top-menu', 'top-menu_active');
});