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

homeButton.onclick = () => {
  document.getElementById('index').style.display="flex";
  document.getElementById('mainlist').style.display="none";
  document.getElementById('about').style.display="none";
  document.getElementById('setting').style.display="none";
  document.getElementById('submit').style.display="none";
  document.getElementById('topplayer').style.display="none";
  document.getElementById('legacylist').style.display="none";
}
mainlistButton.onclick = () => {
  document.getElementById('index').style.display="none";
  document.getElementById('mainlist').style.display="flex";
  document.getElementById('about').style.display="none";
  document.getElementById('setting').style.display="none";
  document.getElementById('submit').style.display="none";
  document.getElementById('topplayer').style.display="none";
  document.getElementById('legacylist').style.display="none";
}
legacylistButton.onclick = () => {
  document.getElementById('index').style.display="none";
  document.getElementById('mainlist').style.display="none";
  document.getElementById('about').style.display="none";
  document.getElementById('setting').style.display="none";
  document.getElementById('submit').style.display="none";
  document.getElementById('topplayer').style.display="flex";
}
settingButton.onclick = () => {
  document.getElementById('index').style.display="none";
  document.getElementById('mainlist').style.display="none";
  document.getElementById('about').style.display="none";
  document.getElementById('setting').style.display="flex";
  document.getElementById('submit').style.display="none";
  document.getElementById('topplayer').style.display="none";
}
aboutButton.onclick = () => {
  document.getElementById('index').style.display="none";
  document.getElementById('mainlist').style.display="none";
  document.getElementById('about').style.display="flex";
  document.getElementById('setting').style.display="none";
  document.getElementById('submit').style.display="none";
  document.getElementById('topplayer').style.display="none";
}
topplayerButton.onclick = () => {
  document.getElementById('index').style.display="none";
  document.getElementById('mainlist').style.display="none";
  document.getElementById('about').style.display="none";
  document.getElementById('setting').style.display="none";
  document.getElementById('submit').style.display="none";
  document.getElementById('topplayer').style.display="flex";
}
submitButton.onclick = () => {
  document.getElementById('index').style.display="none";
  document.getElementById('mainlist').style.display="none";
  document.getElementById('about').style.display="none";
  document.getElementById('setting').style.display="none";
  document.getElementById('submit').style.display="flex";
  document.getElementById('topplayer').style.display="none";
}