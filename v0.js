/*window.onload=openTab           ;
function openTab(){
	var openByDefault = document.getElementById("defaultOpen");
	openByDefault.click();
}
//a function to stay on npage after reload.
function reloadPage(){
	window.location.reload();
}*/
/*function hideStuff(){
	var contentToHide =document.getElementsByClassName("linkContents");
	for(var cont = 0; cont<contentToHide.length; cont++){
		contentToHide[cont].style.display = "none";
	}
}*/
function hidestuff(contentArr){
	for( var j=0;j<contentArr.length;j++){
		contentArr[j].style.display="none";
	}
}

function openPage(evt, pageName){
	hidestuff(document.getElementsByClassName("linkContents"));
	//declare all variables.
	/*var x, linkContents, linkLink;
	//Get all elements with class linkContents and hide them.
	linkContent = document.getElementsByClassName("linkContents");
	for( x= 0; x < linkContent.length; x++){
		linkContent[x].style.display = "none";

	}*/

	//Get all elements with the class "linkLink" and remove the class "active"
	linkLink = document.getElementsByClassName("linkLink");
	for(i = 0; i < linkLink.length; i++){
		linkLink[i].className = linkLink[i].className.replace(" active", "");
	}
	//show the current tab and add an "active" class to the button that opened the tab.
	document.getElementById(pageName).style.display = "block";
	event.currentTarget.className += " active";
}

// Adding an active class to the current button (highlight it)
//var header = document.getElementById("link-buttons");
var btns = document.getElementsByClassName("linkLink");
for(var y = 0; y < btns.length; y++){
	btns[y].addEventListener("click", function(){
		var current = document.getElementsByClassName("active");
		//if there is no active class
		if(current.length > 0){
			current[0].className = current[0].className.replace(" active", "");
		}
		//add the active class to the current/clicked button
		this.className += " active";
	});
}
