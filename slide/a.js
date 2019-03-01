var body = document.getElementsByTagName('body')[0];

function linkUrl() {
    location.href = './next.html'
}

var btn = document.getElementById('button');
btn.addEventListener('click', function(){
    body.classList.add('slide-out');
    setTimeout(linkUrl, 1500);
});
