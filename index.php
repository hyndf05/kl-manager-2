<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>PRE-ALPHA ^ KL MANAGAER v2</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&family=Maven+Pro:wght@400;500;600;700;800;900&family=Secular+One&display=swap" rel="stylesheet">
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
        <span>페이지 로드 중..</span>
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
                  <span id="">999</span>
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
            <span>박인수 22-2 양대우승 가자!!</span>
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
            <div class="footer-line version">
              <span class="sort-version">KL MANAGER 2 pre-alpha 1.2.8b</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>