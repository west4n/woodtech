document.addEventListener('DOMContentLoaded', () => {

	//SPAN
	const addSpan = () => {
		document.querySelectorAll('.home-slider__heading').forEach(item => {
			let text = item.textContent.split(' ');
			let first = text.shift();
			item.innerHTML = `${first} <br><span>${text.join(' ')}</span>`
		})
	}
	addSpan();

	// MENU
	const toggleMenu = (openSelector, activeSelestor, openMenuSelector, activeMenuSelector) => {
		const open = document.querySelector(openSelector);
		const openMenu = document.querySelector(openMenuSelector);


		open.addEventListener('click', () => {
			open.classList.toggle(activeSelestor);
			openMenu.classList.toggle(activeMenuSelector);

		});

		document.addEventListener('click', (e) => {
			if (!document.querySelector('.menu-container').contains(e.target)) {
				open.classList.remove(activeSelestor);
				openMenu.classList.remove(activeMenuSelector);
			}
		})
	};

	toggleMenu('.menu-toggle', 'menu-toggle_active', '.top-menu', 'top-menu_active');

	//Swiper Slider
	const homeSlider = new Swiper('.home-slider', {
		speed: 800,
		centeredSlides: true,
		effect: 'fade',
		pagination: {
			el: '.home-slider__pagination',
			type: 'custom',
			renderCustom: (swiper, current, total) => {
				let indT = total >= 10 ? total : `0${total}`;
				let indC = current >= 10 ? current : `0${current}`;
				return `<b>${indC}</b><span></span> ${indT}`;
			}
		},
		scrollbar: {
			el: '.home-slider__scrollbar',
			draggable: true
		},
		navigation: {
			prevEl: '.home-slider__prev',
			nextEl: '.home-slider__next'
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false
		},
		runCallbacksOnInit: true


	});
});