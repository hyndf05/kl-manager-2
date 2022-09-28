var toggle = document.getElementById("mode");
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
var currentTheme = document.documentElement.getAttribute("data-theme");

$('#mode .span').css('display','none');
if (storedTheme == 'light') {
  $('.material-symbols-outlined.dark').css('display','block');
} else if (storedTheme == 'dark') {
  $('.material-symbols-outlined.light').css('display','block');
}

if (storedTheme)
  document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    $('.material-symbols-outlined.dark').css('display','block');
    $('.material-symbols-outlined.light').css('display','none');

    if (currentTheme === "light") {
      targetTheme = "dark";
      $('.material-symbols-outlined.dark').css('display','none');
      $('.material-symbols-outlined.light').css('display','block');
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};