$('.line-let.amateur').click(function(){
  $('.line-let').removeClass('selected');
  $(this).addClass('selected');
  $('.line-players').removeClass('selected');
  $('.line-players.amateur').addClass('selected');
})

$('.line-let.pro').click(function(){
  $('.line-let').removeClass('selected');
  $(this).addClass('selected');
  $('.line-players').removeClass('selected');
  $('.line-players.pro').addClass('selected');
})