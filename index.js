
// ■■メニューにマウスオーバーするとサブメニューが開く■■

// メニュー1
const menu1 = document.getElementById('menu_main1');
const submenu1 = document.getElementById('submenu_main1');

menu1.addEventListener('mouseover', function() {
  submenu1.style.visibility = 'visible';
  submenu1.style.opacity = 1;
}, false);

menu1.addEventListener('mouseleave', function() {
  submenu1.style.visibility = 'hidden';
  submenu1.style.opacity = 0;
}, false);

submenu1.addEventListener('mouseover', function() {
  submenu1.style.visibility = 'visible';
  submenu1.style.opacity = 1;
}, false);

submenu1.addEventListener('mouseleave', function() {
  submenu1.style.visibility = 'hidden';
  submenu1.style.opacity = 0;
}, false);


// メニュー2
const menu2 = document.getElementById('menu_main2');
const submenu2 = document.getElementById('submenu_main2');

menu2.addEventListener('mouseover', function() {
  submenu2.style.visibility = 'visible';
  submenu2.style.opacity = 1;
}, false);

menu2.addEventListener('mouseleave', function() {
  submenu2.style.visibility = 'hidden';
  submenu2.style.opacity = 0;
}, false);

submenu2.addEventListener('mouseover', function() {
  submenu2.style.visibility = 'visible';
  submenu2.style.opacity = 1;
}, false);

submenu2.addEventListener('mouseleave', function() {
  submenu2.style.visibility = 'hidden';
  submenu2.style.opacity = 0;
}, false);


// メニュー3
const menu3 = document.getElementById('menu_main3');
const submenu3 = document.getElementById('submenu_main3');

menu3.addEventListener('mouseover', function() {
  submenu3.style.visibility = 'visible';
  submenu3.style.opacity = 1;
}, false);

menu3.addEventListener('mouseleave', function() {
  submenu3.style.visibility = 'hidden';
  submenu3.style.opacity = 0;
}, false);

submenu3.addEventListener('mouseover', function() {
  submenu3.style.visibility = 'visible';
  submenu3.style.opacity = 1;
}, false);

submenu3.addEventListener('mouseleave', function() {
  submenu3.style.visibility = 'hidden';
  submenu3.style.opacity = 0;
}, false);


// メニュー4
const menu4 = document.getElementById('menu_main4');
const submenu4 = document.getElementById('submenu_main4');

menu4.addEventListener('mouseover', function() {
  submenu4.style.visibility = 'visible';
  submenu4.style.opacity = 1;
}, false);

menu4.addEventListener('mouseleave', function() {
  submenu4.style.visibility = 'hidden';
  submenu4.style.opacity = 0;
}, false);

submenu4.addEventListener('mouseover', function() {
  submenu4.style.visibility = 'visible';
  submenu4.style.opacity = 1;
}, false);

submenu4.addEventListener('mouseleave', function() {
  submenu4.style.visibility = 'hidden';
  submenu4.style.opacity = 0;
}, false);


// ■■センター画像が時間経過で切り替わる■■

let imgs_src = ["img/Test_01.jpg", "img/Main_02.jpg", "img/Main_03.jpg"];
let num = -1;

change_image();

function change_image() {
  if (num == 2){
    num = 0;
  }
  else {
    num ++;
  }
  document.getElementById("center_image").src = imgs_src[num];
  setTimeout("change_image()", 4000);
};

