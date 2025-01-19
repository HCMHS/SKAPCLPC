const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");


let getMode = localStorage.getItem("mode");
  if (getMode && getMode === "dark") {
     body.classList.add("dark");
     darkLight.classList.replace("bx-sun", "bx-moon");
   }
   
darkLight.addEventListener("click", () => {
body.classList.toggle("dark");
  if (!body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("bx-moon", "bx-sun");
    return localStorage.setItem("mode", "light");
     }
    else {
      darkLight.classList.replace("bx-sun", "bx-moon");
      localStorage.setItem("mode", "dark");
     }
     
  });
   
   

sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});


submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

//LOGIN JS START
let subMenu = document.getElementById("subMenu");
function toggleMenu() { 
  subMenu.classList.toggle("open-menu"); }
//LOGIN JS STOP

if (window.innerWidth < 12000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}











/*Navbar All Text Start*/
document.getElementById("logo").src = "./logo/logo.png";
const logo_text = document.getElementById('logo_text').innerHTML= "<a id='logo_text' href='index.html'>HCMHS</a>";


const login = document.getElementById('login').innerHTML = "Login";


document.getElementById("std-svg").src = "./logo/student.svg";
const std_text = document.getElementById('std_text').innerHTML = "<a href ='https://script.google.com/macros/s/AKfycby2laOXwsYtawPbNvVkwS_y62E0DRB8zwoPE2LK9JV1Wtbg81K2jgfJp7B3BXd9IJgGig/exec'>Student</a>";

document.getElementById("ad-svg").src = "./logo/admin.svg";
const ad_text = document.getElementById('ad_text').innerHTML = "<a href ='https://script.google.com/macros/s/AKfycbzV1pZr1CcDzZmHwR3B5jNGucleQVEIm_mOe0FkOXgW5TnIAulfxW4pywuibUpZMFL1Fg/exec'>Admin</a>";

document.getElementById("tea-svg").src = "./logo/teacher.svg";
const tea_text = document.getElementById('tea_text').innerHTML = "<a href ='#'>Teacher</a>";
/*document.getElementById("tea-svg").src = "./logo/teacher.svg";

const tea_text = document.getElementById('tea_text');

// Get Data From Google Sheet
fetch("https://script.google.com/macros/s/AKfycbwEztHrKM8hTZRwLlM4FmfKXwFFI4TTsr_DpaPgSIGvOFzv26sdbnrpbluXyUqae3_a/exec", {
  method: "GET"
}).then(res => res.json()).then(datas => {
  datas.myalldata.map((data, index) => {
    let teatext = data[4];
    tea_text.innerHTML += `
      <a href='teacher-login.html'>${teatext}</a>
      `;
  })
})*/




const home_text = document.getElementById('home_text').innerHTML += `<a href="index.html" class='nav_link_dec' id='manu-text'><i class='bx bx-home-alt' id='manu-icon'>&nbsp;</i>Home</a>`;
/*const home_text = document.getElementById('home_text');

// Get Data From Google Sheet
fetch("https://script.google.com/macros/s/AKfycbwEztHrKM8hTZRwLlM4FmfKXwFFI4TTsr_DpaPgSIGvOFzv26sdbnrpbluXyUqae3_a/exec", {
  method: "GET"
}).then(res => res.json()).then(datas => {
  datas.myalldata.map((data, index) => {
    let hometext = data[5];
    home_text.innerHTML += `
      <a href="index.html" class='nav_link_dec' id='manu-text'><i class='bx bx-home-alt' id='manu-icon'>&nbsp;</i>${hometext}</a>
      `;
  })
})*/

const ac_text = document.getElementById('ac_text').innerHTML += `<a href="academic.html" class='nav_link_dec' id='manu-text'><i class='bx bx-book-open' id='manu-icon'>&nbsp;</i>Academic</a>`;

const adm_text = document.getElementById('adm_text').innerHTML += `<a href="admission.html" class='nav_link_dec' id='manu-text'><i class='fas fa-graduation-cap' id='manu-icon'>&nbsp;</i>Admission</a>`;

const gal_text = document.getElementById('gal_text').innerHTML += `<span id='manu-text'><i class='bx bx-folder-open' id='manu-icon'>&nbsp;</i>Galley</span>`;

const pto_text = document.getElementById('pto_text').innerHTML += `<a href="photo-gallery.html" class='nav_link_dec' id='manu-text'><i class='fas fa-image' id='manu-icon'>&nbsp;</i>Photo</a>`;

