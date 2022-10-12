import { ApolloServer } from 'apollo-server'
// totalPhotos 같은 쿼리를 작성하려면 같은 이름을 가진 리졸버 함수가 반드시 있어야 한다.
// 반드시 스키마 객체과 같은 typename을 가진 객체 아래에 정의 해두어야 한다.
const typeDefs = `
  type Query {
    totalPhotos: Int!
  }
` 
const resolvers = {
  Query: {
    totalphotos: () => 42
  }
}
// 1.서버 인스턴스 생성
// 2.typeDefs(스키마)와 리졸버를 객체에 넣어 전달
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// 3.웹 서버 구동하기 위해 listen 메서드 호출
server.listen().then(({url})=> console.log(`GrahQL Service running ${url}`))
