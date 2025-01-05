/*Countdown Timer JS Start*/
//All
/*(function() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Jul 09, 2023 16:32:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        let countdown = document.getElementById("countdown"),
          text20 = document.getElementById("text20"),
          text21 = document.getElementById("text21"),
          text22 = document.getElementById("text22"),
          text01 = document.getElementById("text01"),
          text02 = document.getElementById("text02"),
          text03 = document.getElementById("text03"),
          text04 = document.getElementById("text04"),
          text05 = document.getElementById("text05"),
          text06 = document.getElementById("text06"),
          text07 = document.getElementById("text07"),
          text08 = document.getElementById("text08"),
          text09 = document.getElementById("text09"),
          text10 = document.getElementById("text10"),
          content20 = document.getElementById("content20"),
          content21 = document.getElementById("content21"),
          content22 = document.getElementById("content22")
          content01 = document.getElementById("content01")
          content02 = document.getElementById("content02"),
          content03 = document.getElementById("content03"),
          content04 = document.getElementById("content04"),
          content05 = document.getElementById("content05"),
          content06 = document.getElementById("content06"),
          content07 = document.getElementById("content07"),
          content08 = document.getElementById("content08"),
          content09 = document.getElementById("content09"),
          content10 = document.getElementById("content10");

        countdown.style.display = "none";
        text20.style.display = "none";
        text21.style.display = "none";
        text22.style.display = "none";
        text01.style.display = "none";
        text02.style.display = "none";
        text03.style.display = "none";
        text04.style.display = "none";
        text05.style.display = "none";
        text06.style.display = "none";
        text07.style.display = "none";
        text08.style.display = "none";
        text09.style.display = "none";
        text10.style.display = "none";
        content20.style.display = "block";
        content21.style.display = "block";
        content22.style.display = "block";
        content01.style.display = "block";
        content02.style.display = "block";
        content03.style.display = "block";
        content04.style.display = "block";
        content05.style.display = "block";
        content06.style.display = "block";
        content07.style.display = "block";
        content08.style.display = "block";
        content09.style.display = "block";
        content10.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0)
}());
*/
/*Countdown Timer JS End*/






/*New Countdown Timer JS Start*/
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes'); 
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');





let endDate = '10/11/2023 20:08:00';
// date format mm/dd/yyyy

let x = setInterval(function() {
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown

  // time calculation for days, hours, minutes and seconds

  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / (1000));

  //output the result in element with id
  days.innerHTML = d + "<br><span>Days</span>";
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes </span>"; 
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  
  
  // animte stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  // 365 days in an year
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  // 24 hrs in a day
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  // 60 minutes in an hours
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  // 60 seconds in a seconds
  
  
  
  // animte circle dots
  day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
//360deg/365dys = 0.986
  hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
// 360deg / 24hrs = 15
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;
// 360deg / 60minutes = 6
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
// 360deg / 60seconds = 6




// if the countdown is over, write some text
if (distance < 0) {
  clearInterval(x);
  document.getElementById("time").style.display = 'none';
  document.getElementById("text20").style.display = 'none';
  document.getElementById("text21").style.display = 'none';
  document.getElementById("text22").style.display = 'none';
  document.getElementById("text01").style.display = 'none';
  document.getElementById("text02").style.display = 'none';
  document.getElementById("text03").style.display = 'none';
  document.getElementById("text04").style.display = 'none';
  document.getElementById("text05").style.display = 'none';
  document.getElementById("text06").style.display = 'none';
  document.getElementById("text07").style.display = 'none';
  document.getElementById("text08").style.display = 'none';
  document.getElementById("text09").style.display = 'none';
  document.getElementById("text10").style.display = 'none';
  
  
  
  document.getElementById("content20").style.display = 'block';
  document.getElementById("content21").style.display = 'block';
  document.getElementById("content22").style.display = 'block';
  document.getElementById("content01").style.display = 'block';
  document.getElementById("content02").style.display = 'block';
  document.getElementById("content03").style.display = 'block';
  document.getElementById("content04").style.display = 'block';
  document.getElementById("content05").style.display = 'block';
  document.getElementById("content06").style.display = 'block';
  document.getElementById("content07").style.display = 'block';
  document.getElementById("content08").style.display = 'block';
  document.getElementById("content09").style.display = 'block';
  document.getElementById("content10").style.display = 'block';
}
})

/*New Countdown Timer JS End*/
