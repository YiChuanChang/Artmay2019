
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
    if(!click_is_valid) return;
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
            scrollTop: onclick_element.offset().top+50
        }, 500);
        if($('#'+section+'-detail .main-title').text() == $(e.target).attr('name')){
            $('#'+section+'-detail').removeClass('activate');
        }else{
            modify_detail($(e.target).attr('name'));
        }
    }
});

$('.arrow-down-wrapper').click(function(){
    // $([document.documentElement, document.body, window]).animate({
    //         scrollTop: $('.time-period').offset().top-80
    // }, 500);
    // console.log('nono');
    $('html, body').animate({
            scrollTop: $('.count-down').offset().top-180
    }, 500);
})

function modify_detail(name){
    jQuery.when(
        jQuery.getJSON('assets/activities.json')
    ).done( function(json) {

        object = json[name];
        $('.activity-detail .main-title').text(name);
        $('.activity-detail .loca_n_time').html('<p><span>地點：'+object.location+'</span></p><p><span>時間：'+object.time+'</span><p>');
        $('.activity-detail .info').html(object.info);
        if(object.apply_link=='null'){
            $('.activity-detail .join').css('display', 'none');
        }else{
            $('.activity-detail .join').css('display', 'block');
            $('.activity-detail .join').attr('href', object.apply_link);

        }
        if(object.fb_link=='null'){
            $('.activity-detail .fb_link').css('display', 'none');
        }else{
            $('.activity-detail .fb_link').attr('href', object.fb_link);
        }
        if(object.apply_link=='null' && object.fb_link=='null'){
            $('.activity-detail .link-wrap').css('display', 'none');
        }else{
            $('.activity-detail .link-wrap').css('display', 'block');
        }
        if(object.teacher=='null'){
            $('.activity-detail .teacher').css('display', 'none');
            $('.activity-detail .teacher-info').css('display', 'none');
        }else{
            $('.activity-detail .teacher').css('display', 'block');
            $('.activity-detail .teacher-info').css('display', 'block');
            $('.activity-detail .teacher-name').html(object.teacher);
            $('.activity-detail .teacher-info').html(object.teacher_describe);
        }

        $('.activity-detail .h-image').attr('src', object.img_src);
        
        
    });
}
var scroll_workshop = false;
var activity_workshop = false;
$(window).scroll(function() {
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
            $("#"+id).animate().animate({scrollLeft: 200}, 800, function(){
                $("#"+id).animate().animate({scrollLeft: -200}, 800);
            });
        }, 500);

        return true
    }
    return false
}

var click_is_valid = true;

$('.dragscroll').on('scroll', function() {
    click_is_valid = false;
});

    // change to correct selector of the clickable element:
$("body").on('mousedown', function(e) {
    click_is_valid = true;
});


