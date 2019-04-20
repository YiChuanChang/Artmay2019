
var w = window.outerWidth;
var h = window.outerHeight;

var show_detail = document.getElementsByClassName("mask");


function scroll_to_squares(num) {
    if (num == 1) {
        window.scrollTo(0,750);
    }
    else if (num == 2) {
        window.scrollTo(0,1000);
    }

}


function bye() {
    show_detail.style.display = "none";
    console.log("bye");

}
function openup() {
    document.getElementsByClassName("square_detail")[0].style.display = "block";
    
}

function openup2() {
    document.getElementsByClassName("square_detail2")[0].style.display = "block";
    
}

