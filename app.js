gsap.registerPlugin(ScrollTrigger);

gsap.to('.tweet-three', {
	scrollTrigger: {
		trigger: '.sharing_graphic',
		start: 'top 850px',
		// markers: true,
		toggleActions: 'restart pause reverse pause',
		scrub: true,
		end: 'bottom',
	},
	x: -250,
	ease: 'power1.inOut',
});

gsap.to('.tweet-two', {
	scrollTrigger: {
		trigger: '.sharing_graphic',
		start: 'top 850px',
		// markers: true,
		toggleActions: 'restart pause reverse pause',
		scrub: true,
		end: 'bottom',
	},
	x: 250,
	ease: 'power1.inOut',
});
