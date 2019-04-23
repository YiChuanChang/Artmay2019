// Get the header
var header = document.getElementById("nav");
// Get the offset position of the navbar
var sticky = header.offsetTop;
$(window).scroll(myFunction)
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


$( document ).ready(function(){
	console.log('hi');
    $('body').css('opacity', '1');
})
