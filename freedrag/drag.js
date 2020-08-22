(() => {
  const items = document.getElementsByClassName("item");
  let event;
  let x;
  let y;

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mousedown", mouseDown, false);
    items[i].addEventListener("touchstart", mouseDown, false);
  }

  function mouseDown(e) {
    this.classList.add("drag");
    e.type === "mousedown" ? (event = e) : (event = e.changedTouches[0]);
    x = event.pageX - this.offsetLeft;
    y = event.pageY - this.offsetTop;

    document.body.addEventListener("mousemove", nouseMove, false);
    document.body.addEventListener("touchmove", nouseMove, false);
  }

  function nouseMove(e) {
    const drag = document.getElementsByClassName("drag")[0];
    e.type === "mousemove" ? (event = e) : (event = e.changedTouches[0]);
    e.preventDefault();

    drag.style.top = event.pageY - y + "px";
    drag.style.left = event.pageX - x + "px";

    drag.addEventListener("mouseup", mouseUp, false);
    document.body.addEventListener("mouseleave", mouseUp, false);
    drag.addEventListener("touchend", mouseUp, false);
    document.body.addEventListener("touchleave", mouseUp, false);
  }

  function mouseUp(e) {
    const drag = document.getElementsByClassName("drag")[0];

    document.body.removeEventListener("mousemove", nouseMove, false);
    drag.removeEventListener("mouseup", mouseUp, false);
    document.body.removeEventListener("touchmove", nouseMove, false);
    drag.removeEventListener("touchend", mouseUp, false);

    drag.classList.remove("drag");
  }
})();
