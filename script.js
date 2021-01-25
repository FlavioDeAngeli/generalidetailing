let animation5 = false;
let animation6 = false;

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

const linksPreview = () => {
	const link0 = document.querySelector('#link0');
	const link1 = document.querySelector('#link1');
	const link2 = document.querySelector('#link2');
	const link3 = document.querySelector('#link3');
	const link4 = document.querySelector('#link4');
	const link1Window = document.querySelector('#link1-window');
	const link2Window = document.querySelector('#link2-window');
	const link3Window = document.querySelector('#link3-window');
	const link4Window = document.querySelector('#link4-window');
	const partnerships = document.querySelector('#partnerships');
	const claim = document.querySelector('#claim');
	
	let animation0 = true;
	let animation1 = false;
	let animation2 = false;
	let animation3 = false;
	let animation4 = false;

	link0.classList.toggle('link-active');

	link0.addEventListener('click', () => {
		// if (animation0==true) {
		// }
		if (animation1==true) {
			link1.classList.toggle('link-active');
			link1Window.style.animation = `previewOut 1s ease forwards`;
			animation1 = !animation1;
		}
		if (animation2==true) {
			link2.classList.toggle('link-active');
			link2Window.style.animation = `previewOut 1s ease forwards`;
			animation2 = !animation2;
		}
		if (animation3==true) {
			link3.classList.toggle('link-active');
			link3Window.style.animation = `previewOut 1s ease forwards`;
			animation3 = !animation3;
		}
		if (animation4==true) {
			link4.classList.toggle('link-active');
			link4Window.style.animation = `previewaOut 1s ease forwards`;
			animation4 = !animation4;
		}
		if (animation5==true) {
			// partnerships.style.animation = `previewOut 1s ease forwards`;
			animation5 = !animation5;
		}
		if (animation6==true) {
			// claim.style.animation = `galleryOut 1s ease forwards`;
			animation6 = !animation6;
		}
		
			link0.classList.add('link-active');
			// link1Window.style.animation = `previewOut 1s ease forwards`;
			animation0==!animation0;
			partnershipsPreview();
			claimPreview();
		
	});

	link1.addEventListener('click', () => {
		
			link0.classList.remove('link-active');
			animation0 = !animation0;

		if (animation2==true) {
			link2.classList.toggle('link-active');
			link2Window.style.animation = `previewOut 1s ease forwards`;
			animation2 = !animation2;
		}
		if (animation3==true) {
			link3.classList.toggle('link-active');
			link3Window.style.animation = `previewOut 1s ease forwards`;
			animation3 = !animation3;
		}
		if (animation4==true) {
			link4.classList.toggle('link-active');
			link4Window.style.animation = `previewaOut 1s ease forwards`;
			animation4 = !animation4;
		}
		if (animation5==true) {
			partnerships.style.animation = `previewOut 1s ease forwards`;
			animation5 = !animation5;
		}
		if (animation6==true) {
			claim.style.animation = `galleryOut 1s ease forwards`;
			animation6 = !animation6;
		}
		animation1 = !animation1;
		if (animation1==true) {
		 	link1.classList.toggle('link-active');
			link1Window.style.animation = `previewIn 1s ease forwards`;
			linkGalleryPreview();
		}
		else {
			link1.classList.toggle('link-active');
			link1Window.style.animation = `previewOut 1s ease forwards`;
			partnershipsPreview();
			claimPreview();
		}
		
	});

	link2.addEventListener('click', () => {

			link0.classList.remove('link-active');
			animation0 = !animation0;
		
		if (animation1==true) {
			link1.classList.toggle('link-active');
			link1Window.style.animation = `previewOut 1s ease forwards`;
			animation1 = !animation1;
		}
		if (animation3==true) {
			link3.classList.toggle('link-active');
			link3Window.style.animation = `previewOut 1s ease forwards`;
			animation3 = !animation3;
		}
		if (animation4==true) {
			link4.classList.toggle('link-active');
			link4Window.style.animation = `previewaOut 1s ease forwards`;
			animation4 = !animation4;
		}
		if (animation5==true) {
			partnerships.style.animation = `partnershipOut 1s ease forwards`;
			animation5 = !animation5;
		}
		if (animation6==true) {
			claim.style.animation = `galleryOut 1s ease forwards`;
			animation6 = !animation6;
		}
		animation2 = !animation2;
		if (animation2==true) {
		 	link2.classList.toggle('link-active');
			link2Window.style.animation = `previewIn 1.5s ease forwards`;
			linkGalleryPreview();

		}
		else {
			link2.classList.toggle('link-active');
			link2Window.style.animation = `previewOut 1s ease forwards`;
			partnershipsPreview();
			claimPreview();
		}
		
	});

	link3.addEventListener('click', () => {

			link0.classList.remove('link-active');
			animation0 = !animation0;
		
		if (animation1==true) {
			link1.classList.toggle('link-active');
			link1Window.style.animation = `previewOut 1s ease forwards`;
			animation1 = !animation1;
		}
		if (animation2==true) {
			link2.classList.toggle('link-active');
			link2Window.style.animation = `previewOut 1s ease forwards`;
			animation2 = !animation2;
		}
		if (animation4==true) {
			link4.classList.toggle('link-active');
			link4Window.style.animation = `previewaOut 1s ease forwards`;
			animation4 = !animation4;
		}
		if (animation5==true) {
			partnerships.style.animation = `partnershipOut 1s ease forwards`;
			animation5 = !animation5;
		}
		if (animation6==true) {
			claim.style.animation = `galleryOut 1s ease forwards`;
			animation6 = !animation6;
		}
		animation3 = !animation3;
		if (animation3==true) {
		 	link3.classList.toggle('link-active');
			link3Window.style.animation = `previewIn 1s ease forwards`;
			linkGalleryPreview();
		}
		else {
			link3.classList.toggle('link-active');
			link3Window.style.animation = `previewOut 1s ease forwards`;
			partnershipsPreview();
			claimPreview();
		}
		
	});

	link4.addEventListener('click', () => {

			link0.classList.remove('link-active');
			animation0 = !animation0;
		
		if (animation1==true) {
			link1.classList.toggle('link-active');
			link1Window.style.animation = `previewOut 1s ease forwards`;
			animation1 = !animation1;
		}
		if (animation2==true) {
			link2.classList.toggle('link-active');
			link2Window.style.animation = `previewOut 1s ease forwards`;
			animation2 = !animation2;
		}
		if (animation3==true) {
			link3.classList.toggle('link-active');
			link3Window.style.animation = `previewOut 1s ease forwards`;
			animation3 = !animation3;
		}
		if (animation5==true) {
			partnerships.style.animation = `partnershipOut 1s ease forwards`;
			animation5 = !animation5;
		}
		if (animation6==true) {
			claim.style.animation = `galleryOut 1s ease forwards`;
			animation6 = !animation6;
		}
		animation4 = !animation4;
		if (animation4==true) {
		 	link4.classList.toggle('link-active');
			link4Window.style.animation = `previewaIn 1s ease forwards`;
			linkGalleryPreview();
		}
		else {
			link4.classList.toggle('link-active');
			link4Window.style.animation = `previewaOut 1s ease forwards`;
			partnershipsPreview();
			claimPreview();
		}
		
	});

}

