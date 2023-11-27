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

// animate scroll
$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	return false;
});

$('.works-gallery-slider').slick({
	slidesToShow: 2,
	arrows: false,
	dots: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		},
	]
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
			breakpoint: 576,
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

// accordeon
function accordeon() {
	var panel = $('.panel_heading');

	if (panel.hasClass('in')) {
		$('.in').find('.block_hover').slideDown();
	}

	$('.panel_heading .block_title').on('click', function () {
		$(this).parent().toggleClass('in').find('.block_hover').slideToggle();
	});
}

accordeon();
