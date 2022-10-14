// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
import { getDatabase, ref, set, onValue, update, child, get, remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfX5-hTGFbzVrNduPCyvOp0D1hfbR_H1g",
  authDomain: "klmanager2.firebaseapp.com",
  projectId: "klmanager2",
  storageBucket: "klmanager2.appspot.com",
  messagingSenderId: "827714070193",
  appId: "1:827714070193:web:7231a8b2b8b12b2b05a490",
  measurementId: "G-8J3177TE21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();

var kCoin;
var klTeam = '';
var selPosition = '';
var iox = 0;
var ca100 = 0;
var ca1 = 0;
var ca2 = 0;
var ca3 = 0;
var ca4 = 0;
var ca5 = 0;
var ca6 = 0;
var ca7 = 0;
var ca8 = 0;
var ca9 = 0;
var ca10 = 0;
var ca11 = 0;
var ca12 = 0;
var ca13 = 0;
var ca14 = 0;
var ca15 = 0;
var ca16 = 0;
var ca200 = 0;
var ca21 = 0;
var ca22 = 0;
var ca23 = 0;
var ca24 = 0;
var ca25 = 0;
var ca26 = 0;
var ca27 = 0;
var ca28 = 0;
var ca29 = 0;
var ca30 = 0;
var ca31 = 0;
var ca32 = 0;
var ca33 = 0;
var ca34 = 0;
var ca35 = 0;
var ca36 = 0;
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;
var p5 = 0;
var p6 = 0;
var p7 = 0;
var p8 = 0;
var p9 = 0;
var p10 = 0;  
var caResult100 = 0;
var caResult200 = 0; 
var caResult100R = 0;
var caResult200R = 0; 
var iisox;
var sa22;
var rn22;
var md22;
var sw22;
var hy22;
var ia22;
var sa23;
var rn23;
var md23;
var sw23;
var hy23;
var ia23;
var leagueClassTitle = '';
var num = '';
var e0 = 0;
var e1 = 0;
var positionPlayer111 = '';
var getPlayerPosition111 = '';
var sa;
var rn;
var md;
var sw;
var hy;
var ia;
var player2isexist = '';


// 가입
$('.ens-ggJoin').click(function(){

// ####### 변수 생성
  var email = $('.ens-input-join-email').val();
  var password = $('.ens-input-join-password').val();
  var team = $('.ens-input-join-team').val();
  kCoin = 100;
  
  
  const starCountRef = ref(db, `confirm/exist/teams/${team}/owner`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data == "" || data == null) {
    
      // ####### 유저 계정 생성
      createUserWithEmailAndPassword(auth, email, password, kCoin)
      .then((userCredential) => {
        const user = userCredential.user;
        // ############## 데이터 베이스에 정보 추가
        set(ref(db, `teams/${team}`), {
          email: email,
          password: password,
          team: team,
          kCoin: kCoin,
          SA: '',
          RN: '',
          MD: '',
          SW: '',
          HY: '',
          IA: '',
          create: '0'
        });
        set(ref(db, `confirm/exist/teams/${team}`), {
          owner: email
        });
        $('.ens-frame.join').removeClass('vx');
        $('.ens-frame.login').addClass('vx');
        alert('가입이 승인되었습니다.');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('가입이 거부되었습니다.');
      });
    } else {}
  });
})

