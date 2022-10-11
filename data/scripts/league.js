$('.roomCreateCancel').click(function(){
  $('.ex-join-league-roomCreate').css('display', 'none');
})

$('.ex-join-league-button-right').click(function(){
  $('.league-class-load').css('display', 'block');
  $('.ex-join-league-class').remove();
})

$('.leaguecontents-room-brx.ens-frame .ens-icon').click(function(){
  $('.leaguecontents-room-brx.ens-frame').removeClass('vx');
})

$('.leaguecontents-room-brv.ens-frame .ens-icon').click(function(){
  $('.leaguecontents-room-brv.ens-frame').removeClass('vx');
})

