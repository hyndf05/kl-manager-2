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
})

$('.ens-frame.recruit .ens-icon').click(function(){
  $('.ens-frame.recruit').removeClass('vx');
  $('.ens-progress').css('width', '0');
  setTimeout(function(){$('#analData').css('display', 'block');}, 250)
  $('#analData').text('데이터 수집 중..');
});

$('.ens-frame.login .ens-icon').click(function(){
  $('.ens-frame.login').removeClass('vx');
  $('.capt').removeClass('vx');
});

$('.ens-frame.join .ens-icon').click(function(){
  $('.ens-frame.join').removeClass('vx');
  $('.capt').removeClass('vx');
});

$('.ens-gtJoin').click(function(){
  $('.ens-frame.login').removeClass('vx');
  $('.ens-frame.join').addClass('vx');
});

$('.ens-gtLogin').click(function(){
  $('.ens-frame.join').removeClass('vx');
  $('.ens-frame.login').addClass('vx');
});