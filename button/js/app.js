const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");

btn_1.onmousemove = function (e) {
  const x = e.pageX - btn_1.offsetLeft;
  const y = e.pageY - btn_1.offsetTop;
  btn_1.style.setProperty("--x", x + "px");
  btn_1.style.setProperty("--y", y + "px");
};
btn_2.onmousemove = function (e) {
  const x = e.pageX - btn_2.offsetLeft;
  const y = e.pageY - btn_2.offsetTop;
  btn_2.style.setProperty("--x", x + "px");
  btn_2.style.setProperty("--y", y + "px");
};