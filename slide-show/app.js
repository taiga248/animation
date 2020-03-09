document.addEventListener('DOMContentLoaded', () => {
    const slide = document.getElementById("slide")
    const slide__img = document.getElementsByClassName("slide__img")
    const left = document.getElementById("left")
    const right = document.getElementById("right")
    const changeTime = 5000
    let lastPage = slide.childElementCount - 1
    let page = 0
    let Timer

    function changePage(){
         for(let i=0; i<slide__img.length; i++){
              if(page === i){
                   slide__img[page].classList.remove("fadeout")
                   slide__img[page].classList.add("fading")
               }else{
                   slide__img[i].classList.remove("fading")
                   slide__img[i].classList.add("fadeout")
               }
          }
     }

    function startTimer(){
          Timer =setInterval(() => {
               page === lastPage ? page=0 : page++
               changePage()
          }, changeTime)
    }

    function stopTimer(){
         clearInterval(Timer)
    }

    right.addEventListener("click", () => {
         stopTimer()
         startTimer()
         page === lastPage ? page=0 : page++
         changePage()
    })
    left.addEventListener("click", () => {
         stopTimer()
         startTimer()
         page === 0 ? page = lastPage : page--
         changePage()
    })

    startTimer()
})