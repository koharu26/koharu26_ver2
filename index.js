
// メニューにマウスオーバーするとサブメニューが開く
const menu1 = document.getElementById('menu_main1');
const submenu1 = document.getElementById('submenu_main1');

menu1.addEventListener('mouseover', function() {
  submenu1.style.visibility = 'visible';
}, false);

menu1.addEventListener('mouseleave', function() {
  submenu1.style.visibility = 'hidden';
}, false);

submenu1.addEventListener('mouseover', function() {
  submenu1.style.visibility = 'visible';
}, false);

submenu1.addEventListener('mouseleave', function() {
  submenu1.style.visibility = 'hidden';
}, false);


