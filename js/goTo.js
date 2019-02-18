$(function() {
	$("#portfolioPage").on('click', function() {
		$("html,body").animate({scrollTop: $("#secondScreen").offset().top}, 800);
	});
	$("#aboutMePage").on('click', function() {
		$("html,body").animate({scrollTop: $("#thirdScreen").offset().top}, 800);
	});
	$("#contactPage").on('click', function() {
		$("html,body").animate({scrollTop: $("#fourthScreen").offset().top}, 800);
	});
	$("#myLogo").on('click', function() {
		$("html,body").animate({scrollTop: $("#firstScreen").offset().top}, 800);
	});
});


