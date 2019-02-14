function navTab(idName) {
	
	this.Element = document.getElementById("nav"+idName);
	this.jumpTo = document.getElementById(idName);
	
}
navTab.prototype.connectEvent = function() {
	
	// console.log(this.Element);// 
	let This=this;
	this.Element.onclick = function() {This.jumpTo.scrollIntoView("smooth")};
	
};

//This function cre sate new navTabs and attach events to them.
$(function() { //为什么再加一个functin 会出错
	let navTab1 = new navTab("firstScreen");
	let navTab2 = new navTab("secondScreen");
	let navTab3 = new navTab("thirdScreen");
	let navTab4 = new navTab("fourthScreen");

	navTab1.connectEvent();
	navTab2.connectEvent();
	navTab3.connectEvent();
	navTab4.connectEvent();

});