const claimPreview = () => {
	const claim = document.querySelector('#claim');
	const claimText1 = document.querySelector('#claim-text1');
	const claimText2 = document.querySelector('#claim-text2');
	animation6 = !animation6;
	claim.style.animation = `galleryIn 2s ease forwards`;
	claimText1.style.animation = `galleryIn 1.5s 1s ease forwards`;
	claimText2.style.animation = `galleryIn 1.5s 2s ease forwards`;
}

const linkGalleryPreview = () => {
	const link1 = document.querySelector('#link1');
	const link2 = document.querySelector('#link2');
	const link3 = document.querySelector('#link3');
	const link4 = document.querySelector('#link4');
	const link1Window = document.querySelector('#link1-window');
	const link2Window = document.querySelector('#link2-window');
	const link3Window = document.querySelector('#link3-window');
	const link4Window = document.querySelector('#link4-window');
	const link1Gallery = document.querySelector('#link1a-gallery');
	const link2Gallery = document.querySelector('#link2-gallery');
	const link3Gallery = document.querySelector('#link3-gallery');
	const link4Gallery = document.querySelector('#link4-gallery');
	const main = document.querySelector('.main');
	var gallery1 = false;
	var gallery2 = false;
	var gallery3 = false;
	var gallery4 = false;
	link1Window.addEventListener('mouseover', () => {
		link1Gallery.style.animation = `linkaGalleryIn 1s ease forwards`;
		link1.addEventListener('click', () => {
			link1Gallery.style.animation = `linkaGalleryOut 1s ease forwards`;})
		link2.addEventListener('click', () => {
			link1Gallery.style.animation = `linkaGalleryOut 1s ease forwards`;})
		link3.addEventListener('click', () => {
			link1Gallery.style.animation = `linkaGalleryOut 1s ease forwards`;})
		link4.addEventListener('click', () => {
			link1Gallery.style.animation = `linkaGalleryOut 1s ease forwards`;})
	});
	/* link2Window.addEventListener('mouseover', () => {
		link2Gallery.style.animation = `linkGalleryIn 1s ease forwards`;
		link1.addEventListener('click', () => {
			link2Gallery.style.animation = `linkGalleryOut 1s ease forwards`;})
		link2.addEventListener('click', () => {
			link2Gallery.style.animation = `linkGalleryOut 1s ease forwards`;})
		link3.addEventListener('click', () => {
			link2Gallery.style.animation = `linkGalleryOut 1s ease forwards`;})
		link4.addEventListener('click', () => {
			link2Gallery.style.animation = `linkGalleryOut 1s ease forwards`;})
	}); */
	/* link3Window.addEventListener('mouseover', () => {
		link3Gallery.style.animation = `linkGalleryIn 1s ease forwards`;
		link1.addEventListener('click', () => {
			link3Gallery.style.animation = `linkGalleryOut 1s ease forwards`;})
		link2.addEventListener('click', () => {
			link3Gallery.style.animation = `linkGalleryOut 1s ease forwards`;})
		link3.addEventListener('click', () => {
			link3Gallery.style.animation = `linkGalleryOut 1s ease forwards`;})
		link4.addEventListener('click', () => {
			link3Gallery.style.animation = `linkGalleryOut 1s ease forwards`;})
	}); */
	link4Window.addEventListener('mouseover', () => {
		link4Gallery.style.animation = `linkaGalleryIn 1s ease forwards`;
		link1.addEventListener('click', () => {
			link4Gallery.style.animation = `linkaGalleryOut 1s ease forwards`;})
		link2.addEventListener('click', () => {
			link4Gallery.style.animation = `linkaGalleryOut 1s ease forwards`;})
		link3.addEventListener('click', () => {
			link4Gallery.style.animation = `linkaGalleryOut 1s ease forwards`;})
		link4.addEventListener('click', () => {
			link4Gallery.style.animation = `linkaGalleryOut 1s ease forwards`;})
	});
}

