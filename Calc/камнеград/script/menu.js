var obj= $(".menu");
var menu= $(obj).offset().top;

$(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() >= menu) {
			$('.menu').addClass('stickytop');
		}
		else{
			$('.menu').removeClass('stickytop');
		}
	});
});