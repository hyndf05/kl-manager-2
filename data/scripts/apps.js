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
  $('body').addClass('ae');
  $('body').addClass('ox');
})

$('.ens-frame.recruit .ens-icon').click(function(){
  $('.ens-frame.recruit').removeClass('vx');
  $('body').removeClass('ox');
  $('.ens-progress').css('width', '0');
  setTimeout(function(){$('#analData').css('display', 'block');}, 250)
  $('#analData').text('데이터 수집 중..');
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
  $('body').removeClass('ox');
  $('.ens-comparecontents-retry').css('display', 'none');
  $('.ens-comparecontents-c-xx-automark').css('display', 'block');
  $('.ens-comparecontents-v1-stats-p1-content > div').css('width', '0%');
  $('.ens-comparecontents-v1-stats-p2-content > div').css('width', '0%');
  $('.ens-comparecontents-v1-stats-p3-content > div').css('width', '0%');
  $('.ens-comparecontents-v1-stats-p4-content > div').css('width', '0%');
  $('.ens-comparecontents-v1-stats-p5-content > div').css('width', '0%');
})