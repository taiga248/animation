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