// 로그인
$('.ens-ggLogin').click(function(){
  var email2 = $('.ens-input-login-email').val();
  var password2 = $('.ens-input-login-password').val();
  var team2 = $('.ens-input-login-team').val();
  klTeam = team2;
  onStateChange();
  signInWithEmailAndPassword(auth, email2, password2)
  .then((userCredential) => {
    const user = userCredential.user;
    const starCountRef = ref(db, `teams/${team2}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var kCoinA = data.kCoin;
      $('#kCoin').text(kCoinA);
      kCoin = kCoinA;
    });
    $('.ens-frame.login').removeClass('vx');
    $('.capt').removeClass('vx');
    alert('로그인 하셨습니다.');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('이메일 또는 비밀번호가 올바르지 않습니다.');
  });
})

// 선수 정보
$('.indi-players').click(function(){
  $('body').addClass('ox');
  var tku = $(this).attr('id');
  var playerImages = `/data/images/players/${tku}.png`;
  $('.ens-uPlayer').attr('src', playerImages)
  $('.selectedPlayer').text(tku);
  $('.ens-frame.recruit').addClass('vx');
  const starCountRef = ref(db, `players/playerSkills/${tku}`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    var sk1 = data.주행안정성;
    var sk2 = data.사고회복력;
    var sk3 = data.TOP3유지력;
    var sk4 = data.뒷심;
    var sk5 = data.라인효율성;
    var sk6 = data.소속팀;
    var sk7 = data.coin;
    var sk1l = sk1.length;
    var sk2l = sk2.length;
    var sk3l = sk3.length;
    var sk4l = sk4.length;
    var sk5l = sk5.length;
    if (sk1l < 1 || sk2l < 1 || sk3l < 1 || sk4l < 1 || sk5l < 1) {
      $('#analData').text('데이터 요청 실패');
    } else {
      $('#analData').text('데이터 분석 중..');
      setTimeout(function(){
        $('.playerReTeam').text(sk6);
        $('.ens-12vPlayer').css('width', `${sk1}%`);
        $('.ens-22vPlayer').css('width', `${sk2}%`);
        $('.ens-32vPlayer').css('width', `${sk3}%`);
        $('.ens-42vPlayer').css('width', `${sk4}%`);
        $('.ens-52vPlayer').css('width', `${sk5}%`);
        $('#analData').css('display', 'none');
        $('.playerReTeam').css('background-color', 'inherit');
        $('.coin-players.ens-f-at-s').text(sk7);
        $('.coin-players.ens-f-at-s').css('background-color', 'inherit');
      }, 700)
    }
  });
});

// 선수 비교
$('.ens-pPlayer').click(function(){
  $('.ens-frame.compare').addClass('vx');
  var mainPlayer = $('.selectedPlayer').text();
  $('#ens-comparecontents-main-player').text(mainPlayer);
})

// ?
$('.ens-bPlayer').click(function(){
  $('.select-position-ew').addClass('vx');
})

// 선수 비교 (확정)
$('.ens-comparecontents-v0-button').click(function(){
  $('.ens-comparecontents-c-xx-automark').css('display', 'none');
  $('.ens-comparecontents-v0-rrm').css('display', 'block');
  $('.ens-comparecontents-retry').css('display', 'block');
  $('.ens-comparecontents-v0-button').css('display', 'none');
  var mainPlayer = $('#ens-comparecontents-main-player').text();
  var subPlayer = $('.ens-comparecontents-sub-player option:selected').val();
  const starCountRef = ref(db, `players/playerSkills/${mainPlayer}`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    p1 = Number(data.주행안정성);
    p2 = Number(data.사고회복력);
    p3 = Number(data.TOP3유지력);
    p4 = Number(data.뒷심);
    p5 = Number(data.라인효율성);
    var p11 = p1.length;
    var p21 = p2.length;
    var p31 = p3.length;
    var p41 = p4.length;
    var p51 = p5.length;
    if (p11 < 1 || p21 < 1 || p31 < 1 || p41 < 1 || p51 < 1) {
      
    } else {
      var mainPlayerStat = p3 + ((p5+p1)/p4) + (p2+(p2/p4)) - (p3-p4);
      setTimeout(function(){
        $('.ens-comparecontents-v1-stats-p1-content-progress-mainPlayer').css('width', `${p1}%`);
        $('.ens-comparecontents-v1-stats-p2-content-progress-mainPlayer').css('width', `${p2}%`);
        $('.ens-comparecontents-v1-stats-p3-content-progress-mainPlayer').css('width', `${p3}%`);
        $('.ens-comparecontents-v1-stats-p4-content-progress-mainPlayer').css('width', `${p4}%`);
        $('.ens-comparecontents-v1-stats-p5-content-progress-mainPlayer').css('width', `${p5}%`);
        iox ++;
        ca1 = p1 + p2;
        ca2 = p1 + p3;
        ca3 = p1 + p4;
        ca4 = p1 + p5;
        ca5 = p2 + p3;
        ca6 = p2 + p4;
        ca7 = p2 + p5;
        ca8 = p3 + p4;
        ca9 = p3 + p5;
        ca10 = p4 + p5;
        ca11 = p1 + p2 + p3;
        ca12 = p1 + p2 + p3 + p4;
        ca13 = p1 + p2 + p3 + p4 + p5;
        ca14 = p2 + p3 + p4 + p5;
        ca15 = p3 + p4 + p5;
        ca16 = p1 - p4;
      }, 2200)
    }
  });
  const starCountRef2 = ref(db, `players/playerSkills/${subPlayer}`);
  onValue(starCountRef2, (snapshot) => {
    $('.ens-comparecontents-v0-rsj').text('데이터 분석 중..');
    const data = snapshot.val();
    p6 = Number(data.주행안정성);
    p7 = Number(data.사고회복력);
    p8 = Number(data.TOP3유지력);
    p9 = Number(data.뒷심);
    p10 = Number(data.라인효율성);
    var p61 = p6.length;
    var p71 = p7.length;
    var p81 = p8.length;
    var p91 = p9.length;
    var p101 = p10.length;
    if (p61 < 1 || p71 < 1 || p81 < 1 || p91 < 1 || p101 < 1) {
    } else {
      var subPlayerStat = p8 + ((p10+p6)/p9) + (p7+(p7/p9)) - (p8-p9);
      setTimeout(function(){
        $('.ens-comparecontents-v0-rrm').css('display', 'none');
        $('.ens-comparecontents-v1-stats-p1-content-progress-subPlayer').css('width', `${p6}%`);
        $('.ens-comparecontents-v1-stats-p2-content-progress-subPlayer').css('width', `${p7}%`);
        $('.ens-comparecontents-v1-stats-p3-content-progress-subPlayer').css('width', `${p8}%`);
        $('.ens-comparecontents-v1-stats-p4-content-progress-subPlayer').css('width', `${p9}%`);
        $('.ens-comparecontents-v1-stats-p5-content-progress-subPlayer').css('width', `${p10}%`);
        iox ++;
        ca21 = p6 + p7;
        ca22 = p6 + p8;
        ca23 = p6 + p9;
        ca24 = p6 + p10;
        ca25 = p7 + p8;
        ca26 = p7 + p9;
        ca27 = p7 + p10;
        ca28 = p8 + p9;
        ca29 = p8 + p10;
        ca30 = p9 + p10;
        ca31 = p6 + p7 + p8;
        ca32 = p6 + p7 + p8 + p9;
        ca33 = p6 + p7 + p8 + p9 + p10;
        ca34 = p6 + p8 + p9 + p10;
        ca35 = p7 + p9 + p10;
        ca36 = p6 - p9;
        if (p1 > p6) {
          ca100 ++;
        } else {
          ca200 ++;
        }  
        if (p2 > p7) {
          ca100 ++;
        } else {
          ca200 ++;
        }     
        if (p3 > p8) {
          ca100 ++;
        } else {
          ca200 ++;
        }    
        if (p4 > p9) {
          ca100 ++;
        } else {
          ca200 ++;
        } 
        if (p5 > p10) {
          ca100 ++;
        } else {
          ca200 ++;
        }    
        if (ca1 > ca21) {
          ca100 ++;
        } else {
          ca200 ++;
        }
        if (ca2 > ca22) {
          ca100 ++;
        } else {
          ca200 ++;
        }   
        if (ca3 > ca23) {
          ca100 ++;
        } else {
          ca200 ++;
        }
        if (ca4 > ca24) {
          ca100 ++;
        } else {
          ca200 ++;
        }     
        if (ca5 > ca25) {
          ca100 ++;
        } else {
          ca200 ++;
        }   
        if (ca6 > ca26) {
          ca100 ++;
        } else {
          ca200 ++;
        }  
        if (ca7 > ca27) {
          ca100 ++;
        } else {
          ca200 ++;
        }  
        if (ca8 > ca28) {
          ca100 ++;
        } else {
          ca200 ++;
        }  
        if (ca9 > ca29) {
          ca100 ++;
        } else {
          ca200 ++;
        }  
        if (ca10 > ca30) {
          ca100 ++;
        } else {
          ca200 ++;
        }   
        if (ca11 > ca31) {
          ca100 ++;
        } else {
          ca200 ++;
        }        
        if (ca12 > ca32) {
          ca100 ++;
        } else {
          ca200 ++;
        }     
        if (ca13 > ca33) {
          ca100 ++;
        } else {
          ca200 ++;
        }       
        if (ca14 > ca34) {
          ca100 ++;
        } else {
          ca200 ++;
        }   
        if (ca15 > ca35) {
          ca100 ++;
        } else {
          ca200 ++;
        }
        if (ca16 > ca36) {
          ca100 ++;
        } else {
          ca200 ++;
        }
        caResult100 = 100 * (ca100/21);
        caResult200 = 100 * (ca200/21);
        caResult100R = caResult100.toFixed(2);
        caResult200R = caResult200.toFixed(2);
        $('.ens-comparecontents-versus-result-main').text(caResult100R);
        $('.ens-comparecontents-versus-result-sub').text(caResult200R);
        $('.ens-comparecontents-mainPlayer').text(mainPlayer);
        $('.ens-comparecontents-subPlayer').text(subPlayer);
      }, 2200)
    }
  })
})
      
// 선수 비교 (vs.다른선수)
$('.ens-comparecontents-retry').click(function(){
  $(this).css('display', 'none');
  $('.ens-comparecontents-c-xx-automark').css('display', 'block');
  $('.ens-comparecontents-v0-rsj').text('데이터 수집 중..');
  $('.ens-comparecontents-v0-button').css('display', 'flex');
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

// 영입
$('.ens-rec-player-lst19').click(function(){
  selPosition = $('.rec-select-position option:selected').val();
  if ('' == klTeam) {
    alert('로그인이 필요합니다.');
    $('.ens-frame.select-position-ew').removeClass('vx');
    $('.ens-frame.recruit').removeClass('vx');
  } else {
    var sPlayerSelected = $('.selectedPlayer').text();
    var playerTeamExist115;
    var playerTeam115;
    var playerValue115;
    var playerPosition116;
    var playerPositionNo;
    const starCountRef = ref(db, `players/playerSkills/${sPlayerSelected}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      playerTeamExist115 = data.영입; // 소속팀이 있다면 0, 소속팀이 없다면 1
      playerTeam115 = data.소속팀;
      playerValue115 = data.coin;
    });
    const starCountRef2 = ref(db, `teams/${klTeam}/${selPosition}`);
    onValue(starCountRef2, (snapshot) => {
      const data = snapshot.val();
      playerPositionNo = data;
      if (playerPositionNo == '') {
        if (playerTeamExist115 == 0) {
          if (kCoin => playerValue115) {
            alert(`${sPlayerSelected} 선수를 영입하셨습니다.`);
            $('.ens-frame.select-position-ew').removeClass('vx');
            $('.ens-frame.recruit').removeClass('vx');
            update(ref(db, `players/playerSkills/${sPlayerSelected}`), {
              영입: 1,
              소속팀: klTeam
            });
            kCoin = kCoin - playerValue115;
            update(ref(db, `teams/${klTeam}`), {
              kCoin: kCoin
            });
            if (selPosition == 'SA') {
              update(ref(db, `teams/${klTeam}`), {
                SA: sPlayerSelected
              });
            } else if (selPosition == 'RN') {
              update(ref(db, `teams/${klTeam}`), {
                RN: sPlayerSelected
              });
            } else if (selPosition == 'MD') {
              update(ref(db, `teams/${klTeam}`), {
                MD: sPlayerSelected
              });
            } else if (selPosition == 'SW') {
              update(ref(db, `teams/${klTeam}`), {
                SW: sPlayerSelected
              });
            } else if (selPosition == 'HY') {
              update(ref(db, `teams/${klTeam}`), {
                HY: sPlayerSelected
              });
            } else if (selPosition == 'IA') {
              update(ref(db, `teams/${klTeam}`), {
                IA: sPlayerSelected
              });
            }
            onStateChange();
          } else {
            alert(`보유하신 K코인이 부족합니다.`);
            $('.ens-frame.select-position-ew').removeClass('vx');
            $('.ens-frame.recruit').removeClass('vx');
          }
        } else {
          alert(`${sPlayerSelected} 선수는 '${playerTeam115}'팀에 소속되어 있습니다.`);
          $('.ens-frame.select-position-ew').removeClass('vx');
          $('.ens-frame.recruit').removeClass('vx');
        }
      } else {
        if (playerTeam115 == klTeam) {
        } else {
          alert(`선택한 포지션에 선수가 존재합니다.`);
          $('.ens-frame.select-position-ew').removeClass('vx');
          $('.ens-frame.recruit').removeClass('vx');
        }
      }
    });
  }
})