const partnershipsPreview = () => {
	const partnerships = document.querySelector('#partnerships');
	const partnership1 = document.querySelector('#partnership1');
	const partnership2 = document.querySelector('#partnership2');
	animation5 = !animation5;
	partnerships.style.animation = `previewIn 2.5s 0.5s ease forwards`;
	partnership1.style.animation = `partnershipIn 1s 3s ease forwards`;
	partnership2.style.animation = `partnershipIn 1s 3.5s ease forwards`;
}
	
const logoPreview = () => {
	const logo = document.querySelector('.logo');
	logo.style.animation = `logoIn 7s ease-in forwards`;
}

navSlide(); //invoke function
linksPreview();
partnershipsPreview();
logoPreview();
claimPreview();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// - GALLERY SECTION ANIMATION - ///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//select and declare elements

const galleryContainer = document.querySelector('.gallery_container'); //select gallery container
const gallerySlide = document.querySelector('.gallery_slide'); //select images container
const galleryImages = document.querySelectorAll('.gallery_slide img'); //select all images in the container
const prevBtn = document.querySelector('#prevBtn'); //select previous button
const nextBtn = document.querySelector('#nextBtn'); //select next button

//define functions

let counter = 0; //set up a counter
 
let slide_on = false; //checks if automatic slide is already running

