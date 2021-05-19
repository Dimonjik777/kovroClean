//Animation of scroll
let animItems = document.querySelectorAll('._anim-item');

if( animItems.length > 0 ) {
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll(argument) {
		for (var i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if( animItemHeight > window.innerHeight ) {

				animItemPoint = window.innerHeight - window.innerHeight / animStart;

			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < ( animItemOffset + animItemHeight)) {

				animItem.classList.add('_active');

			} else{
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}

		}
	}
  	
	animOnScroll();

  	//get item coordinates 
	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		return { top: rect.top + scrollTop, left: rect.left + scrollLeft } 
	}
}
//Spoiler and modification of the cleaning process and equipment
$(document).ready(function() {

	//Spoiler
	$('.question').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	//Modification of the cleaning process and equipment

	$('.arrival').click(function(event) {

		$('.arrival').toggleClass('active');
		$('.removal').removeClass('active');
		//Slider
		$('.equipment__slider__removal').fadeOut(500);
		setTimeout(function() {
		$('.equipment__slider__removal').removeClass('active');
		}, 500);
		

		$('.equipment__slider__arrival').fadeIn(500);
		setTimeout(function() {
		$('.equipment__slider__arrival').toggleClass('active');
		}, 500)
		//Clean

		$('.equipment__slider__removal').fadeOut(500);
		setTimeout(function() {
		$('.clean__content__removal').removeClass('active');
		}, 500);

		$('.equipment__slider__arrival').fadeIn(500);
		setTimeout(function() {
		$('.clean__content__arrival').toggleClass('active');
		}, 500);
	});

	$('.removal').click(function(event) {
		$('.removal').toggleClass('active');
		$('.arrival').removeClass('active');
		//Slider
		$('.equipment__slider__arrival').fadeOut(500);
		setTimeout(function() {
		$('.equipment__slider__arrival').removeClass('active');
		}, 500);
		

		$('.equipment__slider__removal').fadeIn(500);
		setTimeout(function() {
		$('.equipment__slider__removal').toggleClass('active');
		}, 500)
		//Clean

		$('.equipment__slider__arrival').fadeOut(500);
		setTimeout(function() {
		$('.clean__content__arrival').removeClass('active');
		}, 500);

		$('.equipment__slider__removal').fadeIn(500);
		setTimeout(function() {
		$('.clean__content__removal').toggleClass('active');
		}, 500);
	})

	//Timer
	let countDownDate = new Date('May 21, 2021 14:00:00').getTime();

	let x = setInterval(function() {
		let now = new Date().getTime();
		let distance = countDownDate - now; 

		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.querySelector('.hours').innerHTML = hours;
		document.querySelector('.minutes').innerHTML = minutes;
		document.querySelector('.seconds').innerHTML = seconds;
	}, 1000)

});

//Before/After
$(function() {
	$('#slider').twentytwenty({
		before_label : 'До',
		after_label : 'После'
	});
});

$(function() {
	$('#slider__example1').twentytwenty({
		before_label : 'До',
		after_label : 'После'
	});
});

$(function() {
	$('#slider__example2').twentytwenty({
		before_label : 'До',
		after_label : 'После'
	});
});

$(function() {
	$('#slider__example3').twentytwenty({
		before_label : 'До',
		after_label : 'После'
	});
});

//Infinity slider
$(document).ready(function() {
	$('.equipment__slider__removal').slick({
		slidesToShow: 3,
		adaptiveHeight: true,
	});
})

$(document).ready(function() {
	$('.equipment__slider__arrival').slick({
		slidesToShow: 3,
		adaptiveHeight: true,
	});
})