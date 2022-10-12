# Graphql-Study
Grahql 기초 공부
-. 쿼리
  1. 스칼라와 객체가 있다.
  2. 프래그먼트(fragment) 식별자를 이용해 중복되는 부분을 줄여서 이용가능하다.
  
-. 스키마 설계
# Setting
1. 프로젝트 세팅
  - npm init -y && npm i apollo-server graphql nodemon
  - package.json 설정
  - "start" : "nodemon -e js,json,graphql" // js,json,graphql 확장자 파일에서 생기는 변경을 nodemon이 감지
# 리졸버(resolver)
  - 특정 필드의 데이터를 반환하는 함수 즉, 실제로 데이터를 가져오는 일 담당
