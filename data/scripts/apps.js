$(window).on('load',function(){
  setTimeout(function(){
    $('body').removeClass('la');
  }, 1000) // 안정적인 로딩을 위한 1초 대기
})

$('.pret-question-head').click(function(){
  $(this).parent().toggleClass('view');
})

$('.menu').click(function(){
  $('body').addClass('ae');
})