function myFunction() {
    var x = document.getElementById("test");
    
    var searchTerm = document.getElementById("form1").value;
    console.log(searchTerm)
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}