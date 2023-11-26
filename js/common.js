$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').click(function () {
	$('.header-bottom').fadeToggle();
});

$('.menu-close').click(function () {
	$('.header-bottom').fadeOut();
});

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});

$('.works-gallery-slider').slick({
	slidesToShow: 2,
	arrows: false,
	dots: true
});

$('.brands-slider').slick({
	slidesToShow: 6,
	slidesToScroll: 2,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
			}
		}

	]
});