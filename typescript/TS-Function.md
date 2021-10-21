# TS for functional Programmers

## 내장 타입
TS 내장 타입
JavaScript 와 동일한 원시 타입이 기본적으로 내장되어 있다.
- number
- string
- boolean
- symbol
- null
- undefined
- object

&nbsp;
## TS 추가된 타입
| 타입 | 설명 |
|---|---|
| unknow | 최상위 타입 |
| never | 하위 타입 |
| 객체 리터럴 | {property: Type} |
| void | return 타입으로 사용 하기 위함 |
| T[] | 수정 가능한 배열 === Array<T>로 사용 가능 |
| [a, b] | 고정된 길이지만 수정이 가능한 튜플 |
| function( t: T) => {} | 함수 |

예시.1
```ts
// void, never => void: 아무것도 반환하지 않을 때 || never: 에러 반환하거나 무한루프일 경우
const test = () => {
    let hi: string = 'hi';
    return hi;
}

const test1 = (): void => {
    console.log('test');
}

const test2 = (): never => {
    throw new Error();
}

const test3 = (): never => {
    while (true) {
        // do something..
    }
}
```
## 객체 리터럴
객체 리터럴은 중괄호({...}) 내에 0개 이상의 프로퍼티를 정의하여 값을 생성하는 표기법

예시.2 객체 리터럴 타입 구문
```ts
let test: { number: number, test2: object[] } = {number: 2, test2: []};'
```
### property
프로퍼티란 객체의 상태를 나타내는 값(데이터)이며 키(key)과 값(value)으로 구성
```ts
let obj = {
  car: 'bmw',
  price: 1000000000,
  ...
}
```
더 공부할 주제 : property 접근, property 값 갱신/생성/삭제

### Method
```ts
let solution = {
  name: 'tester';
  sayName(): function() { // 메소드
    console.log(`hi ${this.name}`)
  }
}
```

예시.3 함수타입의 매겨변수 타입 설정
```ts
// 함수 구문의 매개변수 타입 설정
const test = (a: number, b: number) => {
    return a + b;
}
```


## 점진적 타이핑
TS의 표현식의 타입을 알 수 없을때마다 `any` 타입 사용

```ts
const anyTest = [];
anyTest.push(1);
anyTest.push('hi');
anyTest.push({...});
```

## 구조적인 타이핑
```ts
let o = { x: "hi", extra: 1 }; // 성공
let o2: { x: string } = o; // 성공
```
이 타입은 필수 프로퍼티가 모두 있고 해당 프로퍼티에 할당 가능한 타입이 있으므로 { x : string } 에 할당할 수 있다.


## 유니언(Unions)
```ts
function logText(text: string | number) {
  // ...
}
```

## 교집합
```ts
type Test = { a: number} & { b: string};
```

## 타입 추론
공부 필요

## 타입 별칭
```ts
type User = [string, number];
let user1: User = ['김코딩', 19];
```


## 판별 유니온
```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

function area(s: Shape) {
  if (s.kind === "circle") {
    return Math.PI * s.radius * s.radius;
  } else if (s.kind === "square") {
    return s.x * s.x;
  } else {
    return (s.x * s.y) / 2;
  }
}
```

## 타입 매겨변수


