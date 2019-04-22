
var w = window.outerWidth;
var h = window.outerHeight;

var show_detail = document.getElementsByClassName("mask");


$( document ).ready(function(){
    var x = setInterval(function() {
        var start_day  = new Date("April 30, 2019 00:00:00").getTime();
        var time_now = new Date().getTime();
        distance = start_day - time_now
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
        }
        $('.count-down #day').text(days);
        $('.count-down #hour').text(hours);
        $('.count-down #minute').text(minutes);
        $('.count-down #second').text(seconds);
    }, 1000); 
})


$('body').click(function(e){
    $('.activity-block').removeClass('activate');
    $('.activity-detail').removeClass('activate');
    
    if($(e.target).hasClass('activity-detail')){
        $(e.target).addClass('activate');
    }
    if($(e.target).parentsUntil('.activity-detail').last().hasClass('detail-container')){
        $(e.target).parentsUntil('.activity-detail').last().parents().addClass('activate');
    }

    if($(e.target).hasClass('activity-block')){
        $(e.target).addClass('activate');
        section = $(e.target).parents().parents().attr('id');
        $('#'+section+'-detail').addClass('activate');
        onclick_element = $(e.target)
        $([document.documentElement, document.body]).animate({
            scrollTop: onclick_element.offset().top-80
        }, 500);
        // modify_detail($(e.target).attr('name'));
    }
});

$('.arrow-down-wrapper').click(function(){
    $([document.documentElement, document.body]).animate({
            scrollTop: $('.time-period').offset().top-80
        }, 500);
})

function modify_detail(name){
    console.log('hi')
    jQuery.when(
        jQuery.getJSON('assets/activities.json')
    ).done( function(json) {
        // console.log(json['前夜祭：夜行實驗'].time)

        object = json[name]
        $('.activity-detail .h-image').attr('src', object.img_src);
        $('.activity-detail .title').text(name);
        $('.activity-detail .info').html(object.info);
        $('.activity-detail .loca_n_time').html('地點：'+object.location+'<br>時間：'+object.time);
        if(object.apply_link=='null'){
            $('.activity-detail .join').css('display', 'none');
        }else{
            $('.activity-detail .join').css('display', 'block');
        }
    });
}
var scroll_workshop = false;
var activity_workshop = false;
$(window).scroll(function() {
    console.log(scroll_workshop)
    if(!scroll_workshop){
        scroll_workshop = scroll('workshop');
    }
    if(!activity_workshop){
        activity_workshop = scroll('activity');
    }
});

function scroll(id){
    var top_of_element = $("#"+id).offset().top;
    var bottom_of_element = $("#"+id).offset().top + $("#"+id).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        setTimeout(function() {
            console.log('hi')
            $("#"+id).animate().animate({scrollLeft: 200}, 800, function(){
                $("#"+id).animate().animate({scrollLeft: -200}, 800);
            });
        }, 500);

        return true
    }
    return false
}
