const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const homeButton = document.getElementById('homeButton');
const mainlistButton = document.getElementById('mainlistButton');
const legacylistButton = document.getElementById('legacylistButton');
const topplayerButton = document.getElementById('topplayerButton');
const aboutButton = document.getElementById('aboutButton');
const settingButton = document.getElementById('settingButton');
const submitButton = document.getElementById('submitButton');

const body = document.body;

var activePage = 'index';

// Get cache

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
}

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');

  localStorage.setItem('theme', 'light');
}

function pageTransition(s, s1){
  activePage = s1;
  var elm = document.getElementById(s);
  elm.style.transition="all 0.2s ease-in";
  elm.style.opacity="0";
  elm.addEventListener("transitionend", function(e){
    elm.style.display="none";
    elm.clientWidth;
    setTimeout(function(){
      var elm1 = document.getElementById(s1);
      elm1.style.display="flex";
      elm1.clientWidth;
      setTimeout(function(){
        elm1.style.transition="all 0.2s ease-in";
        elm1.style.opacity="100";
      },10); 
    },10);
  });
}

mainlistButton.onclick = () => {
  pageTransition(activePage, 'mainlist');
}
homeButton.onclick = () => {
  pageTransition(activePage, 'index');
}

legacylistButton.onclick = () => {
  pageTransition(activePage, 'legacylist');
}
settingButton.onclick = () => {
  pageTransition(activePage, 'setting');
}
aboutButton.onclick = () => {
  pageTransition(activePage, 'about');
}
topplayerButton.onclick = () => {
  pageTransition(activePage, 'topplayer');
}
submitButton.onclick = () => {
  pageTransition(activePage, 'submit');
}