// 코인 동기화
function onStateChange() {
  const starCountRef3 = ref(db, `teams/${klTeam}`);
  onValue(starCountRef3, (snapshot) => {
    const data3 = snapshot.val();
    sa = data3.SA;
    rn = data3.RN;
    md = data3.MD;
    sw = data3.SW;
    hy = data3.HY;
    ia = data3.IA;
    $('.sa').text(sa);
    $('.rn').text(rn);
    $('.md').text(md);
    $('.sw').text(sw);
    $('.hy').text(hy);
    $('.ia').text(ia);
  });
}

// 포지션 선택 
$('.position-xx').click(function(){
  $('.ens-frame.emx').addClass('vx');
  positionPlayer111 = $(this).text();
  getPlayerPosition111 = $(this).attr('id');
  reDenied(positionPlayer111);
})

// ?
function reDenied(positionPlayer111) {
  $('.emxPlayer').text(positionPlayer111);
}

// 선수 방출
$('.emx-button').click(function(){
  if (getPlayerPosition111 == 'sa') {
    update(ref(db, `teams/${klTeam}`), {
      SA: ''
    });
  } else if (getPlayerPosition111 == 'rn') {
    update(ref(db, `teams/${klTeam}`), {
      RN: ''
    });
  } else if (getPlayerPosition111 == 'md') {
    update(ref(db, `teams/${klTeam}`), {
      MD: ''
    });
  } else if (getPlayerPosition111 == 'sw') {
    update(ref(db, `teams/${klTeam}`), {
      SW: ''
    });
  } else if (getPlayerPosition111 == 'hy') {
    update(ref(db, `teams/${klTeam}`), {
      HY: ''
    });
  } else if (getPlayerPosition111 == 'ia') {
    update(ref(db, `teams/${klTeam}`), {
      IA: ''
    });
  }
  update(ref(db, `players/playerSkills/${positionPlayer111}`), {
    영입: 0,
    소속팀: 'FA'
  });
  alert(`${positionPlayer111} 선수를 방출하였습니다.`);
  $('.ens-frame.emx').removeClass('vx');
})

