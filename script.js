const budgetStyles = {

    low: `
        💰 가성비 여행<br>
        🍜 현지 맛집 중심<br>
        🚃 대중교통 이용<br>
        🏨 합리적인 숙소 추천
    `,

    normal: `
        💴 균형 잡힌 여행<br>
        🍣 맛집과 관광 모두 즐기기<br>
        🛍️ 쇼핑 일정 포함<br>
        🚅 편리한 이동
    `,

    high: `
        💎 여유로운 여행<br>
        🍽️ 특별한 식사 경험<br>
        🚕 편안한 이동<br>
        🏨 좋은 숙소 이용
    `

};

function getBudgetStyle(budget){

    if(budget < 50000){

        return budgetStyles.low;

    }
    else if(budget < 150000){

        return budgetStyles.normal;

    }
    else{

        return budgetStyles.high;

    }

}

function getRecommendation(city, style){

    const place = travelPlans[city];

    if(!place){
        return "❌ 여행지 정보를 찾을 수 없습니다.";
    }

    let result = `📍 추천 여행지<br>${city}<br><br>`;
    result += `🎯 여행 스타일<br>${style}<br><br>`;

    if(style === "🍜 음식"){

        result += "🍜 추천 음식<br><br>";
        result += place.food.join("<br>");

    }
    
    else if(style === "👀 볼거리"){

        result += "👀 추천 볼거리<br><br>";
        result += place.sightseeing.join("<br>");

    }
    else if(style === "🛍️ 쇼핑"){
      
      result += "🛍️ 쇼핑<br><br>";
      result += place.shopping.join("<br>");
      
    }
    else{

        result += "추천 정보가 없습니다.";

    }

    return result;

}

async function getAIPlan(city, budget,style){

    // 나중에 여기에 AI API 연결 코드가 들어갈 자리

    let plan = getRecommendation(city,style);


    return `
    🤖 AI가 분석한 여행 계획<br><br>

    ${plan}
    `;

}

function getAIComment(city, budget){

    let budgetText;


    if(budget < 50000){

        budgetText = "가성비";

    }
    else if(budget < 150000){

        budgetText = "균형 잡힌";

    }
    else{

        budgetText = "프리미엄";

    }


    return `
    🤖 AI 여행 추천<br><br>

    ${city} 여행을 추천합니다!<br>
    입력한 예산을 분석한 결과 <br><b>${budgetText}</b> 여행이 적합합니다.<br>
    선택한 여행 스타일에 맞는 장소를 추천해 드렸습니다.
    `;

}

const monthCity = {
  1 : "삿포로",
  2 : "오타루",
  3 : "가고시마",
  4 : "교토",
  5 : "가나자와",
  6 : "가마쿠라",
  7 : "후쿠오카",
  8 : "후쿠오카",
  9 : "닛코",
  10 : "나라",
  11 : "삿포로",
  12 : "삿포로",
};

