// vendor scirpts
import $ from 'vendor/jquery-2.1.4.min.js';
//import CountUp from 'vendor/countUp.js';

// modules scripts
//import 'modules/main.nav.js';
$(document).ready(function(){
	$('main').addClass("fadeIn");
	var bLazy = new Blazy();
})
var popImg = function (){
	$('img').each(function() {
	    var imagePos = $(this).offset().top;

	    var topOfWindow = $(window).scrollTop();
	    var heightOfWindow = $( window ).height();
	    if (imagePos < topOfWindow + heightOfWindow ) {
	        $(this).addClass("bounceIn");
	    }

	});
}
popImg();
$(window).scroll(function() {
    popImg();
});
