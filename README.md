# 🔰 **Assignment_Cardoc (with NestJS)**

🔗 **wanted x wecode 프리온보딩 백엔드 코스 - [Assignment 5] Deer Corporation**



## 🌎 **배포**

주소 : 



<br>



## 🛠 **프로젝트 빌드 및 서버 실행 방법**

1. 상단의 Code 버튼을 눌러 경로를 복사한 후 클론 받습니다.

```
$ git clone https://github.com/bokiri409/Assignment7-Cardoc.git
```

2. 패키지를 설치합니다.

```
$ npm install
```

3. 서버를 실행해 줍니다.

```
$ npm start
```

4. 정해진 API에 접근하여 서비스를 이용합니다.

<br>

## 📝 **과제 요구사항**

### 📌 [목차]

<details>
    <summary> 1. 배경 및 공통 요구사항 </summary>
    <div markdown="1">

```
😁 카닥에서 실제로 사용하는 프레임워크를 토대로 타이어 API를 설계 및 구현합니다.
```

- 데이터베이스 환경은 별도로 제공하지 않습니다.
 **RDB중 원하는 방식을 선택**하면 되며, sqlite3 같은 별도의 설치없이 이용 가능한 in-memory DB도 좋으며, 가능하다면 Docker로 준비하셔도 됩니다.

- 단, 결과 제출 시 README.md 파일에 실행 방법을 완벽히 서술하여 DB를 포함하여 전체적인 서버를 구동하는데 문제없도록 해야합니다.

- 데이터베이스 관련처리는 raw query가 아닌 **ORM을 이용하여 구현**합니다.

- Response Codes API를 성공적으로 호출할 경우 200번 코드를 반환하고, 그 외의 경우에는 아래의 코드로 반환합니다.
    
<br>
    
|Response Code|Description|
|--|--|
|200 OK|성공|
|400 Bad Request|Parameter가 잘못된 (범위, 값 등)|
|401 Unauthorized|인증을 위한 Header가 잘못됨|
|500 Internal Server Error|기타 서버 에러|
    	
<br>
</div>

</details>

<details>
    <summary> 2. 사용자 생성 API </summary>
    <div markdown="1">
	    
- ID/Password로 사용자를 생성하는 API.
	    
- 인증 토큰을 발급하고 이후의 API는 인증된 사용자만 호출할 수 있다.


```jsx
/* Request Body 예제 */

{ "id": "candycandy", "password": "ASdfdsf3232@" }
```
    
</div>

</details>

<details>
    <summary> 3. 사용자가 소유한 타이어 정보를 저장하는 API</summary>
    <div markdown="1">
	    
- 자동차 차종 ID(trimID)를 이용하여 사용자가 소유한 자동차 정보를 저장한다.
	    
- 한 번에 최대 5명까지의 사용자에 대한 요청을 받을 수 있도록 해야한다. 즉 사용자 정보와 trimId 5쌍을 요청데이터로 하여금 API를 호출할 수 있다는 의미이다.


```jsx
/* Request Body 예제 */
[
  {
    "id": "candycandy",
    "trimId": 5000
  },
  {
    "id": "mylovewolkswagen",
    "trimId": 9000
  },
  {
    "id": "bmwwow",
    "trimId": 11000
  },
  {
    "id": "dreamcar",
    "trimId": 15000
  }
]
```

🔍 **상세구현 가이드**

