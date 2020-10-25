const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li'); //select all 'li' in the 'nav' 
	 
	burger.addEventListener('click', () => { //when burger is clicked
		//add or remove (toggle) nav-active class
		nav.classList.toggle('nav-active'); 
		//activate list items animation
		navLinks.forEach((link, index) => { //for each element in navLinks
			if (link.style.animation) { //if element alredy have animation
				link.style.animation = ''; //do nothing
			} else { //if element doesn't have animation
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s` //apply 'navLinkFade' animation (in 0.5s)
			}//every element is animated with a delay proportional to its index position (+ initial delay)
		});
		// activate burger animation (adding or removing toggle class)
		burger.classList.toggle('toggle');
	}); 
}

navSlide(); //invoke function