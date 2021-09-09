## NodeJS 설치

```
Installing Node.js and npm from NodeSource
1. curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
2. sudo apt install nodejs
// 버전 확인
node -v

Installing Node.js and npm using NVM
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
2. nvm --version
3. nvm install node
4. node --version

nvm ls
```
&nbsp;
## NestJS 설치
```
npm install -g @nestjs/cli
nest new project-name
```
&nbsp;
## NestJS CRUD 애플리케이션 만들기
- .eslintrc.js 
     - 개발자들이 특정한 규칙을 가지고 코드를 깔끔하게 짤 수 있게 도와주는 라이브러리
     - TS 쓰는 가이드라인 제시, 문법에 오류가 나면 알려주는 역할
- .prettierrc
    - 주로 코드의 형식을 맞추는데 사용함
    - 작은따옴표, 큰따옴표, Indent값을 2로 줄지 4로 줄지등... 코드 포맷터 역할
- nest-cli.json
    - nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일
    - sourceRoot : 프로젝트의 모든 로직의 위치
- tsconfig.json
    - 어떻게 타입스크립트를 컴파일 할지 설정
- tsconfig.build.json
    - tsconfig.json의 연장선상 파일이며, build를 할 때, 필요한 설정들 excludes에서는 필요없는 파일들 명시
- package.json
    - build : 운영환경을 윟나 빌드
    - format : 린트에러가 났을지 수정
    - start : 앱 시작
- src 폴더 (대부분 비즈니스 로직이 들어가는 곳)
    - main.ts : 앱을 생성하고 실행
    - app.module.ts : 앱 모듈을 정의 
&nbsp;
## NestJS 로직 흐름
Express와 비슷하다.
Express -> Router -> Controller 의 흐름으로 Express는 진행한다.

NestJS는 Request가 들어오면 Controller에서 Service와 서로 값을 주고 받은 다음 마지막에는 Controller에서 Response 해준다.

&nbsp;
## NestJS Module
모듈은 @Module () 데코레이터로 주석이 달린 클래스이다. Root Module은 시작점이고, 하나 이상의 Root가 필요하다. 모듈은 밀접하게 관련된 기능 집합으로 구성요소를 구성하는 효과적인 방법이다.(기능별로 만든다.)

같은 기능에 해당하는 것은 하나의 모듈 폴더 안에 넣어서 사용한다.
모듈은 기본적으로 싱클 톤이므로 여러 모듈간에 쉽게 공급자의 동일한 인스턴스를 공유할 수 있다. 쉽게 말해 모듈 하나를 만들면 상위 모듈에서 사용할 수 있다는 것이다.

&nbsp;
## NestJS Module 생성하기





[참고 영상 John Ahn님 유튜브](https://www.youtube.com/watch?v=3JminDpCJNE)