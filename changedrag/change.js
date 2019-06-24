var item = document.getElementById("target")
var source;

// start
function dragStarted(evt) {
  source = evt.target;
  evt.dataTransfer.setData("text/plain", evt.target.innerHTML);
  evt.dataTransfer.effectAllowed = "move";
}
// doing
function draggingOver(evt) {
  evt.preventDefault();
  evt.dataTransfer.dropEffect = "move";
}
// end
function dropped(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  source.innerHTML = evt.target.innerHTML;
  evt.target.innerHTML = evt.dataTransfer.getData("text/plain");
}
/*
item.addEventListener('drag',() => {
  item.style.display = 'none';

},false)
item.addEventListener('dragend', () => {
  item.style.display = 'block';
},false)
*/
