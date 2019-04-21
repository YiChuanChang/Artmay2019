
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
        }, 1000);
        modify_detail($(e.target).attr('name'));
    }
})
function modify_detail(name){
    if(name=='前夜祭：夜行實驗'){
        $('.activity-detail .h-image').attr('src', 'imgs/index/拼貼工作坊橫幅.png');
        $('.activity-detail .title').text('前夜祭：夜行實驗');
        $('.activity-detail .info').html('大學作為一個文化單體，承載著類部落文明的次文化實體：有院系的聚落、「GPA」的階級、有例行祭典（如藝術季、文學獎、彩虹季、各社團成發等），而清華大學校徽更形似祭祀魔法陣，圖形背後潛藏著認同及信仰。\
                        <br><br>\
                        「祭」的概念將大學作為一文化主題，「前夜祭」是整個祭典的序幕—探索清華大學這個龐大的文化單體前，缺乏一種轉化的儀式—為使參與者走入平時隱不可見的部落文明，學生化為考古探險隊，身穿實驗袍、持手電筒，挖掘已於清大發展63年的文化痕跡。\
                        <br><br>\
                        夜行的探險作為前夜祭儀式，走入幻化為祭典狀態的清華文化，與部落文明為伍，而學生作為部落住民參與本祭典、神壇祭祀、後夜祭等活動，置身部落文明，在觀看與被觀看中，實踐文化自身。\
                        <br><br>\
                        融合學校特色組成考古隊探險，去探索學校各處容易被忽略的奇特之處，挖掘出掩埋在學校各個角落的藝術元素，拉開藝術祭的序曲。');
        $('.activity-detail .loca_n_time').html('地點：大禮堂前集合，繞境整個校園<br>時間：4/30(二) 19:30～22:30');
        $('.activity-detail .join').css('display', 'none');

    }else if(name=='時光靜止'){
        $('.activity-detail .h-image').attr('src', 'imgs/index/時光靜止橫幅.png');
        $('.activity-detail .title').text('時光靜止');
        $('.activity-detail .info').html('在這資訊爆炸的時代，現代人醒著的每分每秒都在吸收大量的訊息.......<br>\
                                            那些連正確性都有待商榷的資訊默默成為無形的負擔，所以就讓時光靜止吧！！<br>\
                                            就讓我們帶著一顆快樂的心，一起放鬆的躺在草原上享受一個短暫的午後時光～');
        $('.activity-detail .loca_n_time').html('地點：清大草坪<br>時間：5/22(三)　15:30~16:30');
        $('.activity-detail .join').css('display', 'none');
    }else if(name=='集體幻／喚愛'){
        $('.activity-detail .h-image').attr('src', 'imgs/index/集體的喚愛橫幅.png');
        $('.activity-detail .title').text('集體幻／喚愛');
        $('.activity-detail .info').html('自我填補  自我安慰  自我救贖<br>\
                                            <br>\
                                            然後靜靜地<br>\
                                            <br>\
                                            等待時間沖淡這一切<br>\
                                                  <br>\
                                            原本   都是習慣一個人獨自經歷這些<br>\
                                                   <br>\
                                            這次<br>\
                                                  <br>\
                                            失落之眾<br>\
                                            頹廢之眾<br>\
                                                   <br>\
                                            這些支離破碎的「我」<br>\
                                                  <br>\
                                            將一同<br>\
                                            召喚那些曾自以為是愛的愛<br>\
                                                  <br>\
                                            將一同<br>\
                                            幻想那些回不去的人間時光<br>\
                                                   <br>\
                                            彷彿<br>這一切都與慾望無關了<br>只是想要一個答案罷了<br>\
                                                   <br>\
                                            彷彿<br>不再是一個人了<br>儘管各自始終還是想著各自的事情<br>\
                                                   <br>\
                                            但那又如何<br>\
                                                   <br>\
                                            只是想要擺脫匱乏罷了<br>只是希望這些都是真的罷了<br>\
                                                   <br>\
                                            這是一場道別儀式<br>是真是假   不必較真<br>因為它<br>跨公私  跨虛實  跨離別  跨盈缺<br>\
                                                     <br>\
                                            在儀式之中尋求解放<br>祭奠那些「未完」、「未滿」、「未止」<br>\
                                            <br>\
                                            這些虛假會比真實更真實');
        $('.activity-detail .loca_n_time').html('地點：湖心亭<br>時間：5/23(四)23:30～00:20');
        $('.activity-detail .join').css('display', 'none');
    }else if(name=='直播快樂'){
        $('.activity-detail .h-image').attr('src', 'imgs/index/直播快樂橫幅.png');
        $('.activity-detail .title').text('直播快樂');
        $('.activity-detail .info').html('誠摯邀請網路世界的善男善女，一同參與我生命中最重要的一天。<br>\
                                                    此活動透過網路直播功能，讓網路上的觀眾能與壽星同享慶生時光，並得以及時於留言處留下對壽星的誠摯祝福。<br>\
                                            <br>\
                                                    現代人對生日的想像就好像一種社交文化的宗教狂熱；獲得越多祝福越是令人感動，得到越多注目越令人欣喜。溫暖的語句、赤誠的祝福，壓縮成平面的文字，快速、即時攤在面前，在躁動的數據流下，慶生顯得格外冷清。<br>\
                                                    作為一位網路觀眾，對於陌生人突如其來的慶生邀請，不再需要戴上熟人面具，藏匿於鍵盤之後，觀賞壽星的孤獨，也算是一種消遣。<br>\
                                            <br>\
                                                    人與人之間的情感，再也不需要實際說出口來，然而就算我們之間隔上了一道屏幕，我們還是可以像對鏡子說話一樣，練習表達真實的祝福以及關懷。面對他人，就算我們還是有所猜忌，我麼還是能夠學習珍惜他人的愛，收進心中成為滿滿的感恩。');
        $('.activity-detail .loca_n_time').html('地點：阿特梅官方fb/ig直播<br>時間：5/24(五) 21:30-22:00');
        $('.activity-detail .join').css('display', 'none');
    }
}
