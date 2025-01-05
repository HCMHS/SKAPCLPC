var load = document.querySelector('.load');
var mydiv = document.querySelector('.mydiv');
var text = document.querySelector('.text-load');
var percent = document.querySelector('.percent');
var progress = document.querySelector('.progress');
var count = 3;
var per = 9;
var loading = setInterval(animate, 20);

function animate() {
  if (count == 100 && per == 300) {
    load.style.display = "none";
    mydiv.style.display = "block";
    text.textContent = "Completed";
    text.style.fontSize = "70px";
    text.classList.add("add");
    clearInterval(loading);
  } else {
    per = per + 3;
    count = count + 1;
    progress.style.width = per + 'px';
    percent.textContent = count + '%';
  }
}
