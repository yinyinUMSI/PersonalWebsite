let windowHeight;
$(function() {
	$(window).resize(function() {
		
		$(".homeContentContainer").css('height',(window.innerHeight).toString()+"px");
		$("iframe").css('height',((window.innerHeight)-70).toString()+"px");
		$("iframe").css('width',(window.innerWidth-20).toString()+"px");
		$("#myLogo").css('margin-right',(window.innerWidth-530).toString()+"px");
		$("#myLogoPro").css('margin-right',(window.innerWidth-530).toString()+"px");
		$(".navDiv").css('width',(window.innerWidth).toString()+"px");
		// $("#secondScreen").css('height',window.innerHeight.toString()+"px");
		// $("#thirdScreen").css('height',window.innerHeight.toString()+"px");
		// $("#fourthScreen").css('height',window.innerHeight.toString()+"px");
		// $("#triangle").css('border-bottom',(window.innerHeight*0.3).toString()+"px"+" solid transparent");
		// $("#triangle").css('border-top',(window.innerHeight*0.7).toString()+"px"+" solid transparent");
	});
});

$(function() {
	$(window).resize(function() {
		// $("#firstScreen").css('width',window.innerWidth.toString()+"px");
		$(".homeContent").css('width',(window.innerWidth).toString()+"px");
		// $("#secondScreen").css('width',window.innerWidth.toString()+"px");
		// $("#thirdScreen").css('width',window.innerWidth.toString()+"px");
		// $("#fourthScreen").css('width',window.innerWidth.toString()+"px");
		// $("#triangle").css('border-right',window.innerWidth.toString()+"px"+" solid red");		
	});
});

$(function() {
	$(".homeContentContainer").css('height',(window.innerHeight).toString()+"px");
	$("iframe").css('height',((window.innerHeight)-70).toString()+"px");
	$("iframe").css('width',(window.innerWidth-20).toString()+"px");
	$("#myLogo").css('margin-right',(window.innerWidth-530).toString()+"px");
	$("#myLogoPro").css('margin-right',(window.innerWidth-530).toString()+"px");
	$(".navDiv").css('width',(window.innerWidth).toString()+"px");
	// $("#secondScreen").css('width',window.innerWidth.toString()+"px");
	// $("#thirdScreen").css('width',window.innerWidth.toString()+"px");
	// $("#fourthScreen").css('width',window.innerWidth.toString()+"px");
	// $("#secondScreen").css('height',window.innerHeight.toString()+"px");
	// $("#thirdScreen").css('height',window.innerHeight.toString()+"px");
	// $("#fourthScreen").css('height',window.innerHeight.toString()+"px");
	// $("#firstScreen").css('width',window.innerWidth.toString()+"px");
	$(".homeContent").css('width',(window.innerWidth).toString()+"px");
});






