document.addEventListener("DOMContentLoaded", () => {
  const slide = document.getElementById("slide");
  const slide__item = document.getElementsByClassName("slide__item");
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const lastPage = slide.childElementCount - 1;
  const changeTime = 5000;

  let activItem = 0;
  let Timer;

  function nextPage() {
    for (let i = 0; i < slide__item.length; i++) {
      if (activItem === i) {
        slide__item[activItem].classList.remove("fadeout");
        slide__item[activItem].classList.add("fadin");
      } else {
        slide__item[i].classList.remove("fadin");
        slide__item[i].classList.add("fadeout");
      }
    }
  }

  function startTimer() {
    Timer = setInterval(() => {
      activItem === lastPage ? (activItem = 0) : activItem++;
      nextPage();
    }, changeTime);
  }

  function stopTimer() {
    clearInterval(Timer);
  }

  right.addEventListener("click", () => {
    stopTimer();
    startTimer();
    activItem === lastPage ? (activItem = 0) : activItem++;
    nextPage();
  });
  left.addEventListener("click", () => {
    stopTimer();
    startTimer();
    activItem === 0 ? (activItem = lastPage) : activItem--;
    nextPage();
  });

  startTimer();
});
