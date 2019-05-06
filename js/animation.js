//----------------following code controls the contact icons on the side
//when loaded, mouse moves in/ out and click
$(function() {
	var tContact = anime.timeline({
		easing: 'easeOutExpo',
  		// duration: 70
	});
	tContact.add({
		targets: document.getElementById("logoLinkedin"),
		translateX: 50
	},1000);
	tContact.add({
		targets: document.getElementById("logoGithub"),
		translateX: 50
	},1100);
	tContact.add({
		targets: document.getElementById("logoMedium"),
		translateX: 50
	},1200);
	tContact.add({
		targets: document.getElementById("logoFacebook"),
		translateX: 50
	},1300);
	
	$ ("#logoLinkedin").hover(popOut,popBack);
	$ ("#logoGithub").hover(popOut,popBack);
	$ ("#logoMedium").hover(popOut,popBack);
	$ ("#logoFacebook").hover(popOut,popBack);
	$ ("#logoLinkedin").click(popBack);
	$ ("#logoGithub").click(popBack);
	$ ("#logoMedium").click(popBack);
	$ ("#logoFacebook").click(popBack);

});

function popOut() {
	var element = $(this).get(0);
	anime({
		targets: element,
		translateX: 59
	});
	
	console.log("mousein");
}
function popBack() {
	var element = $(this).get(0);
	anime({
		targets: element,
		translateX: 50
	});
	console.log("mouseout");
}
//when arrives at a certain position disappear
$(function() {
	 $(window).scroll(function() {
		var element = $(".contactGroup");
		var offset = element.position();
		offset = offset.top-$(window).scrollTop();
		if (offset < 200) {
			// console.log("close");
			var element = element.get(0);
			anime ({
			targets: element,
			translateX: -50,
			easing: 'easeOutExpo'
			});
		}
	 });
});

//when arrives at a certain position appear again
$(function() {
	 $(window).scroll(function() {
		var element = $(".contactGroup");
		var offset = element.position();
		offset = offset.top-$(window).scrollTop();
		if (offset > 200) {
			// console.log("close");
			var element = element.get(0);
			anime ({
			targets: element,
			translateX: 0,
			easing: 'easeOutExpo'
			});
		}
	 });
});


// this part is for the skill set bars
// if the about me title reaches to the top for the first time, then the skill set bar will move

$(function() {
	 $(window).scroll(function() {
		var element = $("#thirdScreen");
		var offset = element.position();
		offset = offset.top-$(window).scrollTop();
		if (offset < 30) {
			console.log("closetest");
			barMove("95%", "#squareColor1");
			setTimeout(barMove("90%", "#squareColor2"),300);
			setTimeout(barMove("95%", "#squareColor3"),600);
			setTimeout(barMove("95%", "#squareColor4"),900);
			setTimeout(barMove("90%", "#squareColor5"),1200);
			setTimeout(barMove("90%", "#squareColor6"),1500);
			setTimeout(barMove("90%", "#squareColor7"),1800);
			setTimeout(barMove("95%", "#squareColor8"),2100);
			setTimeout(barMove("90%", "#squareColor9"),2400);
			setTimeout(barMove("90%", "#squareColor10"),2700);
			setTimeout(barMove("95%", "#squareColor11"),3000);
		}
	 });
});

function barMove(numStr, selector) {$(function() {
	anime({
		targets: $(selector).get(0),
		width: numStr,
		easing: 'easeInOutQuad',
		direction: 'alternate',
		loop: false,
	});
});
};

// this part is for the project mockups
// Mouse over, the cover will expand and show more words

$(function() {
	$("#mask1").hover(coverExpand,coverContract);
	$("#mask2").hover(coverExpand,coverContract);
	$("#mask3").hover(coverExpand,coverContract);
	$("#mask4").hover(coverExpand,coverContract);
	$("#mask5").hover(coverExpand,coverContract);
});



function coverExpand() {
	var element = $(this).get(0);
	anime({
		targets: element,
		height: '100%',
		easing: 'easeInQuad',
		loop: false,
		duration: 100,
	});
	$(this).children(":last").css("display","initial");
	console.log("mousein");
}

function coverContract() {
	var element = $(this).get(0);
	anime({
		targets: element,
		height: '40%',
		easing: 'easeOutQuad',
		loop: false,
		duration: 100,
	});	
	$(this).children(":last").css("display","none");
	console.log("mouseout");

}