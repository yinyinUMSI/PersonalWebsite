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


	$("#portfolioPagePro").on('click', function() {
		window.location = "index.html";
		$("html,body").animate({scrollTop: $("#secondScreen").offset().top}, 800);

	});
	$("#aboutMePagePro").on('click', function() {
		window.location = "index.html";
		$(function() {
		$("html,body").animate({scrollTop: $("#thirdScreen").offset().top}, 800);
		console.log("finished");
		});
	});
	$("#contactPagePro").on('click', function() {
		window.location = "index.html";
		$("html,body").animate({scrollTop: $("#fourthScreen").offset().top}, 800);
	});
	$("#myLogoPro").on('click', function() {
		window.location = "index.html";
		$("html,body").animate({scrollTop: $("#firstScreen").offset().top}, 800);
	});


	$("#github").on('click', function() {
		window.open("https://github.com/yinyinUMSI",'_blank');
	});
	$("#linkedin").on('click', function() {
		window.open("https://www.linkedin.com/in/yin-yin-961417115/",'_blank');
	});
	$("#facebook").on('click', function() {
		window.open("https://www.facebook.com/profile.php?id=100013085430979",'_blank');
	});
	$("#medium").on('click', function() {
		window.open("https://medium.com/@yinyin_99980",'_blank');
	});
	$("#resume").on('click', function() {
		window.open("img/ResumeYinYin.pdf",'_blank');
	});
	// to project one
	$('.toProjectOne').on('click',function() {
		window.location = "P1_SaveSave.html";
	});
	$('#dw1').on('click',function() {
		window.location = "P1_SaveSave.html";
	});
	// to project two
	$('.toProjectTwo').on('click',function() {
		window.location = "P2_CNBC.html";
	});
	$('#dw2').on('click',function() {
		window.location = "P2_CNBC.html";
	});
	$('.toProjectThree').on('click',function() {
		window.location = "P3_Processing.html";
	});
	$('#dw3').on('click',function() {
		window.location = "P3_Processing.html";
	});
	$('.toProjectFour').on('click',function() {
		window.location = "P4_501Pro.html";
	});
	$('#dw4').on('click',function() {
		window.location = "P4_501Pro.html";
	});
	$('.toProjectFive').on('click',function() {
		window.location = "P5_UIMatrix.html";
	});
	$('#dw5').on('click',function() {
		window.location = "P5_UIMatrix.html";
	});
	$('.toProjectSix').on('click',function() {
		window.location = "P6_Catholic.html";
	});
	$('#dw6').on('click',function() {
		window.location = "P6_Catholic.html";
	});
});

