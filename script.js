function sideBarNav() {
	var x = document.getElementById("mySideBar");
	var y = document.getElementById("main");
	var z = document.getElementById("sideBarButton");
	console.log("1");
	if (z.innerHTML === "☰") {
		x.style.width = "250px";
		y.style.marginLeft = "250px";
		z.innerHTML = "X";
		console.log("2");
	}
	else {
		x.style.width = "0px";
		y.style.marginLeft = "0px";
		z.innerHTML = "☰";
		console.log("3");
	}
}

function textShowHide(para, img, but) {
	var x = document.getElementById(para);
	var y = document.getElementById(img);
	var z = document.getElementById(but);
	if (x.style.visibility === "visible") {
		x.style.visibility = "hidden";
		
		x.style.fontSize = "0px";
		x.style.width = "0px";
		x.style.height = "0px";
		y.style.marginRight = "27%";
		z.innerHTML = "Show Text";
	} 	
	else {
		x.style.visibility = "visible";
		x.style.fontSize = "16px";
		x.style.width = "46%";
		x.style.height = "auto";
		y.style.marginRight = "0px";
		z.innerHTML = "Hide Text";
	}
}
