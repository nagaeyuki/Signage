// $(function() {
//     // 設定
//     var $width = 640; // 横幅
//     var $height = 300; // 高さ
//     var $interval = 3000; // 切り替わりの間隔（ミリ秒）
//     var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
//     $("#slide ul li").css({
//         "position": "relative",
//         "overflow": "hidden",
//         "width": $width,
//         "height": $height
//     });
//     $("#slide ul li").hide().css({
//         "position": "absolute",
//         "top": 0,
//         "left": 0
//     });
//     $("#slide ul li:first").addClass("active").show();
//     setInterval(function() {
//         var $active = $("#slide ul li.active");
//         var $next = $active.next("li").length ? $active.next("li") : $("#slide ul li:first");
//         $active.fadeOut($fade_speed).removeClass("active");
//         $next.fadeIn($fade_speed).addClass("active");
//     }, $interval);
// });
$(function(){
    var $setElm = $('.viewer'),
    fadeSpeed = 1500,
    switchDelay = 5000;

    $setElm.each(function(){
        var targetObj = $(this);
        var findUl = targetObj.find('ul');
        var findLi = targetObj.find('li');
        var findLiFirst = targetObj.find('li:first');

        findLi.css({display:'block',opacity:'0',zIndex:'99'});
        findLiFirst.css({zIndex:'100'}).stop().animate({opacity:'1'},fadeSpeed);

        setInterval(function(){
            findUl.find('li:first-child').animate({opacity:'0'},fadeSpeed).next('li').css({zIndex:'100'}).animate({opacity:'1'},fadeSpeed).end().appendTo(findUl).css({zIndex:'99'});
        },switchDelay);
    });
});
