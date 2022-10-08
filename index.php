<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>PRE-ALPHA ^ KL MANAGAER v2</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&family=Maven+Pro:wght@400;500;600;700;800;900&family=Secular+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/data/styles/viewpoint.css" />
    <link rel="stylesheet" href="/data/styles/ad.css" />
    <link rel="stylesheet" href="/data/styles/setup.css" />
    <link rel="stylesheet" href="/data/styles/frame.css" />
    <link rel="stylesheet" href="/data/styles/header.css" />
    <link rel="stylesheet" href="/data/styles/create.css" />
    <link rel="stylesheet" href="/data/styles/team-players.css" />
    <link rel="stylesheet" href="/data/styles/list-players.css" />
    <link rel="stylesheet" href="/data/styles/shouting.css" />
    <link rel="stylesheet" href="/data/styles/footer.css" />
    <link rel="stylesheet" href="/data/styles/faq.css" />
    <link rel="stylesheet" href="/data/styles/aside.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script defer src="/data/scripts/pro-players.js"></script>
    <script defer src="/data/scripts/ama-players.js"></script>
    <script defer src="/data/scripts/let-players.js"></script>
    <script defer src="/data/scripts/apps.js"></script>
    <script defer src="/data/scripts/mode.js"></script>
  </head>
  <body class="la">
    <div class="viewpoint">
      <div class="capt"></div>
      <div class="crash">
        <span class="selectedPlayer"></span>
      </div>
      <div class="recruit ens-frame">
        <div class="inner">
          <div class="ens-header">
            <div class="inner">
              <div class="ens-subject">
                <span class="ens-subject-sub">선수 영입</span>
              </div>
              <div class="ens-icon">
                <span class="material-symbols-outlined">close</span>
              </div>
            </div>
          </div>
          <div class="ens-content">
            <!-- 
            <div class="ens-nPlayer">
              <span class="selectedPlayer">유창현</span>
              <span>선수</span>
            </div>
            -->
            <div class="ens-aPlayer">
              <div class="ens-fPlayer">
                <img src="/data/images/players/유창현.png" class="ens-uPlayer"> 
              </div>
              <div class="ens-vPlayer">
                <div class="ens-1vPlayer">
                  <div class="ens-11vPlayer ens-abs">
                    <span>주행 안정성</span>
                    <div class="ens-12vPlayer ens-progress"></div>
                  </div>
                </div>
                <div class="ens-2vPlayer">
                  <div class="ens-21vPlayer ens-abs">
                    <span>사고 회복력</span>
                    <div class="ens-22vPlayer ens-progress"></div>
                  </div>
                </div>
                <div class="ens-3vPlayer">
                  <div class="ens-31vPlayer ens-abs">
                    <span>TOP3 유지력</span>
                    <div class="ens-32vPlayer ens-progress"></div>
                  </div>
                </div>
                <div class="ens-4vPlayer">
                  <div class="ens-41vPlayer ens-abs">
                    <span>뒷심</span>
                    <div class="ens-42vPlayer ens-progress"></div>
                  </div>
                </div>
                <div class="ens-5vPlayer">
                  <div class="ens-51vPlayer ens-abs">
                    <span>라인 효율성</span>
                    <div class="ens-52vPlayer ens-progress"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ens-gPlayer">
              <div class="ens-bPlayer">
                <span>영입하기</span>
              </div>
              <div class="ens-pPlayer">
                <span>비교</span>
              </div>
            </div>
            <span id="analData" style="display:block;width:100%;margin-top:11px;font-size:11px;color:var(--special3);text-align:center;">데이터 수집 중..</span>
          </div>
        </div>
      </div>
      <div class="login ens-frame">
        <div class="ens-header">
          <div class="inner">
            <div class="ens-subject">
              <span class="ens-subject-sub">로그인</span>
            </div>
            <div class="ens-icon">
              <span class="material-symbols-outlined">close</span>
            </div>
          </div>
        </div>
        <div class="ens-content">
          <div>
            <input type="text" class="ens-input ens-input-login-team" placeholder="구단명">
            <input type="email" class="ens-input ens-input-login-email" placeholder="매니저 이메일">
            <input type="password" class="ens-input ens-input-login-password" placeholder="구단 암호">
            <div class="ens-ggTools">
              <div class="ens-ggLogin">
                <span>로그인</span>
              </div>
              <div class="ens-gtJoin">
                <span>가입</span>
              </div>
            </div>
          </div>
          <span style="display:block;margin-top:7px;text-align:center;width:100%;color:#ff0000;font-size:13px"></span>
        </div>
      </div>
      <div class="join ens-frame">
        <div class="ens-header">
          <div class="inner">
            <div class="ens-subject">
              <span class="ens-subject-sub">가입</span>
            </div>
            <div class="ens-icon">
              <span class="material-symbols-outlined">close</span>
            </div>
          </div>
        </div>
        <div class="ens-content">
          <div>
            <input type="text" class="ens-input ens-input-join-team" placeholder="구단명">
            <input type="email" class="ens-input ens-input-join-email" placeholder="매니저 이메일">
            <input type="password" class="ens-input ens-input-join-password" placeholder="구단 암호">
            <div class="ens-ggTools">
              <div class="ens-ggJoin">
                <span>가입</span>
              </div>
              <div class="ens-gtLogin">
                <span>로그인</span>
              </div>
            </div>
          </div>
          <span style="display:block;margin-top:7px;text-align:center;width:100%;color:#ff0000;font-size:13px">구단명이 존재하는 경우, 어떠한 경고없이 가입이 거부됩니다.</span>
        </div>
      </div>
    </div>
    <div class="fixed-for-prealpha">
      <button id="mode">
        <span class="material-symbols-outlined light">light_mode</span>
        <span class="material-symbols-outlined dark">dark_mode</span>
      </button>
    </div>
    <div class="aside">
      <div class="inner"></div>
    </div>
    <div class="loading">
      <div class="inner">
        <span class="setr">페이지 로드 중..</span>
        <div class="alti">
          <span>원활한 진행을 위해 모든&nbsp;</span><span class="alti-now">CSS, JS</span><span>을(를) 불러오고 있습니다.</span>
        </div>
        <div class="alti-progress"></div>
      </div>
    </div>
    <div class="main wrap">
      <div class="header">
        <div class="inner">
          <div class="menu">
            <div class="menu-box">
              <span class="material-symbols-outlined">menu</span>
            </div>
          </div>
          <a href="/">
            <div class="logo">
              <div class="logo-box">
                <span>KL</span>
              </div>
            </div>
          </a>
          <div class="users">
            <div class="users-box">
              <div class="users-bx-coin">
                <div class="users-bx-coin-png">
                  <img src="/data/images/icons/coin.png">
                </div>
                <div class="users-bx-coin-account">
                  <span id="kCoin">999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="create">
        <div class="inner">
          <div class="item">
            <input type="text" class="create-team-name" placeholder="구단명을 입력하세요.">
            <button class="create-team">
              <span class="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
      </div>
      <div class="team-players">
        <div class="inner">
          <table>
            <thead>
              <th>SA</th>
              <th>RN</th>
              <th>MD</th>
              <th>SW</th>
              <th>HY</th>
              <th>IA</th>
            </thead>
            <tbody>
              <td>
                <span>유창현</span>
              </td>
              <td>
                <span>박인수</span>
              </td>
              <td>
                <span>유영혁</span>
              </td>
              <td>
                <span>최영훈</span>
              </td>
              <td>
                <span>김승태</span>
              </td>
              <td>
                <span>이은택</span>
              </td>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div class="list-players">
          <div class="inner">
            <div class="line">
              <div class="line-let pro selected">
                <span>PRO</span>
              </div>
              <div class="line-let amateur">
                <span>AMA</span>
              </div>
              <div class="line-players pro selected"></div>
              <div class="line-players amateur"></div>
            </div>
          </div>
        </div>
        <div class="shouting">
          <div class="inner">
            <span id="dfi">.</span>
          </div>
          <a class="change-shouting" target="_blank" href="/id/shouting">응원 멘트 변경</a>
        </div>
        <div class="faq">
          <div class="inner">
            <div class="pret-question">
              <div class="pret-question-head">
                <span>포지션 소개</span>
                <span class="material-symbols-outlined">expand_more</span>
              </div>
              <div class="pret-question-body">
                <span>포지션 소개</span>
              </div>
            </div>
            <div class="pret-question">
              <div class="pret-question-head">
                <span>프로 / 아마추어 선정 기준</span>
                <span class="material-symbols-outlined">expand_more</span>
              </div>
              <div class="pret-question-body">
                <span>팀전, 개인전 선수: 선수 소속이 프로팀이라면 프로로 선정됩니다.</span>
                <span>팀전 선수: 선수 소속이 프로팀이라면 프로로 선정됩니다.</span>
                <span>개인전 선수: 선수가 한 경기동안 1위를 2번이상 차지할 경우 프로로 선정됩니다.</span>
              </div>
            </div>
            <div class="pret-question">
              <div class="pret-question-head">
                <span>선수 등록</span>
                <span class="material-symbols-outlined">expand_more</span>
              </div>
              <div class="pret-question-body">
                <span><a class="clicktomove" href="/id/players" target="_blank">여기</a>를 눌러 선수를 등록해주세요.</span>
              </div>
            </div>
            <div class="pret-question">
              <div class="pret-question-head">
                <span>영입 비용</span>
                <span class="material-symbols-outlined">expand_more</span>
              </div>
              <div class="pret-question-body">
                <span>영입 비용</span>
              </div>
            </div>
            <div class="pret-question">
              <div class="pret-question-head">
                <span>오픈 프로젝트</span>
                <span class="material-symbols-outlined">expand_more</span>
              </div>
              <div class="pret-question-body">
                <span><a class="clicktomove" href="/id/discord">여기</a>를 눌러 개발자들이 소통하고 있는 디스코드 채널에 접속하세요.</span>
              </div>
            </div>
            <div class="pret-question">
              <div class="pret-question-head">
                <span>프로젝트 기여</span>
                <span class="material-symbols-outlined">expand_more</span>
              </div>
              <div class="pret-question-body">
                <span><a class="clicktomove" href="/id/projects">여기</a>를 눌러 여러분들의 재능을 프로젝트에 기여해주세요.</span>
                <span>프로젝트에 기여하시면 크레딧 영역에 닉네임이 등록되며, 참여에 대한 금전적 보상은 없습니다.</span>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="inner">
            <div class="footer-line">
              <span class="sort-credit">제작</span>
              <span class="user-credit">
                <a href="//instagram.com/hyndf05" target="_blank">hyndf05</a>
              </span>
            </div>
            <div class="footer-line">
              <span class="sort-credit">선수 분석</span>
              <span class="user-credit"></span>
            </div>
            <div class="footer-line">
              <span class="sort-credit">밴픽 분석</span>
              <span class="user-credit"></span>
            </div>
            <div class="footer-line">
              <span class="sort-credit">지원</span>
              <span class="user-credit">
                <a href="//instagram.com/drop_castle" target="_blank">drop_castle</a>
              </span>
            </div>
            <div class="footer-line">
              <span class="user-credut">Sponsored by NiZ Esports</span>
            </div>
            <div class="footer-line version">
              <span class="sort-version">KL MANAGER 2 <span id="version">UNKN</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
