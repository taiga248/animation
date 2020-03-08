$(function(){
    let page=0;
    const slide = document.getElementById("slide")
    //const slide__img = document.getElementsByClassName("slide__img")
    let lastPage = slide.childElementCount -1

    //slide__img.style.display = "none"
    //slide__img[page].style.display = "block"
    $("#slide img").css("display","none");
    $("#slide img").eq(page).css("display","block");
    
    function changePage(){
        $("#slide img").fadeOut(1300);
        $("#slide img").eq(page).fadeIn(1300);
        /* slide__img.classList.add('fadeout').setTimeout(() => { 
             slide__img.style.display = "none"; 
        }, 1300);
          
        slide__img[page].classList.add("fading").setTimeout(() => {
             slide__img.style.display = "block"; 
        }, 1300); */
    }
    
    let Timer;
    function startTimer(){
          Timer =setInterval(function(){
               page === lastPage ? page=0 : page++;
               changePage();
          },4000);
    }

    function stopTimer(){
         clearInterval(Timer);
    }

    const left = document.getElementById("left")
    const right = document.getElementById("right")
    right.addEventListener("click", () => {
         stopTimer();
         startTimer();
         page === lastPage ? page=0 : page++;
         changePage();
    })
    left.addEventListener("click", () => {
         stopTimer();
         startTimer();
         page === 0 ? page=lastPage : page--;
         changePage();
    })
    startTimer();
});