var player1 = '강다훈';
var player2 = '권순우';
var player3 = '권효진';
var player4 = '김민성';
var player5 = '김민준';
var player6 = '김우준';
var player7 = '김정연';
var player8 = '박태민';
var player9 = '석주엽';
var player10 = '심우혁';
var player11 = '안정환';
var player12 = '원종태';
var player13 = '유민선';
var player14 = '윤서형';
var player15 = '윤성재';
var player16 = '윤태웅';
var player17 = '이은서';
var player18 = '주희성';
var player19 = '최승현';
var player20 = '최은성';
var player21 = '최준혁';
var player22 = '최준호';
var player23 = '홍성민';
var player24 = '황혁';

for (let i=1;i<24;i++) {
  var o = eval('player' + i);
$('.line-players.amateur').append(`
<div class="indi-players" id="${o}">
  <div class="face-players">
    <img src="/data/images/players/${o}.png" loading="lazy">
  </div>
  <div class="name-players">
    <span>${o}</span>
  </div>
</div>
`);
}