<script>

  
</script>
    <script type="module">
      
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
  import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
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

      
/* ##################### J O I N ######################## */

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
    team: team,
    kCoin: kCoin
  });
  set(ref(db, `confirm/exist/teams/${team}`), {
    owner: email
  });
  $('.ens-frame.join').removeClass('vx');
  $('.ens-frame.login').addClass('vx');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
        
      } else {
      }
    });
  
})
      
/* ##################### L O G I N ######################## */
      
$('.ens-ggLogin').click(function(){
var email2 = $('.ens-input-login-email').val();
var password2 = $('.ens-input-login-password').val();
var team2 = $('.ens-input-login-team').val();
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
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('이메일 또는 비밀번호가 올바르지 않습니다.');
  });
})

/* ############################################################## */

$('.indi-players').click(function(){
  var tku = $(this).attr('id');
  var playerImages = `/data/images/players/${tku}.png`;
  $('.ens-uPlayer').attr('src', playerImages)
  $('.selectedPlayer').text(tku);
  $('.ens-frame.recruit').addClass('vx');

const starCountRef = ref(db, `players/playerSkills/${tku}`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      var sk1 = data.주행안정성;
      var sk2 = data.사고회복력;
      var sk3 = data.TOP3유지력;
      var sk4 = data.뒷심;
      var sk5 = data.라인효율성;
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
        $('.ens-12vPlayer').css('width', `${sk1}%`);
        $('.ens-22vPlayer').css('width', `${sk2}%`);
        $('.ens-32vPlayer').css('width', `${sk3}%`);
        $('.ens-42vPlayer').css('width', `${sk4}%`);
        $('.ens-52vPlayer').css('width', `${sk5}%`);
        $('#analData').css('display', 'none');
      }, 700)
      }
    });
  
});
</script>
<script type="module" defer src="/data/scripts/works.js"></script>
  </body>
</html>