// let size = galleryImages[0].clientWidth; //picks the size of the image (to measure the movement of transition)

let gallery_resize = () => {
	// size = galleryImages[0].clientWidth; //re-picks the size of the image (to measure the movement of transition)
	clearInterval(slideId); //stops auto slide
	slide_on = !slide_on;
	translation(); //slide transition
	autoSlide();   //start automatic slide function
}

let translation = () => gallerySlide.style.transform = 'translateX(' + (-(galleryImages[0].clientWidth) * counter) + 'px)' //puts the first image into the div

let slide = () => {                                                           //defines slide function
				gallerySlide.style.transition = "transform 0.8s ease-in-out"; //sets transition duration
				counter++;                                                    //increase counter
				translation()                                                 //slide transition
				}

let slideId; //declare set interval ID (IMPORTANT!)
 
autoSlide = () =>  { if (slide_on === false ) slideId = setInterval(slide, 4000);//defines and execute automatic slide function (slide)
					 slide_on = true;
				}

autoSlide();  //start automatic slide function

//event listeners

nextBtn.addEventListener('click', ()=>{                           //event listener: when "next" button is clicked
	if (counter >= galleryImages.length -1) return;               //stops function when reach the last image (fast clicks bug fix)
	gallerySlide.style.transition = "transform 0.8s ease-in-out"; //sets transition duration
	counter++; //increase counter
	translation(); //slide transition
	clearInterval(slideId);
	slide_on = false; 
	galleryContainer.addEventListener('mouseleave', () => {autoSlide();}, { once: true });
			
});

prevBtn.addEventListener('click', ()=>{ //event listener: when "previous" button is clicked
	if (counter <= 0) return; //stops function when reach the first image (fast clicks bug fix)
	gallerySlide.style.transition = "transform 0.8s ease-in-out"; //sets transition duration
	counter--; //decrease counter
	translation(); //slide transition
	clearInterval(slideId); //stops auto slide
	slide_on = false;
	galleryContainer.addEventListener('mouseleave', () => {autoSlide();}, { once: true });
});

gallerySlide.addEventListener('transitionend', () => {  //function will be executed any time the transition ends
	if (galleryImages[counter].id === 'lastClone') {    //when the first image is reached
		gallerySlide.style.transition = "none";         //stops current transition (slide)
		counter = galleryImages.length -2;              //jumps to the start (1 img + 1 clone)
		translation(); //slide transition
	}
});

gallerySlide.addEventListener('transitionend', () => {  //function will be executed any time the transition ends
	if (galleryImages[counter].id === 'firstClone') {   //when the last image is reached
		gallerySlide.style.transition = "none";         //stops current transition (slide)
		counter = galleryImages.length - counter;       //jumps to the start (1 img + 1 clone)
		translation(); //slide transition
	}
});

galleryContainer.addEventListener('click', ()=>{ 
	galleryContainer.addEventListener('mouseleave', () => {autoSlide();}, { once: true });
	if (slide_on === true) {clearInterval(slideId); //stops auto slide
							slide_on = false;}
	else {slide();     //slide transition
		  autoSlide();     //start automatic slide function
	} 
});