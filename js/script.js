const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const homeButton = document.getElementById('homeButton');
const mainlistButton = document.getElementById('mainlistButton');
const legacylistButton = document.getElementById('legacylistButton');
const topplayerButton = document.getElementById('topplayerButton');
const aboutButton = document.getElementById('aboutButton');
const settingButton = document.getElementById('settingButton');
const submitButton = document.getElementById('submitButton');

const homeButton1 = document.getElementById('homeButton1');
const mainlistButton1 = document.getElementById('mainlistButton1');
const legacylistButton1 = document.getElementById('legacylistButton1');
const topplayerButton1 = document.getElementById('topplayerButton1');
const aboutButton1 = document.getElementById('aboutButton1');
const settingButton1 = document.getElementById('settingButton1');
const submitButton1 = document.getElementById('submitButton1');

const body = document.body;

//var activePage = 'index';

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
function setNone(){
  document.getElementById('index').classList.add('mainpanelNone');
  document.getElementById('mainlistMP').classList.add('mainpanelNone');
  document.getElementById('legacylist').classList.add('mainpanelNone');
  document.getElementById('setting').classList.add('mainpanelNone');
  document.getElementById('about').classList.add('mainpanelNone');
  document.getElementById('topplayer').classList.add('mainpanelNone');
  document.getElementById('submit').classList.add('mainpanelNone');
}
function setVisibility(){
  document.getElementById('index').classList.add('mainpanelHidden');
  document.getElementById('mainlistMP').classList.add('mainpanelHidden');
  document.getElementById('legacylist').classList.add('mainpanelHidden');
  document.getElementById('setting').classList.add('mainpanelHidden');
  document.getElementById('about').classList.add('mainpanelHidden');
  document.getElementById('topplayer').classList.add('mainpanelHidden');
  document.getElementById('submit').classList.add('mainpanelHidden');
}
setNone();
setVisibility();
document.getElementById('index').classList.remove('mainpanelNone');
document.getElementById('index').classList.remove('mainpanelHidden');

function pageTransition(s1){
  var elm1 = document.getElementById(s1);
  setVisibility();
  setTimeout(function(){
    setNone();
    elm1.classList.remove('mainpanelNone');
    setTimeout(function(){
      elm1.classList.remove('mainpanelHidden');
    },100);
  },200);
}

mainlistButton.onclick = () => {
  pageTransition('mainlistMP');
}
homeButton.onclick = () => {
  pageTransition('index');
}
legacylistButton.onclick = () => {
  pageTransition('legacylist');
}
settingButton.onclick = () => {
  pageTransition('setting');
}
aboutButton.onclick = () => {
  pageTransition('about');
}
topplayerButton.onclick = () => {
  pageTransition('topplayer');
}
submitButton.onclick = () => {
  pageTransition('submit');
}
//mobile
mainlistButton1.onclick = () => {
  pageTransition('mainlistMP');
}
homeButton1.onclick = () => {
  pageTransition('index');
}

legacylistButton1.onclick = () => {
  pageTransition('legacylist');
}
aboutButton1.onclick = () => {
  pageTransition('about');
}
topplayerButton1.onclick = () => {
  pageTransition('topplayer');
}
