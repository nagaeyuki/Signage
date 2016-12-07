var test = 0;

$(function() {

	var $setElm = $('.viewer'),
    fadeSpeed = 1300,
    switchDelay = 7000;

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

// 	setInterval(function () {
//         if (test == 0) {
//             console.log("1");
//             test = 1;
//             page1();
//         } else if (test == 1) {
//             console.log("2");
//             test = 2;
//             page2();
//         } else {
//             console.log("3");
//             test = 0;
//             page3();
//         }
//     }, 10000);
//
// 	function page1() {
//         $('#pic1').show();
// 		$('#pic2').hide();
// 		$('#pic3').hide();
//     }
//
//     function page2() {
//         $('#pic2').show();
// 		$('#pic3').hide();
// 		$('#pic1').hide();
//     }
//
//
//     function page3() {
//         $('#pic3').show();
// 		$('#pic1').hide();
// 		$('#pic2').hide();
//     }
//
// });