const travelPlans = {

    "삿포로": {
      
        food: [
            "스아케 플러스",
            "GARAKU",
            "에비소바 이치겐",
            "라멘 신겐",
            "스미레 라멘",
            "네무로 하나미루 JR타워점",
            "토리톤 회전초밥",
            "니조시장 오이소",
            "키타노 구루메테이",
            "마루타마 라멘",
            "멘야 사이미",
            "삿포로 스프카레 히리히리",
            ],

        sightseeing: [
            "오도리 공원",
            "삿포로 시계탑",
            "홋카이도청 구 본청사",
            "모이와산",
            "삿포로 TV 타워",
            "홋카이도 신궁",
            "시로이 코이비토 파크",
            "삿포로 맥주 박물관",
            "미루야마 공원",
            "삿포로 팩토리",
            "니조시장",
            "스스키노",
        ],
        
        shopping: [
           "타누키코지 상점가",
           "삿포로 스텔라 플레이스",
           "다이마루 삿포로",
           "삿포로 ESTA",
           "PARCO 삿포로",
           "삿포로 팩토리",
           "아카렌카 테라스",
           "스스키노 라피라 주변 상권",
           "삿포로 지하상가 오로라타운",
           "폴타운 삿포로",
           "돈키호테 삿포로 타누키코지점",
           "빅카메라 삿포로점",
           "요도바시 카메라 멀티미디어 삿포로",
            ]
    
    },
    
    "오타루": {
      
          sightseeing: [
            "오타루 운하",
            "오타루 운하 산책로",
            "사카이마치 거리",
            "오타루 오르골당 본관",
            "키타이치가라스",
            "오타루 기타이치홀",
            "오타루 박물관",
            "오타루 운하 크루즈",
            "텐구산 전망대",
            "텐구산 로프웨이",
            "구 일본은행 오타루점",
            "오타루시 종합박물관 운하관",
            "구 홋카이도 은행 본점",
            "아사리가와 온천",
            ],

        food: [
            "오타루 마사즈시 본점",
            "스시코우",
            "스시도코로 사이카",
            "이세즈시",
            "스시야 코우",
            "타키나미 식당",
            "아오토야",
            "키타노 아이스",
            "키타카로 오타루 본관",
            "와카도리 야마",
            "라멘 와카사",
            "라멘 이로하",
            "카마에이",
            ],
        
        shopping: [
           "오타루 오르골당",
           "사카이마치 거리",
           "르타오 본점",
           "롯카테이 오타루점",
           "산카쿠 시장",
           "오타루 기타이치홀",
           "오타루 타이쇼 유리관",
           "아사쿠사바시 주변 기념품점",
           "오타루 캔들 공방",
           "오타루 공예관",
           "유리의 거리 오타루점",
            ]

    },
    
    "가고시마": {
      
          sightseeing: [
            "사쿠라지마",
            "센간엔",
            "이소 신사",
            "시로야마 전망대",
            "가고시마 수족관",
            "메이지 유신 박물관",
            "사이고 다카모리 동상",
            "가고시마 현립 역사자료센터 렛시칸",
            "유노히라 전망소",
            "나기사 공원 족욕탕",
            "이부스키 모래찜질 온천",
            ],

        food: [
            "돈카츠 가와쿠로",
            "아지노톤카츠 마루이치",
            "쿠로부타 요리 아지노야",
            "돈카츠 다이라",
            "무자키",
            "텐몬칸 무자키",
            "쿠로카츠테이",
            "토리사시 토리신",
            "사쓰마 아지",
            "아카몬",
            "라멘 코무라사키",
            ],
        
        shopping: [
           "텐몬칸 상점가",
           "아뮤 플라자 가고시마",
           "야마가타야 백화점",
           "돌핀포트",
           "마르야 가고시마",
           "가고시마 중앙역 기념품점",
           "사쓰마 공예관",
           "시로야마 관광호텔 기념품점",
           "사쓰마야",
           "가고시마 공항 기념품점",
           "텐몬칸 돈키호테",
            ]

    },

    "교토": {
      
          sightseeing: [
            "후시미 이나리 타이샤",
            "기요미즈데라",
            "아라시야마 대나무숲",
            "금각사",
            "은각사",
            "니시키 시장",
            "기온 거리",
            "산넨자카",
            "나넨자카",
            "교토 황궁",
            ],

        food: [
            "이나리 스시 만푸쿠",
            "니시키 시장 다이마루",
            "카츠쿠라 교토역점",
            "혼케 오와리야",
            "기온 두부 야마토",
            "오멘",
            "스시 이와타",
            "텐푸라 마츠",
            "교토 가츠규",
            ],
        
        shopping: [
           "니시키 시장",
           "시조 가와라마치",
           "다카시마야 교토점",
           "교토 다이마루",
           "교토역 지하상가 포르타",
           "교토역 빌딩",
           "테라마치 상점가",
           "신쿄고쿠 상점가",
           "무인양품 교토 BAL점",
            ]

    },
    
    "가나자와": {
      
        food: [
            "오미초 시장 야마상 스시",
            "모리모리 스시",
            "오노 카라쿠",
            "코린보 다이닝",
            "텐동 이와타",
            "카가 요리 아카사카",
            "츠루기 소바",
            "히라사와 소바",
            "고후쿠",
            ],

        sightseeing: [
            "겐로쿠엔",
            "가나자와성 공원",
            "히가시차야 거리",
            "나가마치 무사저택 거리",
            "오미초 시장",
            "21세기 미술관",
            "니시차야 거리",
            "묘류지",
            "가나자와 축음기 박물관",
            "오야마 신사",
        ],
        
        shopping: [
           "가나자와 백화점 엠자",
           "겐로쿠엔 주변 기념품점",
           "히가시차야 거리 상점가",
           "니시차야 거리 상점",
           "가나자와 포레스트 쇼핑물",
           "아트 공예 마켓",
           "코린보 도큐 스퀘어",
           "무인양품 가나자와점",
           "아베뉴",
           "야마나카 칠기점",
        ],
    },
    
    "가마쿠라": {
      
        food: [
            "카마쿠라 마츠바야",
            "아마루",
            "카페 론디노",
            "아키모토",
            "카마쿠라 야키토리 히로",
            "고마치도리 카페",
            "카페 사카나",
            "아사쿠사 키비당고",
            ],

        sightseeing: [
            "가마쿠라 대불",
            "호코쿠리",
            "하세데라",
            "조묘지",
            "가마쿠라 궁",
            "에노시마",
            "겐지야마 공원",
            "가마쿠라 해안 산책로",
        ],
        
        shopping: [
           "고마치도리",
           "쿠루미코",
           "가뭌라보리 카이칸",
           "하치만구 앞 상점가",
           "하세 거리 상점가",
           "도자기 공방 가마쿠라점",
           "에노시마 벤텐마루 상점가",
            ]
    },

    "후쿠오카": {
      
        food: [
            "이치란 본사 총본점",
            "신신 라멘 ",
            "나가하마 라멘 간가라",
            "멘타이쥬",
            "토리카와 다이진",
            "텐진 호르몬",
            "우오마사",
            "멘야 카이리키",
            ],

        sightseeing: [
            "다자이후 텐만구",
            "오호리 공원",
            "후쿠오카 타워",
            "나카스",
            "모모치 해변",
            "하카타역",
            "스미요시 신사",
            "시카노시마",
        ],
        
        shopping: [
           "캐널시티 하카타",
           "텐진 지하상가",
           "하카타 한큐",
           "미츠코시 후코오카점",
           "이와타야 본점",
           "하카타 마루이",
           "라라포트 후쿠오카",
            ]
    },

    "아오모리": {
      
        sightseeing: [
            "네부타의 집 와랏세",
            "아오모리 미술관",
            "핫코다산",
            "도와다호",
            "히로사키성",
            "아사무시 온천",
            "아오키 호수",
            "쓰가루 네부타 마을",
            ],

        food: [
            "아지노 삿포로 오니시",
            "오사나이",
            "스케로쿠 아오모리역점",
            "카와요시",
            "스시마사",
            "사카나쿠이노 덴",
            "이치반보시",
            "마루카이 라멘",
        ],
        
        shopping: [
           "A-FACTORY",
           "아오모리역 빌딩",
           "신마치 거리",
           "아우가",
           "아오모리 갓사이센터",
           "나카산 백화점",
           "히로사키 나카미치 상점가",
            ]
    },
    
    "닛코": {
      
        sightseeing: [
            "닛코 도쇼구",
            "신쿄 다리",
            "린노지",
            "게곤 폭포",
            "주젠지호",
            "류즈 폭포",
            "이로하자카",
            "아케치다일 전망대",
            ],

        food: [
            "카나야 호텔 메인 다이닝",
            "닛코 유바마키 젠",
            "젠자이 미츠야",
            "메구리",
            "호시노 리조트 카이 닛코",
            "아즈마야",
            "후지야 카페",
            "이로하자카 카페",
        ],
        
        shopping: [
           "닛코 에도무라 기념품점",
           "닛코 유바 전문점",
           "닛코 푸딩 테이",
           "닛코 유젠",
           "닛코 사루야",
           "닛코 양갱 전문점",
           "닛코 사케 판매점",
            ]
    },
    
    "나라": {
      
        sightseeing: [
            "도다이지",
            "나라 공원",
            "가스가타이샤",
            "고후코지",
            "도쇼다이지",
            "야쿠시지",
            "헤이조궁 터",
            "나라 국립박물관",
            ],

        food: [
            "시즈카",
            "나카타니도",
            "멘도코로 혼다",
            "쿠로가와 혼케",
            "마구로 고야",
            "카마이키",
            "히라소",
            "호라이켄",
        ],
        
        shopping: [
           "나카타니도",
           "나라 호텔 숍",
           "나라마치 카라쿠리 장난감관",
           "나라 유리공방",
           "카키노하즈시 전문점",
           "나라 칠기점",
           "전통 화과자점",
            ]
    },
};

