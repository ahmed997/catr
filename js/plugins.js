//Start Header Height
const logoHeight = $(".nav-bar").outerHeight(),
	perc = $(window).innerHeight();

$('.header-text-row').height(perc - (logoHeight + 150));

$("#downIcon").on('click', function () {
	$("html, body").animate({
		scrollTop: $(".event-details").offset().top
	}, 650);
});
//End Header Height

//Start Half Circle Canvas
const hC = document.getElementById("halfCircle"),
	hCCtx = hC.getContext("2d");
hCCtx.beginPath();
hCCtx.arc(150, 180, 145, Math.PI, 2 * Math.PI);
hCCtx.lineWidth = 10;
hCCtx.strokeStyle = '#9C4359';
hCCtx.stroke();
//End Half Circle Canvas

//Start Carousel
$(".owl-carousel")
	.owlCarousel({
		loop: false,
		autoWidth: false,
		margin: 100,
		nav: true,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			425: {
				items: 1,
				nav: true
			},
			600: {
				items: 2,
				nav: true
			},
			1024: {
				items: 3,
				nav: true,
				loop: false
			}
		}
	});

$(".owl-prev")
	.empty()
	.append('<div class="row h-100"><div class="col my-auto"><i class="fas fa-chevron-circle-left"></i></div></div>');
$(".owl-next")
	.empty()
	.append('<div class="row h-100"><div class="col my-auto"><i class="fas fa-chevron-circle-right"></i></div></div>');
//End Carousel

//Start Footer
$(".nav-link").on("click", function () {
	const eleId = $(this).attr("data-target");
	$("html, body").animate({
		scrollTop: $("." + eleId).offset().top
	}, 650);
});
//End Footer