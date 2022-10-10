var player1 = '김다원';
var player1x = '1';
var player2 = '김승태';
var player2x = '1';
var player3 = '노준현';
var player3x = '1';
var player4 = '박인수';
var player4x = '1';
var player5 = '박현수';
var player5x = '1';
var player6 = '배성빈';
var player6x = '1';
var player7 = '송용준';
var player7x = '1';
var player8 = '유영혁';
var player8x = '1';
var player9 = '유창현';
var player9x = '1';
var player10 = '이은택';
var player10x = '1';
var player11 = '이재혁';
var player11x = '1';
var player12 = '정승하';
var player12x = '1';
var player13 = '최영훈';
var player13x = '1';
var player14 = 'NEAL';
var player14x = '1';

for (let i=1;i<15;i++) {
  var o = eval('player' + i);
$('.line-players.pro').append(`
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