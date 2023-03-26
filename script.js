function openNav() {
	document.getElementById("mySideBar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySideBar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
}

function textShowHide() {
	var x = document.getElementById("greatPyramidOfGizaPara");
	var y = document.getElementById("greatPyramidOfGizaImg");
	var z = document.getElementById("greatPyramidOfGizaButton");
	if (x.style.visibility === "visible") {
		x.style.visibility = "hidden";
		x.style.width = "0px";
		x.style.height = "0px";
		y.style.paddingRight = "25%";
		z.innerHTML = "Show Text";
	} 	
	else {
		x.style.visibility = "visible";
		x.style.width = "46%";
		x.style.height = "auto";
		y.style.paddingRight = "0px";
		z.innerHTML = "Hide Text";
	}
}
