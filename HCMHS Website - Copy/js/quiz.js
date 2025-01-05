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
  
      let birthday = "dec 22, 2023 23:59:59",
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
  
            headline.innerText = "";
            countdown.style.display = "none";
            content.style.display = "none";
            content2.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());