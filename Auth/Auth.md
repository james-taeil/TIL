# Auto 공부 목표
- 암호화, Hshing, salting 개념
- HTTP / HTTPS 차이점
- 권한부여(Authorization)과 인증(Authentication) 이해
- 쿠키 작동원리 이해
- session, cookie / token / OAuth 통해 인증 구현
- 클라이언트, 서버, 데이터베이스의 전체 동작 원리
- 회원가입, 로그인 등 유저 인증에 대해 구현
- 서비스의 보안과 관련된 방법을 알아보고 장단점 파악


## HTTPS
HTTP에서 Secure이 붙은 것으로, 인터넷에서 데이터를 주고 받을 수 있는 통신 프로토콜(HTTP)와 보안(Secure)이 합쳐진 단어가 HTTPS이다. HTTPS는 HTTP내용을 암호화 하여 보안성이 추가되었다.

### 인증서(Certificate)
인증서라는 것은 데이터를 제공한 서버가 정말로 데이터를 보내준 서버인지 인증/확인하는 것이다. 또한
인증서 내용에는 서버의 도메인 내용이 종속되어 있어서 데이터 제공자의 인증을 용의하게 한다.

인증서는 Client에서 인증서 domain을 서버에게 보내고 서버는 응답객체 domain을 다시 클라이언트에게 보낸다. 인증서 domain과 응답객체 domain을 비교후 같다면, 데이터가 확실하다고 인지하게 된다.

중간에 해커가 중간에 정보를 탈취해 응답객체 domain이 다른 것으로 준다면 인증서 domain과 같지 않기 때문에 데이터가 확실하지 않다고 인지할 수 있다.


### CA
인증서를 발급하는 공인된 기관이다. 각 Brower는 신뢰하는 CA를 가지고 있다.
CA의 특징으로는 한번 공인된 기관이라고 평생가는 것아닌, 중간에 자격을 박탈당할 수 있다.

### 비대칭 키 암호화
전혀 다른 키 한쌍으로 암호화와 복호화를 진행 할 수 있다. A key와 B key가 한쌍으로 있는 암호화라면
비대칭키의 특징으로는 **A Key로 암호화를 하였다고 한다면, B Key로만 복호화**를 할 수 있다. (한 쌍의 키이기때문)

HTTPS Server는 한쌍의 키중 하나는 비밀로 숨겨두고, 하나는 Client에게 공개하여 데이터를 안전하게 전송할 수 있게 한다.
이를 공개키 방식이라고 한다.


## HTTPS 프로토콜
HTTP에 Secure 개념을 더해서 만든 개념이다. HTTP 요청을 SSL이나 TLS 알고리즘을 이용해, HTTP 통신에서 내용을 암호화하여 데이터를 전송하는 방법이다.


### SSL(Secure Sockets Layer), TLS(Transport Layer Security)
서버와 클라이언트 사이의 통신 구간에 대해 보안수준을 높이기 위한 프로토콜이다. 인증 기관에서 발행된 서버 인증서를 사용해서 서버를 증명하고, 통신 구간을 암호화하며, 데이터의 위변조를 막는다.

**SSL의 핵심은 암호화이다.** SSL은 보안과 성능의 이유로 두가지 암호화 기법을 혼용하서 사용한다. 

#### 대칭키
- 공유키

#### 비대칭키
- 공개키(public key) - 클라이언트가 갖고 있음
- 개인키(private key) - 서버에서 주는 키

- cert.pem 공개키 -> CA 공인에서 -> 클라이언트가 가지고 있음
- key.pem 개인키 -> 서버에서 적용


### Hashing
hashing Algorithm으로 서버에서 주는 PW를 DB에 알고리즘을 통해 암호화 하여 저장

#### Hashing 원칙
- 모든 값에 대해 해시값을 계산하는데 오래 걸리지 않아야한다.
- 최대한 해시값을 피해야하며, 모든 값은 고유한 해시값을 가진다.
- 아주 작은 단위의 변경이라도 완전히 다른 해시값을 가져야 한다.

### Salt
암호화해야 하는 값에 어떤 **별도의 값을 추가하여 결과에 반영하는 것**
Salt 사용 => 암호화 하려는 값 + Salt용 값 = Hash 값

**주의할 점**
- 유저와 패스워드 별로 고유값을 가져야한다.
- 사용자 계정을 생성할 때와 비밀번호를 변경할 때, 새로운 임의의 Salt를 사용하여 Hashing해야 한다.
- Salt는 절대 재사용하면 안된다.
- Salt는 DB 유저 테이블에 저장되어야 한다.
