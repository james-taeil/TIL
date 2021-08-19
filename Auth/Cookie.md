# Cookie란?
Cookie는 Server에서 Client에 데이터를 저장하는 방법 중 하나이다.
HTTP는 Stateless(무상태성)의 특징을 가지고 있다. 즉 통신간에 데이터를 주고 받을 수 없는 프로토콜이다. 하지만 **데이터를 필요로 하는 웹**(ex 쇼핑몰)을 만들면서 이의 한계점으로 Cookie를 만들게 되었다.

Cookie는 WebSite를 들어갔을 때, 서버가 일방적으로 클라이언트에 전달하는 작은 데이터이다. 즉, 서버에서 웹브라우저에 정보를 저장하고, 불러올수 있는 수단이다. 
Cookie는 서버가 사용하는데, 사용자가 웹브라우저에서 어떤 Request를 서버에 했다고 가정하자.
해당 도메인에 Cookie가 존재하면(Http Message header에 Set-Cookie 값), 웹 브라우저는 도메인에게 http요청 시 Cookie를 함께 전달한다.

## Cookie Options
- Domain : Cookie Option에 도메인 정보가 존재한다면, Client Cookie Domain과 Server Cookie Domain이 일치해야만 쿠키 전송 가능
- Path : Client Cookie 세부경로와 Server Cookie 세부경로가 일치해야만 쿠키 전송 가능
- MaxAge or Expires : Cookie 유효기간
- HttpOnly : Cookie 접근 가능성 여부
- Secure : HTTPS 프로토콜에서만 쿠키 전송 여부 결정
- SameSite : CORS 요청의 경우 옵션 및 메소드에 따라 쿠키 전송 여부 결정