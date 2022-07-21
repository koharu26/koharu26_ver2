
// メニューにマウスオーバーするとサブメニューが開く
const target = document.getElementById('aaa');

target.addEventListener('mouseover', function() {
  target.style.background = 'orange';
}, false);

target.addEventListener('mouseleave', function() {
  target.style.background = 'white';
}, false);


