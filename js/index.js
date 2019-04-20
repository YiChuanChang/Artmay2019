
var show_detail = document.getElementById("square_detail");
var show_detail2 = document.getElementById("square_detail2");
var myscroll = document.getElementsByClassName("scrollmenu");
var myscroll2 = document.getElementsByClassName("scrollmenu2");


function scroll_to_squares(num) {
    if (num == 1) {
        window.scrollTo(0,680);
    }
    else if (num == 2) {
        window.scrollTo(0,1000);
    }

}




function show(num) {
    //document.getElementsByClassName("square_detail")[0].style.display = "block";
    //document.getElementsByClassName("arrow_up")[0].style.display= "block";
    //document.getElementsByClassName("detail_img")[0].style.display= "block";
    
}



function bye() {
    show_detail.style.display = "none";
    console.log("bye");

}


