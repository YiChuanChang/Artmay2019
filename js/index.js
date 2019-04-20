
var w = window.outerWidth;
var h = window.outerHeight;

var show_detail = document.getElementsByClassName("mask");


function scroll_to_squares(num) {
    if (wdth > 1000) {
        console.log("YES");
        if (num == 1) {

            window.scrollTo(0,750);
        }
        else if (num == 2) {
        

            window.scrollTo(0,1450);
        }
        
    }
    else {
        console.log("NO");
    }
    
    

}


function openup() {
    document.getElementsByClassName("square_detail")[0].style.display = "block";
    
}

function openup2() {
    document.getElementsByClassName("square_detail2")[0].style.display = "block";
    
}



$('.slider-for').each(function(key, item) {

    var sliderIdName = 'slider' + key;
    var sliderNavIdName = 'sliderNav' + key;
  
    this.id = sliderIdName;
    $('.slider-nav')[key].id = sliderNavIdName;
  
    var sliderId = '#' + sliderIdName;
    var sliderNavId = '#' + sliderNavIdName;
  
    $(sliderId).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: sliderNavId
    });
  
    $(sliderNavId).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: sliderId,
      dots: true,
      arrows: true,
      centerMode: false,
      focusOnSelect: true
    });
  
  });