const vdo_text = document.getElementById('vdo_text').innerHTML += `<a href="video-gallery.html" class='nav_link_dec' id='manu-text'><i class='fas fa-video' id='manu-icon'>&nbsp;</i>Video</a>`;



const rst_text = document.getElementById('rst_text').innerHTML += `<a href="account-portal.html" class='nav_link_dec' id='manu-text'><i class='fas fa-poll' id='manu-icon'>&nbsp;</i>Result</a>`;

const faq_text = document.getElementById('faq_text').innerHTML += `<a href="faq.html" class='nav_link_dec' id='manu-text'><i class='fas fa-question-circle' id='manu-icon'>&nbsp;</i>FAQ</a>`;

const nb_text = document.getElementById('nb_text').innerHTML += `<a href="notice-board.html" class='nav_link_dec' id='manu-text'><i class='bx bx-flag' id='manu-icon'>&nbsp;</i>Notice Board</a>`;

const cu_text = document.getElementById('cu_text').innerHTML += `<a href="contact-us.html" class='nav_link_dec' id='manu-text'><i class='fas fa-address-book' id='manu-icon'>&nbsp;</i>Contact Us</a>`;

const au_text = document.getElementById('au_text').innerHTML += `<a href="about-us.html" class='nav_link_dec' id='manu-text'><i class='fas fa-book-reader' id='manu-icon'>&nbsp;</i>About Us</a>`;

const ctv_text = document.getElementById('ctv_text').innerHTML += `<span id='manu-text'><i class='fas fa-head-side-virus' id='manu-icon'>&nbsp;</i>Creative</span>`;

const qz_text = document.getElementById('qz_text').innerHTML += `<a href="quiz.html" class='nav_link_dec' id='manu-text'><i class='fas fa-brain' id='manu-icon'>&nbsp;</i>Quiz</a>`;

const gm_text = document.getElementById('gm_text').innerHTML += `<a href="game.html" class='nav_link_dec' id='manu-text'><i class='fas fa-gamepad' id='manu-icon'>&nbsp;</i>Game</a>`;

const coll_text = document.getElementById('coll_text').innerHTML += `<span id='manu-text'>Collapse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='bx bx-log-out' id='manu-icon'></i></span>`;

/*Navbar All Text END*/







/*Footer All Text Start*/
const about_text = document.getElementById('about_text').innerHTML += `<h2>About Us</h2>`;

const intro_text = document.getElementById('intro_text').innerHTML += `<p>আমরা শিক্ষার প্রতি শ্রদ্ধার পরিবেশ এবং একটি স্বাস্থ্যকর পরিবেশ তৈরি করার চেষ্টা করি যেখানে শিক্ষাবিদরা আমাদের ছাত্রদের গঠন করে এবং তাদের সবচেয়ে উজ্জ্বল এবং সেরা হতে অনুপ্রাণিত করে। এটি করার জন্য, বিদ্যালয়টি শিক্ষার্থীদের মন ও আত্মাকে সমৃদ্ধ করার জন্য এবং তাদের মধ্যে সত্যবাদিতা, সৌজন্য, উদারতা, সহানুভূতি, ন্যায়বিচার, ভালবাসা এবং বিশ্বস্ততার মতো প্রয়োজনীয় নৈতিক গুণাবলী বিকাশের জন্য তাদের মধ্যে কিছু মূল্যবোধ জাগিয়ে তোলার দিকে কাজ করে।</p>`;

let FBResult = "<a href='https://www.facebook.com/holychildcare'><span class='fab fa-facebook-f'></span></a>";
document.getElementById("fb").innerHTML = FBResult;

let TWResult = "<a href=''><span class='fab fa-twitter'></span></a>";
document.getElementById("tw").innerHTML = TWResult;

let INSResult = "<a href=''><span class='fab fa-instagram'></span></a>";
document.getElementById("ins").innerHTML = INSResult;

let YTResult = "<a href=''><span class='fab fa-youtube'></span></a>";
document.getElementById("yt").innerHTML = YTResult;


const add_text = document.getElementById('add_text').innerHTML += `<h2>Address</h2>`;

const place_text = document.getElementById('place_text').innerHTML += `<i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
      <span>Manun Masziq Road Khurushkul, Cox’s Bazar</span>`;

const phone_text = document.getElementById('phone_text').innerHTML += `<i class="fas fa-phone-alt"></i>&nbsp;&nbsp;
      <span><a href="tel:+8801812342078">+8801812342078</a></span>`;

const email_text = document.getElementById('email_text').innerHTML += `<i class="fas fa-envelope"></i>&nbsp;&nbsp;
      <span><a href="mailto:holichildcox1.com">holichildcox1.com</a></span>`;