- 자동차 정보 조회 API의 사용은 아래와 같이 5000, 9000부분에 trimId를 넘겨서 조회할 수 있다. <br>
  **자동차 정보 조회 API 사용 예제** <br>
  📄 [https://dev.mycar.cardoc.co.kr/v1/trim/5000](https://dev.mycar.cardoc.co.kr/v1/trim/5000) <br>
  📄 [https://dev.mycar.cardoc.co.kr/v1/trim/9000](https://dev.mycar.cardoc.co.kr/v1/trim/9000) <br>
  📄 [https://dev.mycar.cardoc.co.kr/v1/trim/11000](https://dev.mycar.cardoc.co.kr/v1/trim/11000) <br>
  📄 [https://dev.mycar.cardoc.co.kr/v1/trim/15000](https://dev.mycar.cardoc.co.kr/v1/trim/15000) <br>
- 조회된 정보에서 타이어 정보는 spec → driving → frontTire/rearTire 에서 찾을 수 있다.
- 타이어 정보는 205/75R18의 포맷이 정상이다. 205는 타이어 폭을 의미하고 75R은 편평비, 그리고 마지막 18은 휠사이즈로써 {폭}/{편평비}R{18}과 같은 구조이다.
  위와 같은 형식의 데이터일 경우만 DB에 항목별로 나누어 서로다른 Column에 저장하도록 한다.
	    
</div>
</details>

<details>
    <summary>4. 사용자가 소유한 타이어 정보 조회 API</summary>
    <div markdown="1">
	    
- 사용자 ID를 통해서 2번 API에서 저장한 타이어 정보를 조회할 수 있어야 한다.
	    
    </div>
</details>


<br>

## 🧬 **DB 모델링**

![Cardoc_modeling](https://user-images.githubusercontent.com/41619081/143784581-012aa4b2-2f6f-42fc-917c-d20cb3737f5d.png)


<br>

## 🏫 **사용 기술**

- Backend : [![img](https://camo.githubusercontent.com/cb0c26ab83b212946400b29c325debd89d07f0c36e3568c840dc6ae07127ca1b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6573744a532d4530323334453f7374796c653d666c6174266c6f676f3d4e6573744a53266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/cb0c26ab83b212946400b29c325debd89d07f0c36e3568c840dc6ae07127ca1b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6573744a532d4530323334453f7374796c653d666c6174266c6f676f3d4e6573744a53266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/17131306fc490286432e1148ea92ac1754363621a9d185bf613ad6e0f4d33a96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666c6174266c6f676f3d54797065536372697074266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/17131306fc490286432e1148ea92ac1754363621a9d185bf613ad6e0f4d33a96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666c6174266c6f676f3d54797065536372697074266c6f676f436f6c6f723d7768697465)
- DataBase : [![img](https://camo.githubusercontent.com/779f9a01c244fb737d351d3256288537428012c3cc755e70e7c5663afc1b7c01/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3434373941313f7374796c653d666c6174266c6f676f3d4d7953514c266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/779f9a01c244fb737d351d3256288537428012c3cc755e70e7c5663afc1b7c01/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3434373941313f7374796c653d666c6174266c6f676f3d4d7953514c266c6f676f436f6c6f723d7768697465)
- Collaboration : [![img](https://camo.githubusercontent.com/493683d1e69c600dc04bb375ab588466c554471ea28f7326b390b5103c401058/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666c6174266c6f676f3d476974266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/493683d1e69c600dc04bb375ab588466c554471ea28f7326b390b5103c401058/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666c6174266c6f676f3d476974266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/779ecf5e6059fd906fca2099015186945f91679f22da6bf05f37f52e69e86e8a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666c6174266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/779ecf5e6059fd906fca2099015186945f91679f22da6bf05f37f52e69e86e8a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666c6174266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/1b756736e374960a174cb6f65083804b2052cd6f6e997af84206794e2ca77f71/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666c6174266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/1b756736e374960a174cb6f65083804b2052cd6f6e997af84206794e2ca77f71/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666c6174266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465) <img src="https://img.shields.io/badge/Swagger-ddddd?style=flat&logo=Swagger&logoColor=white"/>
- Deploy: [![img](https://camo.githubusercontent.com/f9e746416cf54181ba668cfe6e2861d1932c619847382646703a583ea89f249f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e204157532d3233324633453f7374796c653d666c6174266c6f676f3d416d617a6f6e20415753266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/f9e746416cf54181ba668cfe6e2861d1932c619847382646703a583ea89f249f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416d617a6f6e204157532d3233324633453f7374796c653d666c6174266c6f676f3d416d617a6f6e20415753266c6f676f436f6c6f723d7768697465) <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white"/>

<br>

## 📂 **폴더 구조**

```
📁 src
├── 📁 domain
│  ├── 📂 auth
│  │  ├── ...
│  ├── 📂 users
│  |  ├── 📂 dto
│  │  |   ├── 📄 createUser.dto.ts
│  │  |   ├── 📄 signInUser.dto.ts
│  │  ├── 📄 users.controller.ts
│  │  ├── 📄 users.module.ts
│  │  ├── 📄 users.repository.ts
│  │  └── 📄 users.service.ts
│  ├── 📂 entities
│  │  ├── 📄 carInfo.entity.ts
│  │  └── 📄 users.entity.ts
│  ├── 📂 cars
│  |  ├── 📂 dto
│  │  |   └── 📄 carsInfo.dto.ts
│  │  ├── 📄 cars.controller.ts
│  │  ├── 📄 cars.module.ts
│  │  ├── 📄 cars.repository.ts
│  │  └── 📄 cars.service.ts
├── 📄 app.module.ts
└── 📄 main
📁 test
├── 📄 app.e2e-spec.ts
└── 📄 jest-e2e.json
📄 .env
📄 nest-cli.json
📄 package.json
📄 package-lock.json
📄 tsconfig.json
📄 tsconfig.build.json
📄 README.md
```

<br>

## ⚡ **작업 컨벤션**

#### - 코딩 컨벤션 🏷️

- 파일 / 변수 네이밍 : CamelCase
- 탭 사이즈 : 4

#### - 깃 컨벤션 📐

| 태그 이름        | 설명                                                         |
| ---------------- | ------------------------------------------------------------ |
| 💡Feat            | 새로운 기능을 추가할 경우                                    |
| 🐛Fix             | 버그를 고친 경우                                             |
| 🖌Design          | CSS 등 사용자 UI 디자인 변경                                 |
| ❗️BREAKING CHANGE | 커다란 API 변경의 경우                                       |
| ❗️HOTFIX          | 급하게 치명적인 버그를 고쳐야하는 경우                       |
| 🧷Style           | 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는 경우         |
| ✂️Refactor        | 프로덕션 코드 리팩토링                                       |
| 💬Comment         | 필요한 주석 추가 및 변경                                     |
| 📖Docs            | 문서를 수정한 경우                                           |
| ✔️Test            | 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경X)            |
| ⚒Chore           | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경X) |
| 🔧Rename          | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우           |
| 🔥Remove          | 파일을 삭제하는 작업만 수행한 경우                           |

<br>

## 🔗 **구현 기능**

✅ 사용자 생성 API

✅ 사용자가 소유한 타이어 정보를 저장하는 API

✅ 사용자가 소유한 타이어 정보를 저장하는 API

<br>

## 🐾 **API**

[Swagger 주소 - 링크](http://localhost:3000/api)

<br>

## 🐾 **API Test 방법**

#### 1. 위의 Postman 주소 링크를 클릭하여 Swagger로 들어갑니다.

#### 2. 유저 API를 이용하여 회원가입, 로그인을 진행합니다.

#### 3. 자동차 정보 API를 이용하여 차종ID를 저장하고, 차종 타이어 정보를 조회합니다.

<br>

## 🍭 **TIL 주소**
