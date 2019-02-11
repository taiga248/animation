var body = document.getElementsByTagName('body')[0];

function linkUrl() {
    location.href = './x.html'
}

var bt3 = document.getElementById('button3');
bt3.addEventListener('click', function(){
    body.classList.add('anime3');
    setTimeout(linkUrl, 1500);
});
