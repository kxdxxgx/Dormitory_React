<div align=center>
	<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=Airbnb&fontSize=80" />	
</div>

## [벡엔드 바로가기](https://github.com/jingom368/Team_Project_Spring)

<h2>- Architecture</h2>
<div><img src="https://github.com/jingom368/Team_Project_Spring/assets/67932739/d0605ed2-42bf-4e49-aa7f-eb8cf751b60d" /></div>

<h2>- Frontend Development</h2>
<div><img src="https://github.com/jingom368/Team_Project_React/assets/67932739/ab192d1e-a4de-4c29-adf8-89aae8fcc05c" /></div>

<h2>- Development Tools & Collaboration</h2>
<div><img src="https://github.com/jingom368/Team_Project_React/assets/67932739/e3f47fef-f2eb-499f-a101-4f4c7afb9da3"></div>

<h2>- DevOps & Containerization</h2>
<div><img src="https://github.com/jingom368/Team_Project_Spring/assets/67932739/984bd890-eaff-4ed6-96e5-e4a90f2e1549" /></div>
<div><img src="https://github.com/jingom368/Team_Project_React/assets/67932739/9322a882-6cdc-49d3-b097-d85b16e5edf3"></div>




<br />
<h2>SSL/TLS 설정</h2>
<div><img src="https://github.com/jingom368/Team_Project_Spring/assets/67932739/c001c9db-a76f-4d4e-b814-32479a63abac"></div>

<h2>Kakao Map API</h2>
<div><img src="https://github.com/jingom368/Team_Project_React/assets/67932739/c08cf2e4-843b-4d73-9675-c86d91793641"></div>


<br />

<h1>Team_Project_React</h1>
<h2>Category</h2>

### 1. [UserFlow](#UserFlow)
### 2. [StoryBoard](#StoryBoard)
### 3. [TestSenario](#TestSenario)
### 4. [Images](#Images)

<br />

## UserFlow

회원이 어느 목표를 이루기까지의 인터랙션을 각 뎁스 별로 정리하였다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/37e09a07-497a-4072-b3d8-e4589e2c72c4" width="800" height="450">

<br />

## StoryBoard

앞의 유저플로우를 바탕으로 쓸모없는 인터랙션을 지우고 직관적이지 않은 UI/UX를 좀 더 직관적으로 바꾸었다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/39139260-3455-4941-8d4f-51774fe57f1c" width="256" height="144">
<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/76be35b9-b7e8-4c00-a7c1-e33bbb7dec0d" width="256" height="144">
<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/689ff9cf-d6df-4939-846c-61345bb678a1" width="256" height="144">
<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/6df14b9b-aabd-4319-9813-e49e7dd3dcb4" width="256" height="144">
<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/c0d17d26-65e2-4eae-a2b7-9221bf1454af" width="256" height="144">
<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/9f6e8fba-8c08-41bd-a2ff-8864438d37a8" width="256" height="144">

<br />

## TestSenario

실제로 구현한 애플리케이션의 기능들이 실행하는 지 테스트하여 어느 부분이 되지 않는 지 확인 후 수정하였다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/f70e293e-c8ea-4506-b067-7b4e2a69b2a9" width="800" height="450">
<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/e71a819b-637c-47b2-8d08-3dc0e4d21a97" width="800" height="450">
<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/b6132052-5c7c-46f9-9e37-4a3dcca112f9" width="800" height="450">

<br />

## Images

유저플로우를 실제로 구현한 프로젝트의 이미지를 이용하여 구현하였다.

### Login

 - OAuth2 Key를 이용하여 구글, 네이버, 카카오의 로그인 API를 통해 로그인을 구현하였다.
 - 로그아웃의 경우 우상단의 로그아웃 버튼을 누르면 실행된다.
   
<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/47330466-b750-45c2-add2-e558b97548b7" width="800" height="450">

### Main

 - 홈화면이자 메인 화면에는 사용자의 위치를 추적하여 반경 5km의 숙소 추천 리스트가 가장 위에 있으며 그 밑에 국내 지역 여행지, 특가 할인 숙소, 얼리 체크인이 가능한 숙소 리스트 순으로 있다. 
 - 이중 국내 지역 여행지 리스트는 클릭 시 SearchList 페이지로, 나머지는 RoomInfo 페이지로 이동한다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/692fb5e8-358e-4e58-ad77-1f9d3fbdd666" width="800" height="450">

