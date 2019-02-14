let windowHeight;
$(function() {
	$(window).resize(function() {
		
		$(".homeContentContainer").css('height',(window.innerHeight).toString()+"px");
		// $("#secondScreen").css('height',window.innerHeight.toString()+"px");
		// $("#thirdScreen").css('height',window.innerHeight.toString()+"px");
		// $("#fourthScreen").css('height',window.innerHeight.toString()+"px");
		// $("#triangle").css('border-bottom',(window.innerHeight*0.3).toString()+"px"+" solid transparent");
		// $("#triangle").css('border-top',(window.innerHeight*0.7).toString()+"px"+" solid transparent");
	});
});

$(function() {
	$(window).resize(function() {
		$("#firstScreen").css('width',window.innerWidth.toString()+"px");
		$(".homeContent").css('width',(window.innerWidth).toString()+"px");
		// $("#triangle").css('border-right',window.innerWidth.toString()+"px"+" solid red");		
	});
});

$(function() {
	$(".homeContentContainer").css('height',(window.innerHeight).toString()+"px");
	// $("#secondScreen").css('height',window.innerHeight.toString()+"px");
	// $("#thirdScreen").css('height',window.innerHeight.toString()+"px");
	// $("#fourthScreen").css('height',window.innerHeight.toString()+"px");
	$("#firstScreen").css('width',window.innerWidth.toString()+"px");
	$(".homeContent").css('width',(window.innerWidth).toString()+"px");
	$("#yinIMG").css('width',((window.innerWidth)*0.7).toString()+"px");
	$(window).resize(function() {		
		$("#yinIMG").css('width',((window.innerWidth)*0.7).toString()+"px");
	});
});

$(function() {
	 $(window).scroll(function() {
		var element = $("#titleScreen3");
		var offset = element.position();
		offset = offset.top-$(window).scrollTop();
		if (offset < 30 && offset>-30) {
			console.log("close");
			barMoveOne();
			setTimeout(barMoveTwo,300);
			setTimeout(barMoveThree,600);
			setTimeout(barMoveFour,900);
		}
	 });
});

$(function() {
	 $(window).scroll(function() {
		var element = $("#secondScreen");
		var offset = element.position();
		offset = offset.top-$(window).scrollTop();
		if (offset < 200 && offset>-200) {
			console.log("near");
			titleDecoExpand2();
		}
	 });
});

$(function() {
	 $(window).scroll(function() {
		var element = $("#thirdScreen");
		var offset = element.position();
		offset = offset.top-$(window).scrollTop();
		if (offset < 200 && offset>-200) {
			console.log("close");
			titleDecoExpand3();
		}
	 });
});


$(function() {
	 $(window).scroll(function() {
		var element = $("#fourthScreen");
		var offset = element.position();
		offset = offset.top-$(window).scrollTop();
		if (offset < 200 && offset>-200) {
			console.log("close");
			titleDecoExpand4();
		}
	 });
});


$(function() {
	var statusArray = new Array(0,0,0,0,0,0,0,0);
	 $(window).scroll(function() {
	 	$(".imgCover").each(function(i) {
	 		var offset = $(this).position().top-$(window).scrollTop();
	 		console.log(statusArray[i]);

	 		if (offset <=50 && offset >= 0 && statusArray[i] == 0) {
			console.log("worksclose");
			opacIncreaseSmallScreen(i);
			statusArray[i] = 1;
			// setTimeout(opacDecreaseSmallScreen(i),1000);
		}
			else if (offset<-50) {
			opacDecreaseSmallScreen(i);
			}
	 	});	
	 });
});


$(function() {console.log("infunction");$("#cover1").hover(opacIncrease1,opacDecrease1);});//为什么opacIncrease（参数不能用）
$(function() {console.log("infunction");$("#cover2").hover(opacIncrease2,opacDecrease2);});
$(function() {console.log("infunction");$("#cover3").hover(opacIncrease3,opacDecrease3);});
$(function() {console.log("infunction");$("#cover4").hover(opacIncrease4,opacDecrease4);});
$(function() {console.log("infunction");$("#cover5").hover(opacIncrease5,opacDecrease5);});
$(function() {console.log("infunction");$("#cover6").hover(opacIncrease6,opacDecrease6);});
$(function() {console.log("infunction");$("#cover7").hover(opacIncrease7,opacDecrease7);});
$(function() {console.log("infunction");$("#cover8").hover(opacIncrease8,opacDecrease8);});