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
	if (x.style.visibility === "visible") {
		x.style.visibility = "hidden";
		x.style.width = "0px";
		x.style.height = "0px";
	} 	
	else {
		x.style.visibility = "visible";
		x.style.width = "49%";
		x.style.height = "auto";
	}
}

function imgSizeChange() {
	var x = document.getElementById("greatPyramidOfGizaImg");
	var y = document.getElementById("greatPyramidOfGizaPara");
	if (y.style.visibility === "hidden") {
		x.style.width = "98%";
	}
	else {
		x.style.width = "49%";
	}
}
