

function getCSV() {
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "/signage/csv/event.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
    req.onload = function() {
        convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    };
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str) { // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (var i = 0; i < tmp.length; ++i) {
        result[i] = tmp[i].split(',');
    }
    list_view(result);
}

function list_view(result) {
    var viewer = document.getElementById('viewer');
    viewer.innerHTML = "<ul>";
    var li = "";
    var list = []; //一行保存
    for (var i = 1; i < result.length - 1; i++) {
        for (var j = 0; j < result[i].length; j++) {
            li += "<li>" + result[i][j] + "</li>";
        }
        list[i - 1] = li;
        li = "";
        viewer.innerHTML += list[i - 1];
    }
    viewer.innerHTML += "</ul>";
		setTimeout("test()",5000);

}
	function test() {

	    var $setElm = $('#viewer'),
	        fadeSpeed = 1300,
	        switchDelay = 5000;

	    $setElm.each(function() {
	        var targetObj = $(this);
	        var findUl = targetObj.find('ul');
	        var findLi = targetObj.find('li');
	        var findLiFirst = targetObj.find('li:first');

	        findLi.css({
	            display: 'block',
	            opacity: '0',
	            zIndex: '99'
	        });
	        findLiFirst.css({
	            zIndex: '100'
	        }).stop().animate({
	            opacity: '1'
	        }, fadeSpeed);

	        setInterval(function() {
	            findUl.find('li:first-child').animate({
	                opacity: '0'
	            }, fadeSpeed).next('li').css({
	                zIndex: '100'
	            }).animate({
	                opacity: '1'
	            }, fadeSpeed).end().appendTo(findUl).css({
	                zIndex: '99'
	            });
	        }, switchDelay);
	    });
	});
