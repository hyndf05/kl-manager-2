$('.alti-now').text('이미지');

$(window).on('load',function(){
  var allfix = $('body').width();
  var o = 0;
  var once = allfix / 8;
  $('.alti').html('<span style="text-align:center;display:block;">모든 파일이 준비되었습니다.<br>안정적인 진행을 위해 1초간 대기합니다.</span>');
  var os = setInterval(function(){
    o = o + once;
    $('.alti-progress').css('width', `${o}px`);
    if (o > allfix) {
      clearInterval(os)
    }
  }, 100)
  setTimeout(function(){
    $('.login').addClass('vx');
    $('body').removeClass('la');
    $('.capt').addClass('vx');
  }, 1000) // 안정적인 로딩을 위한 1초 대기
})

$('.pret-question-head').click(function(){
  $(this).parent().toggleClass('view');
})

$('.menu').click(function(){
  $('.ens-frame.aside').addClass('vx');
  $('body').addClass('ox');
})

$('.ens-frame.recruit .ens-icon').click(function(){
  $('.ens-frame.recruit').removeClass('vx');
  $('body').removeClass('ox');
  $('.ens-progress').css('width', '0');
  setTimeout(function(){$('#analData').css('display', 'block');}, 250)
  $('#analData').text('데이터 수집 중..');
  $('.playerReTeam').css('background-color', '#d9d9d9');
  $('.playerReTeam').text('');
  $('.coin-players.ens-f-at-s').css('background-color', '#d9d9d9');
  $('.coin-players.ens-f-at-s').text('');
});

$('.ens-frame.login .ens-icon').click(function(){
  $('.ens-frame.login').removeClass('vx');
  $('.capt').removeClass('vx');
  $('body').removeClass('ox');
});

$('.ens-frame.join .ens-icon').click(function(){
  $('.ens-frame.join').removeClass('vx');
  $('.capt').removeClass('vx');
  $('body').removeClass('ox');
});

$('.ens-gtJoin').click(function(){
  $('.ens-frame.login').removeClass('vx');
  $('.ens-frame.join').addClass('vx');
  $('body').addClass('ox');
});

$('.ens-gtLogin').click(function(){
  $('.ens-frame.join').removeClass('vx');
  $('.ens-frame.login').addClass('vx');
  $('body').addClass('ox');
});

$('.ens-frame.compare .ens-icon').click(function(){
  $('.ens-frame.compare').removeClass('vx');
  $('.ens-comparecontents-retry').css('display', 'none');
  $('.ens-comparecontents-c-xx-automark').css('display', 'block');
  $('.ens-comparecontents-v0-rsj').text('데이터 수집 중..');
  $('.ens-comparecontents-v0-button').css('display','flex');
  $('.ens-comparecontents-v1-stats-p1-content > div').css('width', '0%');
  $('.ens-comparecontents-v1-stats-p2-content > div').css('width', '0%');
  $('.ens-comparecontents-v1-stats-p3-content > div').css('width', '0%');
  $('.ens-comparecontents-v1-stats-p4-content > div').css('width', '0%');
  $('.ens-comparecontents-v1-stats-p5-content > div').css('width', '0%');
  $('.ens-comparecontents-versus-result-main').text('');
  $('.ens-comparecontents-versus-result-sub').text('');
  $('.ens-comparecontents-mainPlayer').text('');
  $('.ens-comparecontents-subPlayer').text('');
  p1 = 0;
  p2 = 0;
  p3 = 0;
  p4 = 0;
  p5 = 0;
  p6 = 0;
  p7 = 0;
  p8 = 0;
  p9 = 0;
  p10 = 0;
  ca1 = 0;
  ca2 = 0;
  ca3 = 0;
  ca4 = 0;
  ca5 = 0;
  ca6 = 0;
  ca7 = 0;
  ca8 = 0;
  ca9 = 0;
  ca10 = 0;
  ca11 = 0;
  ca12 = 0;
  ca13 = 0;
  ca14 = 0;
  ca15 = 0;
  ca16 = 0;
  ca21 = 0;
  ca22 = 0;
  ca23 = 0;
  ca24 = 0;
  ca25 = 0;
  ca26 = 0;
  ca27 = 0;
  ca28 = 0;
  ca29 = 0;
  ca30 = 0;
  ca31 = 0;
  ca32 = 0;
  ca33 = 0;
  ca34 = 0;
  ca35 = 0;
  ca36 = 0;
  ca100 = 0;
  ca200 = 0;
  caResult100 = 0;
  caResult200 = 0;
  caResult100R = 0;
  caResult100R = 0;
})

$('.select-position-ew .ens-icon').click(function(){
  $('.ens-frame.select-position-ew').removeClass('vx');
});

$('.ens-frame.aside .ens-icon').click(function(){
  $('.ens-frame.aside').removeClass('vx');
  $('body').removeClass('ox');
});

$('.ens-frame.emx .ens-icon').click(function(){
  $('.ens-frame.emx').removeClass('vx');
});

$('.ens-frame.cheer .ens-icon').click(function(){
  $('.ens-frame.cheer').removeClass('vx');
})

$('.ens-fea').click(function(){
  $('.ens-frame.aside').removeClass('vx');
  $('body').removeClass('ox');
})