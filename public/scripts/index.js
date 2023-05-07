const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


const doc = document;
const menuOpen = doc.querySelector(".menu-items");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

doc.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.remove("overlay--active");
  }
});

// scroll top btn
let scrollTop = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', function () {
	if (window.pageYOffset > 70) {
		scrollTop.classList.add('active');
	} else {
		scrollTop.classList.remove('active');
	}
});

// menu toggle bar
let navToggler = document.querySelector('.nav-toggler');
let menuItems = document.querySelector('.menu-items');

let navList = document.querySelectorAll('.menu-items > li > a');

navToggler.addEventListener('click', function () {
	navToggler.classList.toggle('active');
	menuItems.classList.toggle('show');

	for (let i = 0; i < navList.length; i++) {
		navList[i].addEventListener('click', function () {
			navToggler.classList.remove('active');
			menuItems.classList.remove('show');
		});
	}
});

// aos animation
AOS.init({
	duration: 1000
});