const web_text = document.getElementById('web_text').innerHTML += `<i class="fas fa-globe"></i>&nbsp;&nbsp;
      <span><a href="https://hccsc2011.com">https://hccsc2011.com</a></span>`;

const vis_text = document.getElementById('vis_text').innerHTML += `<h2>Visitor Info</h2>`;

const count_text = document.getElementById('count_text').innerHTML += `
      <div class="group-icon">
        <a><i class="fas fa-users"></i></a>
      </div>
      <div class="counterapi" id="count" noIcon="true" noCss="true" abbreviate="false" unique="false" noLink="true" key="index.html" animDuration="3000" startNumber="0"><load>loading...</load></div>
      <p>People Have Visited This Website!</p>
      `;

let CreditName = "Amlan Paul";
let CreditResult = CreditName.link("https://www.facebook.com/amlan.paul.apc");
document.getElementById("credit-name").innerHTML = CreditResult;
document.getElementById("copyright").innerHTML = '2023-2024 All Rights Reserved.';
/*Footer All Text End*/





/*Update All Text Start*/
/*document.getElementById("update-icon").innerHTML = "<i class='fas fa-cogs'>&nbsp;<span id='update-icon'>Update</span></i>";*/ //Update or Maintenance

document.getElementById("update-head").innerHTML = 'Coming Soon Website';

document.getElementById("update-text").innerHTML = '❝আমাদের ওয়েবসাইট নির্মাণাধীন আছে। আমরা আমাদের ওয়েবসাইট উন্নত করার জন্য কঠোর পরিশ্রম করছি এবং আমরা পরে চালু করতে প্রস্তুত থাকব।❞';

document.getElementById("update-credit").innerHTML = 'Developed By <a href="https://www.facebook.com/amlan.paul.apc" class="update-credit">Amlan Paul</a>';
/*Update All Text End*/




/*Update Timer JS Start*/
document.getElementById("updatebox").style.display = "none";
/*document.getElementById("body").style.display = "none";
    (function() {
      const secondUpdate = 1000,
        minuteUpdate = secondUpdate * 60,
        hourUpdate = minuteUpdate * 60,
        dayUpdate = hourUpdate * 24;
  
      let update = "oct 09, 2023 21:35:00", //jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec
        countUpdate = new Date(update).getTime(),
        u = setInterval(function() {
  
          let nowUpdate = new Date().getTime(),
            distanceUpdate = countUpdate - nowUpdate;
  
          document.getElementById("daysUpdate").innerText = Math.floor(distanceUpdate / (dayUpdate)),
            document.getElementById("hoursUpdate").innerText = Math.floor((distanceUpdate % (dayUpdate)) / (hourUpdate)),
            document.getElementById("minutesUpdate").innerText = Math.floor((distanceUpdate % (hourUpdate)) / (minuteUpdate)),
            document.getElementById("secondsUpdate").innerText = Math.floor((distanceUpdate % (minuteUpdate)) / secondUpdate);
  
          //do something later when date is reached
          if (distanceUpdate < 0) {
            let bodyUpdate = document.getElementById("body"),
              countUpdate = document.getElementById("updatebox");
            
            countUpdate.style.display = "none";
            bodyUpdate.style.display = "block";
  
            clearInterval(u);
          }
          //seconds
        }, 0)
    }());*/
/*Update Timer JS End*/













/*Scroll Button Js Start*/
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
/*Scroll Button Js Start*/










/*Check Network Js Start*/
const popup = document.querySelector(".popup"),
wifiIcon = document.querySelector(".icon-net i"),
popupTitle = document.querySelector(".popup .title-net"),
popupDesc = document.querySelector(".desc"),
reconnectBtn = document.querySelector(".reconnect");

let isOnline = true, intervalId, timerNet = 10;

const checkConnection = async () => {
    try {
        // Try to fetch random data from the API. If the status code is between 
        // 200 and 300, the network connection is considered online 
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        isOnline = response.status >= 200 && response.status < 300;
    } catch (error) {
        isOnline = false; // If there is an error, the connection is considered offline
    }
    timerNet = 10;
    clearInterval(intervalId);
    handlePopup(isOnline);
}

