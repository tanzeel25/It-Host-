function myFunction() {
    var x = document.getElementById("mynav-menu");
  if (x.className === "topnav") {
       x.className += " responsive";
   } else {
        x.className = "topnav";
  }
}
