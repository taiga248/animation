//ドラッグできる要素
const target = document.getElementById('target');
//ドロップ可能エリア
const dropArea1 = document.getElementById('dropArea1');
const dropArea2 = document.getElementById('dropArea2');


//ドラッグ中の時
target.addEventListener('drag', () => {
        //targetを非表示にする
        target.style.display = `none`;
});


//ドラッグが終了した時
target.addEventListener('dragend', () => {
        //targetを表示にする
        target.style.display = `flex`;
});


//ドロップ可能エリアに入った時
dropArea1.addEventListener('dragenter', () => {
        //dropAreaに背景色を付けてわかりやすくする
        dropArea1.style.background = "#E0E0E0";
});
dropArea2.addEventListener('dragenter', () => {
        dropArea2.style.background = "#E0E0E0";
});


//ドロップ可能エリアから離れた時
dropArea1.addEventListener('dragleave', () => {
        //dropAreaの背景色を戻す
        dropArea1.style.background = "none";
});
dropArea2.addEventListener('dragleave', () => {
        dropArea2.style.background = "none";
});


//ドロップ可能エリア上にある時
dropArea1.addEventListener('dragover', (event) => {
        //drop処理に必要
        event.preventDefault();
});

dropArea2.addEventListener('dragover', (event) => {
        event.preventDefault();
});


//ドロップ可能エリアでドロップされた時
dropArea1.addEventListener('drop', () => {
        //targetのHTMLをdropArea1に追加
        dropArea1.appendChild(target);
});

dropArea2.addEventListener('drop', () => {
        dropArea2.appendChild(target);
});
