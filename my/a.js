var text = document.getElementById('memo');
var btns = document.getElementById('btn');
var cnt=0

btns.addEventListener('click',function(){
  if(cnt%2 == 0){
    text.innerHTML = 'Ito';
    cnt++;
  }else{
    text.innerHTML = 'Taiga';
    cnt++;
  }
}
);

var body = document.getElementsByTagName('body')[0];

function linkUrl() {
    location.href = 'https://google.com'
}

var btns2 = document.getElementById('btn2');
btn2.addEventListener('click', function(){
    body.classList.add('anime3');
    setTimeout(linkUrl, 1500);
});

