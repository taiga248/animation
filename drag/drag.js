const target = document.getElementById("target");
const area_1 = document.getElementById("area_1");
const area_2 = document.getElementById("area_2");

target.addEventListener("drag", () => {
  target.style.display = `none`;
});
target.addEventListener("dragend", () => {
  target.style.display = `block`;
});

area_1.addEventListener("dragenter", () => {
  area_1.style.background = "#E0E0E0";
});
area_2.addEventListener("dragenter", () => {
  area_2.style.background = "#E0E0E0";
});

area_1.addEventListener("dragleave", () => {
  area_1.style.background = "none";
});
area_2.addEventListener("dragleave", () => {
  area_2.style.background = "none";
});

area_1.addEventListener("dragover", event => {
  event.preventDefault();
});
area_2.addEventListener("dragover", event => {
  event.preventDefault();
});

area_1.addEventListener("drop", () => {
  area_1.appendChild(target);
});
area_2.addEventListener("drop", () => {
  area_2.appendChild(target);
});