### SearchList

 - 상단의 검색창을 이용해 각각 키워드/숙소명/지역명 검색, 달력 API를 이용한 출입 날짜 입력, 인원 수/ 객실 수 입력을 구현하였다.
 - SearchList 페이지로 이동하면 좌측의 숙소 유형과 별점으로 검색 리스트를 구체화 시킬 수 있다.
 - 지도를 클릭하고 좌하단의 검색창에 어느 지역을 검색하면 그 지역의 20개의 숙소를 지정하여 나타낸다. '근처 숙소 검색하기'를 클릭하면 그 숙소들의 상세 설명이 나온다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/d8d26308-a083-4f12-a909-fea272168d2d" width="800" height="450">
<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/6ee21666-4ca7-492b-9c30-06546118bf8f" width="800" height="450">

### RoomInfo

 - 상단에 숙소의 상세 주소와 별점이 출력되고 아래에 객실의 사진과 정보, 가격이 나오며 '예약하기' 버튼을 구현하였다. 버튼을 누를 시 예약 페이지로 이동한다.
 - 최하단에 객실의 시설물을 등재하였다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/d5f51dcc-e6d6-4c8a-89a9-a5f94e7b4958" width="800" height="450">

### Reservation

 - 좌측에 예약자의 정보가 출력되고 우측에 객실의 가격과 인원 수를 계산한 총 가격이 나오고 하단에 그 숙소의 위치가 지도로 나온다.
 - 'XXXXXX원 결제하기' 버튼을 누를 시 확인창이 올라오며 하단의 'XXXXXX원 결제하기'를 클릭할 시 카카오페이 QR결제 코드가 올라온다.
 - 결제 완료 시 메뉴의 예약 내역 페이지("/menu/reservation")로 이동한다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/346e05c7-7463-4a87-8555-096a7cb98b1c" width="800" height="450">

### Menu

 - 사이트의 최상단의 우측 '메뉴' 버튼을 누를 시 메뉴로 이동한다. 누를 시 좌측에 "내 정보 관리", "예약 내역", "방문 내역", "내가 쓴 리뷰"가 나온다. 각 버튼을 클릭 시 아래의 기능을 실행할 수 있다.

#### MemberInfo

 - '내 정보 관리'를 클릭 시 회원 정보가 나타난다.
 - 하단의 '사업자 번호(숙소번호)'를 입력 후 등록 시 회원에서 해당 숙소의 관리자로 변경된다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/f11895db-1d0b-41d6-b55f-6f6b8a169070" width="800" height="450">

#### Reservation & Visited

 - '예약 내역'으로 이동 시 예약한 해당 숙소의 이미지와 상세 내역이 출력된다.
 - '방문 내역'으로 이동 시 방문한 해당 숙소의 이미지와 상세 내역이 출력된다. 그 밑에 '리뷰 작성'을 클릭할 시 리뷰창이 뜨며 상세 내용과 별점, 이미지를 등록할 수 있다. 등록한 리뷰는 '내가 쓴 리뷰'에 등재된다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/c8e87bdb-3ae5-4b59-8046-04d81d28365d" width="800" height="450">

#### Review

 - '내가 쓴 리뷰'를 클릭 시 등록한 리뷰가 나오며 하단의 '수정하기'를 클릭 시 리뷰창이 뜨며 수정할 수 있다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/0be65c45-b6f8-4e49-95d4-e1a93dbe8b17" width="800" height="450">

#### Manager

 - 위의 '내 정보 관리'에서 사업자 번호를 등록 시 '관리자페이지'가 메뉴에 출력되며 클릭 시 결제한 고객의 상태를 확인할 수 있으며 숙소에 들어올 시 '체크인'을 나갈 시 '체크아웃'을 눌러 상태를 변경할 수 있다.

<img src="https://github.com/jingom368/Team_Project_React/assets/151482642/06995538-007b-48f7-b875-2f22e262942e" width="800" height="450">
