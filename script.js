function openNav() {
	document.getElementById("mySideBar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySideBar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
}

function myFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}