const handlePopup = (status) => {
    if(status) { // If the status is true (online), update icon, title, and description accordingly
        wifiIcon.className = "uil uil-wifi";
        popupTitle.innerText = "Restored Connection";
        popupDesc.innerHTML = "Your device is now successfully connected to the internet.";
        popup.classList.add("online");
        return setTimeout(() => popup.classList.remove("show"), 2000);
    }
    // If the status is false (offline), update the icon, title, and description accordingly
    wifiIcon.className = "uil uil-wifi-slash";
    popupTitle.innerText = "Lost Connection";
    popupDesc.innerHTML = "Your network is unavailable. We will attempt to reconnect you in <b>10</b> seconds.";
    popup.className = "popup show";

    intervalId = setInterval(() => { // Set an interval to decrease the timer by 1 every second
        timerNet--;
        if(timerNet === 0) checkConnection(); // If the timer reaches 0, check the connection again
        popup.querySelector(".desc b").innerText = timerNet;
    }, 1000);
}

// Only if isOnline is true, check the connection status every 3 seconds
setInterval(() => isOnline && checkConnection(), 3000);
reconnectBtn.addEventListener("click", checkConnection);
/*Check Network Js End*/







/*Disable All Element, Copy, Cut & Past Start*/
// shortcut keys that will be disabled
const disabledKeys = ["c", "C", "x", "J", "u", "I"];
const showAlert = e => {
  e.preventDefault(); // prevent default behavior
  return false; //alert("This feature is restricted!");
}

// call showAlert on mouse right-click 
document.addEventListener("contextmenu", showAlert);
document.addEventListener("keydown", e => {

      // call showAlert, if the pressed key is F12 or matched to keys

      if((e.ctrlkey && disabledKeys.includes(e.key)) || e.key === "F12") {
        showAlert(e);
      }
});



//disable all inspact element
document.addEventListener("contextmenu", function (e) { 
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) { 
    return false;
  }

  else if (e.ctrlKey && e.shiftkey && e.keyCode == "I".charCodeAt(0)) { return false;
  }

  else if (e. ctrlkey && e.shiftkey && e.keyCode == "C".charCodeAt(0)) { return false;
  }

  else if (e.ctrlKey && e.shiftkey && e.keyCode == "J".charCodeAt(0)) { return false;
  }

  else if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) { 
    return false;
  }

};
/*Disable All Element, Copy, Cut & Past End*/



















