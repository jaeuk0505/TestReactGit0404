const {createProxyMiddleware} = require("http-proxy-middleware");

//프록시 서버 : 클라이언트 주소를 서버 주소에 맞게 바꿔주는 역할 

//프록시 서버 만들기
//app--> 현재 어플리케이션(현재 진행하고있는 프로젝트)
module.exports = function (app) {
    app.use(
      // /v1 -->endpoint(주소값(Origin)의 마지막)
      createProxyMiddleware('/v1',{
        target: "https://openapi.naver.com", //타겟이 되는 api url를 입력합니다.
        changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
      })
    );
   
  };