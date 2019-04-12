(function(){

    //要素の取得
    var elements = document.getElementsByClassName("drag-and-drop");

    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }

    //マウスが押された際の関数
    function mdown(e) {

        //クラス名に .drag を追加
        this.classList.add("drag");

        //タッチデイベントとマウスのイベントの差異を吸収
        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //要素内の相対座標を取得
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    //マウスカーソルが動いたときに発火
    function mmove(e) {

        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();

        //マウスが動いた場所に要素を動かす
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    //マウスボタンが上がったら発火
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        //クラス名 .drag も消す
        drag.classList.remove("drag");
    }

})()

// ----------------------------------------------------

//ドラッグできる要素
const target = document.getElementById('target');
//ドロップ可能エリア
const dropArea1 = document.getElementById('dropArea1');
const dropArea2 = document.getElementById('dropArea2');
const dropArea3 = document.getElementById('dropArea3');
const dropArea4 = document.getElementById('dropArea4');


//ドラッグが開始された時
target.addEventListener('dragstart', () => {
        //このサンプルでは未使用
}, false);

//ドラッグ中の時
target.addEventListener('drag', () => {
        //targetを非表示にする
        target.style.display = `none`;
}, false);

//ドラッグが終了した時
target.addEventListener('dragend', () => {
        //targetを表示にする
        target.style.display = `flex`;
}, false);


//ドロップ可能エリアに入った時
dropArea1.addEventListener('dragenter', () => {
        //dropAreaに背景色を付けてわかりやすくする
        dropArea1.style.background = "#E0E0E0";
}, false);

dropArea2.addEventListener('dragenter', () => {
        dropArea2.style.background = "#E0E0E0";
}, false);
dropArea3.addEventListener('dragenter', () => {
        dropArea3.style.background = "#E0E0E0";
}, false);
dropArea4.addEventListener('dragenter', () => {
        dropArea4.style.background = "#E0E0E0";
}, false);




//ドロップ可能エリアから離れた時
dropArea1.addEventListener('dragleave', (event) => {
        //dropAreaの背景色を戻す
        dropArea1.style.background = "none";
}, false);
dropArea2.addEventListener('dragleave', (event) => {
        dropArea2.style.background = "none";
}, false);
dropArea3.addEventListener('dragleave', (event) => {
        dropArea3.style.background = "none";
}, false);
dropArea4.addEventListener('dragleave', (event) => {
        dropArea4.style.background = "none";
}, false);




//ドロップ可能エリア上にある時
dropArea1.addEventListener('dragover', (event) => {
        //drop処理に必要
        event.preventDefault();
}, false);

dropArea2.addEventListener('dragover', (event) => {
        event.preventDefault();
}, false);
dropArea3.addEventListener('dragover', (event) => {
        event.preventDefault();
}, false);
dropArea4.addEventListener('dragover', (event) => {
        event.preventDefault();
}, false);




//ドロップ可能エリアでドロップされた時
dropArea1.addEventListener('drop', () => {
        //targetのHTMLをdropArear1に追加
        dropArea1.appendChild(target);
}, false);

dropArea2.addEventListener('drop', () => {
        dropArea2.appendChild(target);
}, false);
dropArea3.addEventListener('drop', () => {
        dropArea3.appendChild(target);
}, false);
dropArea4.addEventListener('drop', () => {
        dropArea4.appendChild(target);
}, false);