/*Visitor Counter JS Start*/
!function(){var t,e,n,o,a,r="hccsc.com",i=document.getElementsByTagName("script"),s=[];for(e in i){var c=i[e].src;c&&0<c.indexOf("counterapi.embed.js")&&s.push(i[e])}function l(){function s(t){return t||"/"}function C(t){return(new Intl.NumberFormat).format(t)||t}function o(t){return!!t&&("false"!=t&&t)}function k(t,e,n,o,a){o=o||{},t=t||(r||window.location.host.replace("www.","")),n=n||s(window.location.pathname),e=e||"view",debug&&console.log(t,e,n,o),debug&&console.log("KEY =",n),n=encodeURIComponent(n),debug&&console.log("KEY (encoded)=",n),e=encodeURIComponent(e),t=encodeURIComponent(t);var i=serializeForUrls(o),n=COUNTER_HOST+"/api/"+t+"/"+e+"/"+n+"?"+i;debug&&console.log(n);i=new XMLHttpRequest;i.open("GET",n),o.hh="embed",i.setRequestHeader("embed-js-key","1f8g291a-0ab0-4382-9296-e9516c5ebc4e"),i.setRequestHeader("token1","b1cde786-1033-4830-90a1-73dd35d9596c"),i.responseType="json",i.onload=function(){var t=this.response;a&&a(t)},i.send()}t=window.jQuery.noConflict(!0),COUNTER_HOST="https://counterapi.com",debug=!1,serializeForUrls=function(t){var e,n=[];for(e in t)t.hasOwnProperty(e)&&t[e]&&n.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return n.join("&")},k(null,null,null,{auto:"true"}),t(document).ready(function(w){var y={};y.eye='<svg   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>',w(".counterapi").each(function(t){var h,e,m,v=w(this).attr("ns"),b=w(this).attr("action"),f=w(this).attr("key"),p=this,g={trackOnly:o(w(this).attr("trackOnly")),readOnly:o(w(this).attr("readOnly")),startNumber:w(this).attr("startNumber"),invisible:o(w(this).attr("invisible")),icon:o(w(this).attr("icon"))||"eye",noAnim:o(w(this).attr("noAnim")),animDuration:o(w(this).attr("animDuration"))||3e3,label:w(this).attr("label")||"",behavior:w(this).attr("behavior"),noCss:o(w(this).attr("noCss")),noIcon:o(w(this).attr("noIcon")),noLink:o(w(this).attr("noLink")),abbreviate:o(w(this).attr("abbreviate")),noFormatting:o(w(this).attr("noFormatting")),noNumber:o(w(this).attr("noNumber")),hideIfZero:o(w(this).attr("hideIfZero")),timeline:w(this).attr("timeline")||"total",unique:o(w(this).attr("unique")),color:o(w(this).attr("color"))||"#ccc",iconColor:o(w(this).attr("iconColor"))||o(w(this).attr("color"))||"#31ffff",bg:o(w(this).attr("bg"))||"black",score:o(w(this).attr("score"))};m="vote"==g.behavior?(e="vote",g.readOnly=!0,h=[v,b,f].join("-"),localStorage.getItem(h)):!(e="view"),b=b||e,g.hh="embed",g.embedLocation=window.location.href,k(v,b,f,g,function(t){var e,n=t.value,o=t.abv;e=g.abbreviate?o:g.noNumber?"":g.noFormatting?n:'<span class="count">'+C(n)+"</span>",e+="&nbsp;"+g.label;var a=t.iconSvg||y.eye,i="c ";i+=g.color,g.noCss||(i+=" s"),g.noLink||(i+=" hasLink");var s="";g.noCss||(s+="fill: "+g.iconColor+";  color: "+g.color+"; background:"+g.bg+" ;");var r,c,l,u,d,o=t.statsUrl,s='<div class="'+i+'"    style="'+s+'">';g.noLink||(s+='<a class="a" target="_blank"  href="'+o+'" >'),s+='<div class="coulstripemini "></div><div class="iconAndCount">',g.noIcon||(s+=a),s+='<span class="thecount">'+e+"</span>",s+="</div>",g.noLink||(s+="</a>"),s+="</div>",g.invisible&&(s=""),g.hideIfZero&&0==n&&(s=""),(t.voted||m)&&w(p).addClass("voted"),w(p).html(s),g.noAnim||(r=g.animDuration/(1e3/17),l=n-(c=.4*n),u=0,d=setInterval(function(){var t=(t=++u/r,(t=1+--t*t*t*t*t)*(2-t)*c),t=Math.round(t+l);w(p).find("span.count").text(C(t)),r<u&&(w(p).find("span.count").text(C(n)),clearInterval(d))},1e3/17)),"vote"!=g.behavior||t.voted||w(p).click(function(t){return t.preventDefault(),w(p).hasClass("voted")?debug&&console.log("already voted on that one..."):(w(p).addClass("voted"),w(p).removeClass("animate"),w(p).addClass("animate"),setTimeout(function(){w(p).removeClass("animate")},7500),g.readOnly=!1,g.trackOnly=!0,g.hh="embed",k(v,b,f,g,function(t){debug&&console.log(t,"resClick"),localStorage.setItem(h,"voted"),n+=1,w(p).find("span.count").text(C(n))})),!1})})});var t,e,n={};n.defaultNs=window.location.hostname.replace("www.",""),n.defaultAction="view",n.defaultKey=s(window.location.pathname),n.configure=function(t){n.ns=t.ns},n.setNamespace=function(t){if(!t)return!1;this.ns=t},n.increment=function(t,e,n,o,a){this.call(t,e,n,o,a)},n.view=function(t,e,n,o,a){e=e||"view",this.call(t,e,n,o,a)},n.vote=function(t,e,n,o,a){e=e||"vote",this.call(t,e,n,o,a)},n.rate=function(t,e,n,o,a,i){a=Object.assign({},a);n=n||"rate",a.score=t,this.call(e,n,o,a,i)},n.read=function(t,e,n,o,a){o=Object.assign({},o);o.readOnly=!0,this.call(t,e,n,o,a)},n.call=function(t,e,n,o,a){o=o||{},t=t||s(window.location.pathname),e=e||(this.action||this.defaultAction||"view"),n=n||(this.ns||this.defaultNs||"demo"),o.hh="hostedLib",k(n,e,t,o,function(t){if(debug&&console.log(t,"<- counter api result"),a)return a(null,t)})},window.counterApi=n,t="//counterapi.com/css/embed.css",(e=document.createElement("link")).setAttribute("type","text/css"),e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(e)}),console.log("   💁  Analytics & plugins 👁️ made with counterApi.com 📈   ")}s[s.length-1],void 0===window.jQuery||"1.8.3"!==window.jQuery.fn.jquery?(n="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js",o=l,(a=document.createElement("script")).setAttribute("type","text/javascript"),a.setAttribute("src",n),a.readyState?a.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||o()}:a.onload=o,(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(a)):l()}();
/*Visitor Counter JS End*/



