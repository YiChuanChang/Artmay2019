
var w = window.outerWidth;
var h = window.outerHeight;

var show_detail = document.getElementsByClassName("mask");


function scroll_to_squares(num) {
    if (num == 1) {
        window.scrollTo(0,700);
    }
    else if (num == 2) {
        window.scrollTo(0,1000);
    }

}

function click(num) {
    alert("YES!");
    switch(num) {
        case 1:
            console.log("1!");
            show_detail.innerHTML = '<img src="imgs/index/工作坊橫幅2.png" alt="工作坊橫幅2" title="工作坊橫幅2">';
            break;
        case 2:
            console.log("2!");
            show_detail.innerHTML = '<img src="imgs/index/工作坊橫幅3.png" alt="工作坊橫幅3" title="工作坊橫幅3">';            
            break;
        case 3:
            
            console.log("3!");
            show_detail.innerHTML = '<img src="imgs/index/直撥快樂.png" alt="直撥快樂" title="直撥快樂">';
            break;
        case 4:
            
            console.log("4!");
            show_detail.innerHTML = '<img src="imgs/index/解壓縮.png" alt="解壓縮" title="解壓縮">';
            break;
        case 5:
            
            console.log("5!");
            show_detail.innerHTML = '<img src="imgs/index/前夜祭.png" alt="前夜祭" title="前夜祭">';            
            break;
        case 6:
            
            console.log("6!");
            show_detail.innerHTML = '<img src="imgs/index/工作坊橫幅1.png" alt="工作坊橫幅1" title="工作坊橫幅1">';            
            break;

        case 7:
            
            console.log("7!");
            show_detail.innerHTML = '<img src="imgs/index/工作坊橫幅1.png" alt="工作坊橫幅1" title="工作坊橫幅1">';            
            break;


    }
    
}

function bye() {
    show_detail.style.display = "none";
    console.log("bye");

}


function resizeWindow() {
    
    console.log(w+","+h);

}


