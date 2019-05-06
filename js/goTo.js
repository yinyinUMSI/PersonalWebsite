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
	$('#imgCover1,.toProjectOne').on('click',function() {
		window.location = "P6_Catholic.html";
	});

	// to project two
	$('#imgCover2,.toProjectTwo').on('click',function() {
		window.location = "P2_CNBC.html";
	});
	
	// to project three
	$('#imgCover3,.toProjectThree').on('click',function() {
		window.location = "P7_520Graphic.html";
	});

	//to project four
	$('#imgCover4,.toProjectFour').on('click',function() {
		window.location = "P5_UIMatrix.html";
	});

	//to project five
	$('#imgCover5,.toProjectFive').on('click',function() {
		window.location = "P4_501Pro.html";
	});
	
});