const startBtn = document.getElementById("startBtn");

const home = document.getElementById("home");

const planner = document.getElementById("planner");

const result = document.getElementById("result");

const restartBtn = document.getElementById("restartBtn");

const makePlan = document.getElementById("makePlan");

const planCard = document.getElementById("planCard");

const loading = document.getElementById("loading");

const loadingText = document.getElementById("loadingText");


// 메인 → 입력 화면
startBtn.addEventListener("click", () => {

    home.style.display = "none";
    planner.style.display = "block";

});

// 입력 → 결과 화면
makePlan.addEventListener("click", () => {
  
  const month = Number(document.getElementById("month").value);
    const city = monthCity[month];
    const budget = Number(document.getElementById("budget").value);
    const style = document.getElementById("style").value;

    planner.style.display = "none";
    loading.style.display = "block";

    const messages = [
        "🗾 여행 스타일 분석 중...",
        "🍣 맛집 찾는 중...",
        "🏯 관광지 찾는 중...",
        "🚅 이동 경로 계산 중...",
        "✨ 최적의 일정 만드는 중..."
    ];

    let index = 0;

    const interval = setInterval(() => {

        loadingText.textContent = messages[index];

        index++;

    }, 500);

    setTimeout(async() => {

        clearInterval(interval);

        loading.style.display = "none";

        result.style.display = "block";

        planCard.innerHTML = `

<div class="resultTitle">
    🇯🇵 ${city} AI 여행 추천
</div>



<div class="infoCard">

    <h3>💰 예산 분석</h3>

    <p>
    ${budget}엔
    </p>

    <p>
    ${getBudgetStyle(budget)}
    </p>

</div>



<div class="infoCard aiCard">

    <h3>🤖 AI 여행 추천</h3>

    <p>
    ${getAIComment(city, budget)}
    </p>

</div>



<div class="infoCard">

    <h3>🗓️ 추천 일정</h3>

    <p>
    ${await getAIPlan(city,budget,style)}
    </p>

</div>

`;

    }, 2500);

});

// 결과 → 입력 화면으로 돌아가기
restartBtn.addEventListener("click", () => {

    result.style.display = "none";

    planner.style.display = "block";

});
