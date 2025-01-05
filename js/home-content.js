//Time message js start
/*const time = new Date().getHours();
if (time == 05) {
  document.getElementById("time-msg").innerHTML = "Good Morning";
}
else if (time == 06) {
  document.getElementById("time-msg").innerHTML = "Good Morning";
}
else if (time == 07) {
  document.getElementById("time-msg").innerHTML = "Good Morning";
}
else if (time == 08) {
  document.getElementById("time-msg").innerHTML = "Good Morning";
}
else if (time == 09) {
  document.getElementById("time-msg").innerHTML = "Good Morning";
}
else if (time == 10) {
  document.getElementById("time-msg").innerHTML = "Good Morning";
}
else if (time == 11) {
  document.getElementById("time-msg").innerHTML = "Good Morning";
}
else if (time == 11.59) {
  document.getElementById("time-msg").innerHTML = "Good Morning";
}
else if (time == 12.00) {
  document.getElementById("time-msg").innerHTML = "Good Midday";
}
else if (time == 12.01) {
  document.getElementById("time-msg").innerHTML = "Good Afternoon";
}
else if (time == 13) {
  document.getElementById("time-msg").innerHTML = "Good Afternoon";
}
else if (time == 14) {
  document.getElementById("time-msg").innerHTML = "Good Afternoon";
}
else if (time == 15) {
  document.getElementById("time-msg").innerHTML = "Good Afternoon";
}
else if (time == 16) {
  document.getElementById("time-msg").innerHTML = "Good Afternoon";
}
else if (time == 17) {
  document.getElementById("time-msg").innerHTML = "Good Afternoon";
}
else if (time == 17.59) {
  document.getElementById("time-msg").innerHTML = "Good Afternoon";
}
else if (time == 18) {
  document.getElementById("time-msg").innerHTML = "Good Evening";
}
else if (time == 19) {
  document.getElementById("time-msg").innerHTML = "Good Evening";
}
else if (time == 20) {
  document.getElementById("time-msg").innerHTML = "Good Evening";
}
else if (time == 21) {
  document.getElementById("time-msg").innerHTML = "Good Evening";
}
else if (time == 22) {
  document.getElementById("time-msg").innerHTML = "Good Evening";
}
else if (time == 23) {
  document.getElementById("time-msg").innerHTML = "Good Evening";
}
else if (time == 23.59) {
  document.getElementById("time-msg").innerHTML = "Good Evening";
}
else if (time == 24.00) {
  document.getElementById("time-msg").innerHTML = "Good Midnight";
}
else {
  document.getElementById("time-msg").innerHTML = "Good Night";
}*/
//Time message js end










//Auto slider js
/*var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}*/
// Auto Slide   if you need auto slide ,remove the commit "//"
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
  // Change image every 5 seconds
}
//Auto slider js end








//Digital clock js start
//Javascript for switch clock format
/*const formatSwitchBtn = document.querySelector(".format-switch-btn"); formatSwitchBtn.addEventListener("click", () => { 
  formatSwitchBtn.classList.toggle("active"); 
  
var formatValue = formatSwitchBtn.getAttribute("data-format");

if(formatValue === "12"){ 
  formatSwitchBtn.setAttribute("data-format", "24");
}
else{ 
  formatSwitchBtn.setAttribute("data-format", "12");
}
});

function clock(){ 
  var today = new Date();

var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
let period = "AM";




//Set the time period (AM/PM)
if(hours >= 12){ 
  period = "PM";
}

//Set the 12-hour clock format
var formatValue = formatSwitchBtn.getAttribute("data-format");

if (formatValue === "12") {
  hours = hours > 12 ? hours % 12 : hours;
}

//Add the 0 for the values Lower than 10
if (hours < 10){
  hours = "0" + hours;
}

if (minutes < 10) { 
  minutes = "0" + minutes;
}

if (seconds < 10) {
  seconds = "0" + seconds;
}

//Get the date in javascript
var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", { weekday: "long" });
const monthName = today.toLocaleString("default", { month: "short" });
document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;




document.querySelector(".hours").innerHTML = hours;
document.querySelector(".minutes").innerHTML = minutes;
document.querySelector(".seconds").innerHTML = seconds; 
document.querySelector(".period").innerHTML = period;
}

var updateClock = setInterval(clock, 1000);

//Javascript for dot menu toggle
const dotmenuBtn = document.querySelector(".dot-menu-btn"); 
const dotMenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click", () => { 
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => { 
  if(e.target.id !== "active-menu"){ dotMenu.classList.remove("active");
  }
});*/
//Digital clock js end








//Auto Popup js start
    const popupScreen = document.querySelector(".popup-screen");
    const popupBox = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".close-btn");
  
    window.addEventListener("load", () => {
      setTimeout(() => {
        popupScreen.classList.add("active");
      }, 2000); //Popup the screen in 02 seconds after the page is loaded.
    });
  
    closeBtn.addEventListener("click", () => {
      popupScreen.classList.remove("active"); //Close the popup screen on click the close button.
      //Create a cookie for a day (to expire within a day) on click the close button.
      document.cookie = "HCCSC=PopUp; max-age=" + 24*60*60; //1 day = 24 hours = 24*60*60
    });
  
    //Use the created cookie to hide or show the popup screen.
    const WebsiteCookie = document.cookie.indexOf("HCCSC=");
  
    if (WebsiteCookie != -1) {
      popupScreen.style.display = "none"; //Hide the popup screen if the cookie is not expired.
    }
    else {
      popupScreen.style.display = "flex"; //Show the popup screen if the cookie is expired.
    }
 //Auto Popup js end
 









//Student Counter JS Start
    let valueDisplays = document.querySelectorAll(".counter");
    let interval = 9000;
    
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
//Student Counter JS Start








//Rotating Image Slider Start
const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
//Rotating Image Slider Start









//news-corner js start
const wrapper = document.querySelector(".wrapper-news");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper-news i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 100 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
//news-corner js end