// 리그 클래스 생성
$('.ex-join-league-roomCreate button').click(function(){
  $('.ens-frame.leaguecontents-room-brx').addClass('vx');
  leagueClassTitle = $('.ex-join-league-roomCreate input').val();
  $('.league-contents-room-m-title').text(leagueClassTitle);
  num = Math.random().toString(36).substr(2,11);
  $('.leaguecontents-room-brx.ens-frame .ens-subject-sub.league-contents-room-m-sub').text(num);
  set(ref(db, `matches/archive/${num}`), {
    team1: klTeam,
    team2: '',
    create: klTeam,
    title: leagueClassTitle,
    winner: '',
    accessId: num
  });
  set(ref(db, `matches/live/${num}`), {
    team1: klTeam,
    team2: '',
    title: leagueClassTitle,
    create: klTeam,
    ready1: 0,
    ready2: 0,
    start: 0,
    accessId: num,
    exit: 0,
    mExit: 0
  });
  
// 나의 팀: team1
  iisox = setInterval(findPlayers, 2000)
})

// ?   
function findPlayers() {
  const starCountRef13 = ref(db, `teams/${klTeam}`);
  onValue(starCountRef13, (snapshot) => {
    const data13 = snapshot.val();
    sa22 = data13.SA;
    rn22 = data13.RN;
    md22 = data13.MD;
    sw22 = data13.SW;
    hy22 = data13.HY;
    ia22 = data13.IA;
    $('.leaguecontents-team1-sers').text(klTeam);
    if (sa22.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-name').text(sa22);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${sa22}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (rn22.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-name').text(rn22);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${rn22}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (md22.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-name').text(md22);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${md22}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (sw22.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-name').text(sw22);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${sw22}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (hy22.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-name').text(hy22);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${hy22}.png`);
    }
     else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (ia22.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-name').text(ia22);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${ia22}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    $('.leaguecontents-notice-scr').text('상대를 기다리는 중..');
  });
  const starCountRef14 = ref(db, `matches/live/${num}`);
    onValue(starCountRef14, (snapshot) => {
      const data14 = snapshot.val();
      e0 = data14.exit;
      e1 = data14.mExit;
      player2isexist = data14.team2;
    });
    if (player2isexist == '') {
    } else {
      const starCountRef15 = ref(db, `teams/${player2isexist}`);
      onValue(starCountRef15, (snapshot) => {
        const data15 = snapshot.val();
        sa23 = data15.SA;
        rn23 = data15.RN;
        md23 = data15.MD;
        sw23 = data15.SW;
        hy23 = data15.HY;
        ia23 = data15.IA;
      });
      $('.leaguecontents-team2-sers').text(player2isexist);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-name').text(sa23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-name').text(rn23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-name').text(md23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-name').text(sw23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-name').text(hy23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-name').text(ia23);
      if (sa23.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-name').text(sa23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${sa23}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (rn23.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-name').text(rn23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${rn23}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (md23.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-name').text(md23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${md23}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (sw23.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-name').text(sw23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${sw23}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (hy23.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-name').text(hy23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${hy23}.png`);
    }
     else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (ia23.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-name').text(ia23);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${ia23}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
      $('.leaguecontents-notice-scr').text('대기 중..');
      clearInterval(iisox);   
    }

    setInterval(function(){
      const starCountRef14 = ref(db, `matches/live/${num}`);
    onValue(starCountRef14, (snapshot) => {
      const data14 = snapshot.val();
      e0 = data14.exit;
      e1 = data14.mExit;
      player2isexist = data14.team2;
    });
      if (e0 == 0) {} else if (e0 == 1) {
        $('.leaguecontents-notice-scr').text('상대가 게임을 떠났습니다..');
        $('.leaguecontents-allPlayers-team.lati-team2 > span').text('');
        setTimeout(function(){$('.leaguecontents-notice-scr').text('새로운 상대를 기다리는 중..');},1400)
        $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind-name').text('');
        $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
        update(ref(db, `matches/live/${num}`), {
          exit: 0,
          team2: ''
        });
        iisox = setInterval(findPlayers, 2000)
      }
    }, 1250)
}
      
// 리그 대기실 나가기 (class owner)
$('.leaguecontents-room-brx.ens-frame .ens-icon').click(function(){
  var delClass = $('.leaguecontents-room-brx.ens-frame .league-contents-room-m-sub').text();
  set(ref(db, `matches/live/${delClass}`), {
    team1: null
  });
  clearInterval(iisox);
})

// 리그 대기실 나가기
$('.leaguecontents-room-brv.ens-frame .ens-icon').click(function(){
  var exitClass = $('.leaguecontents-room-brv.ens-frame .league-contents-room-m-sub').text();
  update(ref(db, `matches/live/${exitClass}`), {
    exit: 1
  });
})
      
// 로그인 안내 (클래스 생성)
$('.roomCreate').click(function(){
  if (klTeam == '') {
    alert('로그인이 필요합니다.');
  } else {
    $('.ex-join-league-roomCreate').css('display', 'flex');
  }
})

// 연속 코드 중단  
$('.leaguecontents-room-brx.ens-frame .ens-icon, .leaguecontents-room-brv.ens-frame .ens-icon').click(function(){
  clearInterval(iisox);
})
      
// 리그 참가 (2nd)      
$('.ec-join-league, .ex-join-league-button-right').click(function(){
  var leagueClassLength;
  var leagueClassName = '';
  const starCountRef16 = ref(db, `matches/live`);
  onValue(starCountRef16, (snapshot) => {
    const data16 = snapshot.val();
    leagueClassLength = Object.keys(data16).length;
    for (let fx = 0;fx < leagueClassLength;fx ++) {
      setTimeout(function(){
        var xObjects = data16[Object.keys(data16)[fx]];
        console.log(xObjects);
        $('.league-class-list').append(`
        <div class="ex-join-league-class">
        <div class="ex-join-league-ax">
        <div class="ex-join-league-class-title">
        <span class="league-class-title">${xObjects.title}</span>
        </div>
        <div class="ex-join-league-class-sub">
        <span class="league-class-team">${xObjects.create}</span>
        </div>
        </div>
        <div class="ex-join-league-ap" id="${xObjects.accessId}">
        <span class="material-symbols-outlined" class="joinLeagueClass">navigate_next</span>
        </div>
        </div>
        `);
        $('.league-class-load').css('display', 'none');
        /* ########################################################## 22.10.11 ^ 수정 완료*/
        $('.ex-join-league-ap').click(function(){
          $('.leaguecontents-room-brv').addClass('vx');
          var accessIdCR = $(this).attr('id');
          $('.leaguecontents-room-brv.ens-frame .ens-subject-sub.league-contents-room-m-sub').text(accessIdCR);
          update(ref(db, `matches/live/${accessIdCR}`), {
            team2: klTeam
          });
          update(ref(db, `matches/archive/${accessIdCR}`), {
            team2: klTeam
          });
          console.log('sd');
          var clAccessId = $(this).attr('id');
          const starCountRef14 = ref(db, `matches/live/${clAccessId}`);
          onValue(starCountRef14, (snapshot) => {
            const data14 = snapshot.val();
            var team192 = data14.team1;
            var leagueClassTitle221 = data14.title;
            $('.league-contents-room-m-title').text(leagueClassTitle221);
            const starCountRef55 = ref(db, `teams/${team192}`);
            onValue(starCountRef55, (snapshot) => {
              const data55 = snapshot.val();
              var sa212 = data55.SA;
              var rn212 = data55.RN;
              var md212 = data55.MD;
              var sw212 = data55.SW;
              var hy212 = data55.HY;
              var ia212 = data55.IA;
              $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-name').text(sa212);
              $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-name').text(rn212);
              $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-name').text(md212);
              $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-name').text(sw212);
              $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-name').text(hy212);
              $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-name').text(ia212);
              if (sa212.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-name').text(sa212);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${sa212}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (rn212.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-name').text(rn212);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${rn212}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (md212.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-name').text(md212);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${md212}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (sw212.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-name').text(sw212);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${sw212}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (hy212.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-name').text(hy212);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${hy212}.png`);
    }
     else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (ia212.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-name').text(ia212);
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${ia212}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team1 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
              $('.leaguecontents-team1-sers').text(team192);
              const starCountRef56 = ref(db, `teams/${klTeam}`);
              onValue(starCountRef56, (snapshot) => {
                const data56 = snapshot.val();
                var sa222 = data56.SA;
                var rn222 = data56.RN;
                var md222 = data56.MD;
                var sw222 = data56.SW;
                var hy222 = data56.HY;
                var ia222 = data56.IA;
                $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-name').text(sa222);
                $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-name').text(rn222);
                $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-name').text(md222);
                $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-name').text(sw222);
                $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-name').text(hy222);
                $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-name').text(ia222);
                if (sa222.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-name').text(sa222);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${sa222}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player1 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (rn222.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-name').text(rn222);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${rn222}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player2 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (md222.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-name').text(md222);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${md222}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player3 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (sw222.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-name').text(sw222);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${sw222}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player4 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (hy222.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-name').text(hy22);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${hy222}.png`);
    }
     else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player5 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
    if (ia222.length > 0) {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-name').text(ia222);
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-face img').attr('src', `/data/images/players/${ia222}.png`);
    } else {
      $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind.lati-player6 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
    }
                $('.leaguecontents-team2-sers').text(klTeam);
              })
            });
          })
        })
      }, 1200)
    }
  }, {
    onlyOnce: true
  })
})

// 페이지 이동 / 새로고침   
$(window).bind('beforeunload', function(){
  var accessId1 = $('.leaguecontents-room-brx.ens-frame .ens-subject-sub.league-contents-room-m-sub').text();
  var accessId2 = $('.leaguecontents-room-brv.ens-frame .ens-subject-sub.league-contents-room-m-sub').text();
  if (accessId1.length > 3) {
    set(ref(db, `matches/live/${accessId1}`), {
      team1: null
    }, {onlyOnce: true});
  } 
  if (accessId2.length > 3) {
    update(ref(db, `matches/live/${accessId2}`), {
      exit: 1,
    }, {onlyOnce: true});
    $('.leaguecontents-notice-scr').text('상대가 게임을 떠났습니다..');
    $('.leaguecontents-allPlayers-team.lati-team2 > span').text('');
        setTimeout(function(){$('.leaguecontents-notice-scr').text('새로운 상대를 기다리는 중..');
        update(ref(db, `matches/live/${accessId2}`), {
          exit: 0,
          team2: ''
        });  
                              },1400)
  }
  $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind-name').text('');
  $('.leaguecontents-allPlayers-team.lati-team2 .leaguecontents-allPlayers-team-ind-face img').attr('src', '/data/images/load/pi.svg');
});

// '리그 시작' 버튼 누를 시
$('.leaguecontents-league-staa').click(function(){
  var team1length = $('.leaguecontents-team1-sers').text().length;
  var team2length = $('.leaguecontents-team2-sers').text().length;
  if (team1length > 0 && team2length > 0) {
    console.log('게임 진행');
  } else {
    console.log('게임 진행 불가');
  }
})

/* ############################ */