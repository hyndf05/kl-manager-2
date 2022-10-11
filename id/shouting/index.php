<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>PRE-ALPHA ^ KL MANAGAER v2 ^ Shouting</title>
    <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&family=Maven+Pro:wght@400;500;600;700;800;900&family=Secular+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/data/styles/_031248.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script defer src="/data/scripts/pro-players.js"></script>
  </head>
  <body class="la">
    <div class="tabs">
      <input class="shout" placeholder="응원 멘트를 입력해주세요.">
      <button class="chng">변경</button>
    </div>
    <div class="logs">
      <div class="logs-ind">
        <span id="dfi">로드 중..</span>
      </div>
    </div>

<script type="module">
var xi, newXi;
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCEl_Ttt2Px35LhEfqz5-KMGcSot-nWmjo",
authDomain: "klmanager-shouting.firebaseapp.com",
projectId: "klmanager-shouting",
storageBucket: "klmanager-shouting.appspot.com",
messagingSenderId: "328538561081",
appId: "1:328538561081:web:9a5f2598e2723eb82ecbe8",
measurementId: "G-MZRQVT0CE6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
$('.chng').click(function(){
let shout = $('.shout').val();
let today = new Date();   
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일
let date2 = year + '년' + month + '월' + date + '일';
const starCountRef = ref(db, `data/x/num`);
onValue(starCountRef, (snapshot) => {
const data = snapshot.val();
xi = Number(data);
newXi = xi + 1;
$('#n').text(newXi);
set(ref(db, `data/shout/archive/${newXi}`), {
shout: shout,
date: date2
});
});  
var nums = $('#n').text();
var numsAdded =  Number(nums) + 1;
console.log(nums, numsAdded);
set(ref(db, `data/x`), {
num: nums
});
set(ref(db, `data/live`), {
shout: shout
});
$('.shout').val('');
})
setInterval(function(){
const starCountRef = ref(db, `data/live/shout`);
onValue(starCountRef, (snapshot) => {
const data33 = snapshot.val();
$('#dfi').text(data33);
})
}, 1000)
</script>
    <span id="n"></span>
  </body>
</html>