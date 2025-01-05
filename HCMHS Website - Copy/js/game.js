// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
  document.querySelector("#filter-buttons .active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach(card => {
    // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
    if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
      return card.classList.replace("hide", "show");
    }
    card.classList.add("hide");
  });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));







//Countdown Timer Js
    (function() {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
      let birthday = "dec 12, 2023 11:59:59",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {
  
          let now = new Date().getTime(),
            distance = countDown - now;
  
          document.getElementById("days01").innerText = Math.floor(distance / (day)),
            document.getElementById("hours01").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes01").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds01").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content"),
              content2 = document.getElementById("content2");
              timeEnd = document.getElementById("timeEnd");
  
            headline.innerText = "";
            countdown.style.display = "none";
            timeEnd.innerHTML = "Time End";
            content.style.display = "none";
            content2.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());









//View Counter 1
const addCart1 = document.querySelectorAll('.count1');

    const cartShow1 = document.querySelector('.played span1');
    
    for (var i = 0; i < addCart1.length; i++){
    
    addCart1[i].addEventListener('click', () => {
    
    Count1();
    
    })
    
    }
    
    function Count1(){
    
    let prdCount1 = localStorage.getItem('Count1'); 
    prdCount1 = parseInt(prdCount1);
    
    if(prdCount1) {
    
    localStorage.setItem('Count1', prdCount1 + 1);
    cartShow1.textContent = prdCount1 + 1;
    
    }else{
    
    localStorage.setItem('Count1', 1);
    cartShow1.textContent = prdCount1 = 1;
    
     }
   }
    
    function displayCart1() {
    
      let prdCount1 = localStorage.getItem('Count1');
    
      if (prdCount1) {
    
        cartShow1.textContent = prdCount1;
    
      }
    }
    
     displayCart1();



//View Counter 2
const addCart2 = document.querySelectorAll('.count2');

    const cartShow2 = document.querySelector('.played span2');
    
    for (var i = 0; i < addCart2.length; i++){
    
    addCart2[i].addEventListener('click', () => {
    
    Count2();
    
    })
    
    }
    
    function Count2(){
    
    let prdCount2 = localStorage.getItem('Count2'); 
    prdCount2 = parseInt(prdCount2);
    
    if(prdCount2) {
    
    localStorage.setItem('Count2', prdCount2 + 1);
    cartShow2.textContent = prdCount2 + 1;
    
    }else{
    
    localStorage.setItem('Count2', 1);
    cartShow2.textContent = prdCount2 = 1;
    
    }
   }
    
    function displayCart2() {
    
      let prdCount2 = localStorage.getItem('Count2');
    
      if (prdCount2) {
    
        cartShow2.textContent = prdCount2;
    
      }
    }
    
     displayCart2();




//View Counter 3
const addCart3 = document.querySelectorAll('.count3');

const cartShow3 = document.querySelector('.played span3');

for (var i = 0; i < addCart3.length; i++) {

  addCart3[i].addEventListener('click', () => {

    Count3();

  })

}

function Count3() {

  let prdCount3 = localStorage.getItem('Count3');
  prdCount3 = parseInt(prdCount3);

  if (prdCount3) {

    localStorage.setItem('Count3', prdCount3 + 1);
    cartShow3.textContent = prdCount3 + 1;

  } else {

    localStorage.setItem('Count3', 1);
    cartShow3.textContent = prdCount3 = 1;

  }
}

function displayCart3() {

  let prdCount3 = localStorage.getItem('Count3');

  if (prdCount3) {

    cartShow3.textContent = prdCount3;

  }
}

displayCart3();





//View Counter 4
const addCart4 = document.querySelectorAll('.count4');

    const cartShow4 = document.querySelector('.played span4');
    
    for (var i = 0; i < addCart4.length; i++){
    
    addCart4[i].addEventListener('click', () => {
    
    Count4();
    
    })
    
    }
    
    function Count4(){
    
    let prdCount4 = localStorage.getItem('Count4'); 
    prdCount4 = parseInt(prdCount4);
    
    if(prdCount4) {
    
    localStorage.setItem('Count4', prdCount4 + 1);
    cartShow4.textContent = prdCount4 + 1;
    
    }else{
    
    localStorage.setItem('Count4', 1);
    cartShow4.textContent = prdCount4 = 1;
    
    }
   }
    
    function displayCart4() {
    
      let prdCount4 = localStorage.getItem('Count4');
    
      if (prdCount4) {
    
        cartShow4.textContent = prdCount4;
    
      }
    }
    
     displayCart4();





//View Counter 5
const addCart5 = document.querySelectorAll('.count5');

    const cartShow5 = document.querySelector('.played span5');
    
    for (var i = 0; i < addCart5.length; i++){
    
    addCart5[i].addEventListener('click', () => {
    
    Count5();
    
    })
    
    }
    
    function Count5(){
    
    let prdCount5 = localStorage.getItem('Count5'); 
    prdCount5 = parseInt(prdCount5);
    
    if(prdCount5) {
    
    localStorage.setItem('Count5', prdCount5 + 1);
    cartShow5.textContent = prdCount5 + 1;
    
    }else{
    
    localStorage.setItem('Count5', 1);
    cartShow5.textContent = prdCount5 = 1;
    
    }
   }
    
    function displayCart5() {
    
      let prdCount5 = localStorage.getItem('Count5');
    
      if (prdCount5) {
    
        cartShow5.textContent = prdCount5;
    
      }
    }
    
     displayCart5();





//View Counter 6
const addCart6 = document.querySelectorAll('.count6');

    const cartShow6 = document.querySelector('.played span6');
    
    for (var i = 0; i < addCart6.length; i++){
    
    addCart6[i].addEventListener('click', () => {
    
    Count6();
    
    })
    
    }
    
    function Count6(){
    
    let prdCount6 = localStorage.getItem('Count6'); 
    prdCount6 = parseInt(prdCount6);
    
    if(prdCount6) {
    
    localStorage.setItem('Count6', prdCount6 + 1);
    cartShow6.textContent = prdCount6 + 1;
    
    }else{
    
    localStorage.setItem('Count6', 1);
    cartShow6.textContent = prdCount6 = 1;
    
    }
   }
    
    function displayCart6() {
    
      let prdCount6 = localStorage.getItem('Count6');
    
      if (prdCount6) {
    
        cartShow6.textContent = prdCount6;
    
      }
    }
    
     displayCart6();





//View Counter 7
const addCart7 = document.querySelectorAll('.count7');

    const cartShow7 = document.querySelector('.played span7');
    
    for (var i = 0; i < addCart7.length; i++){
    
    addCart7[i].addEventListener('click', () => {
    
    Count7();
    
    })
    
    }
    
    function Count7(){
    
    let prdCount7 = localStorage.getItem('Count7'); 
    prdCount7 = parseInt(prdCount7);
    
    if(prdCount7) {
    
    localStorage.setItem('Count7', prdCount7 + 1);
    cartShow7.textContent = prdCount7 + 1;
    
    }else{
    
    localStorage.setItem('Count7', 1);
    cartShow7.textContent = prdCount7 = 1;
    
    }
   }
    
    function displayCart7() {
    
      let prdCount7 = localStorage.getItem('Count7');
    
      if (prdCount7) {
    
        cartShow7.textContent = prdCount7;
    
      }
    }
    
     displayCart7();





//View Counter 8
const addCart8 = document.querySelectorAll('.count8');

    const cartShow8 = document.querySelector('.played span8');
    
    for (var i = 0; i < addCart8.length; i++){
    
    addCart8[i].addEventListener('click', () => {
    
    Count8();
    
    })
    
    }
    
    function Count8(){
    
    let prdCount8 = localStorage.getItem('Count8'); 
    prdCount8 = parseInt(prdCount8);
    
    if(prdCount8) {
    
    localStorage.setItem('Count8', prdCount8 + 1);
    cartShow8.textContent = prdCount8 + 1;
    
    }else{
    
    localStorage.setItem('Count8', 1);
    cartShow8.textContent = prdCount8 = 1;
    
    }
   }
    
    function displayCart8() {
    
      let prdCount8 = localStorage.getItem('Count8');
    
      if (prdCount8) {
    
        cartShow8.textContent = prdCount8;
    
      }
    }
    
     displayCart8();





//View Counter 9
const addCart9 = document.querySelectorAll('.count9');

    const cartShow9 = document.querySelector('.played span9');
    
    for (var i = 0; i < addCart9.length; i++){
    
    addCart9[i].addEventListener('click', () => {
    
    Count9();
    
    })
    
    }
    
    function Count9(){
    
    let prdCount9 = localStorage.getItem('Count9'); 
    prdCount9 = parseInt(prdCount9);
    
    if(prdCount9) {
    
    localStorage.setItem('Count9', prdCount9 + 1);
    cartShow9.textContent = prdCount9 + 1;
    
    }else{
    
    localStorage.setItem('Count9', 1);
    cartShow9.textContent = prdCount9 = 1;
    
    }
   }
    
    function displayCart9() {
    
      let prdCount9 = localStorage.getItem('Count9');
    
      if (prdCount9) {
    
        cartShow9.textContent = prdCount9;
    
      }
    }
    
     displayCart9();





//View Counter 10
const addCart10 = document.querySelectorAll('.count10');

    const cartShow10 = document.querySelector('.played span10');
    
    for (var i = 0; i < addCart10.length; i++){
    
    addCart10[i].addEventListener('click', () => {
    
    Count10();
    
    })
    
    }
    
    function Count10(){
    
    let prdCount10 = localStorage.getItem('Count10'); 
    prdCount10 = parseInt(prdCount10);
    
    if(prdCount10) {
    
    localStorage.setItem('Count10', prdCount10 + 1);
    cartShow10.textContent = prdCount10 + 1;
    
    }else{
    
    localStorage.setItem('Count10', 1);
    cartShow10.textContent = prdCount10 = 1;
    
    }
   }
    
    function displayCart10() {
    
      let prdCount10 = localStorage.getItem('Count10');
    
      if (prdCount10) {
    
        cartShow10.textContent = prdCount10;
    
      }
    }
    
     displayCart10();




//View Counter 11
const addCart11 = document.querySelectorAll('.count11');

    const cartShow11 = document.querySelector('.played span11');
    
    for (var i = 0; i < addCart11.length; i++){
    
    addCart11[i].addEventListener('click', () => {
    
    Count11();
    
    })
    
    }
    
    function Count11(){
    
    let prdCount11 = localStorage.getItem('Count11'); 
    prdCount11 = parseInt(prdCount11);
    
    if(prdCount11) {
    
    localStorage.setItem('Count11', prdCount11 + 1);
    cartShow11.textContent = prdCount11 + 1;
    
    }else{
    
    localStorage.setItem('Count11', 1);
    cartShow11.textContent = prdCount11 = 1;
    
    }
   }
    
    function displayCart11() {
    
      let prdCount11 = localStorage.getItem('Count11');
    
      if (prdCount11) {
    
        cartShow11.textContent = prdCount11;
    
      }
    }
    
     displayCart11();
