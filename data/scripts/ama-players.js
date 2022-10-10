var player1 = '강다훈';
var player1x = '1';
var player2 = '권순우';
var player2x = '1';
var player3 = '권효진';
var player3x = '1';
var player4 = '김민성';
var player4x = '1';
var player5 = '김민준';
var player5x = '1';
var player6 = '김우준';
var player6x = '1';
var player7 = '김정연';
var player7x = '1';
var player8 = '박태민';
var player8x = '1';
var player9 = '석주엽';
var player9x = '1';
var player10 = '심우혁';
var player10x = '1';
var player11 = '안정환';
var player11x = '1';
var player12 = '원종태';
var player12x = '1';
var player13 = '유민선';
var player13x = '1';
var player14 = '윤서형';
var player14x = '1';
var player15 = '윤성재';
var player15x = '1';
var player16 = '윤태웅';
var player16x = '1';
var player17 = '이은서';
var player17x = '1';
var player18 = '주희성';
var player18x = '1';
var player19 = '최승현';
var player19x = '1';
var player20 = '최은성';
var player20x = '1';
var player21 = '최준혁';
var player21x = '1';
var player22 = '최준호';
var player22x = '1';
var player23 = '홍성민';
var player23x = '1';
var player24 = '황혁';
var player24x = '1';

for (let i=1;i<24;i++) {
  var o = eval('player' + i);
$('.line-players.amateur').append(`
<div class="indi-players" id="${o}">
  <div class="face-players">
    <img src="/data/images/players/${o}.png">
  </div>
  <div class="name-players">
    <span>${o}</span>
  </div>
</div>
`);
}