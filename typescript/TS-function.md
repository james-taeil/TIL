# TypeScript Function
기본적인 JavaScript function type
```js
function add (x, y) {
  return x + y;
}
```

## Typing the function
위 예시에서 TypeScript의 방식으로 작성하자면
```ts
function add (x: number, y: number): number {
  return x + y;
}
```

## 함수타입 작성하는 방법 중 하나
함수의 타입은 매개변수 타입과 반환 타입 두가지가 있다.
가독성을 위한 코드는 이렇게도 쓸 수 있다.
```ts
let myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
}
```
`=>`를 통해 반환타입을 설정해 준다.
함수를 반환하지 않는다면 `void` 를 사용하면 된다.

> 이렇게 작성하는게 가독성을 높이는 코드일까?

## 타입추론 (inferring the types)
typescript는 방정식의 한쪽만 타입이 있더라도 타입을 알 수 있다.
```ts
// myAdd는 전체 함수 타입을 가집니다
let myAdd = function(x: number, y: number): number { return  x + y; };
// function 에 선언된 값이 리턴타입

// 매개변수 x 와 y는 number 타입을 가집니다
let myAdd: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };

// 반대로 왼쪽에 타입을 선언해주고 함수를 선언 할 수 있다.
```


## 선택적 매개변수 & 기본 매개변수(Optional and Default Parameter)
선택적 매개변수는 전에 포스팅 했듯이 타입뒤에 `?`를 써주면 된다.
```ts
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // 지금은 바르게 동작
let result2 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result3 = buildName("Bob", "Adams");         // 정확함
```

매개변수는 값을 정해 두고 사용할 수도 있다.
```ts
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // 올바르게 동작, "Bob Smith" 반환
let result2 = buildName("Bob", undefined);       // 여전히 동작, 역시 "Bob Smith" 반환
let result3 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result4 = buildName("Bob", "Adams");         // 정확함
```

## 나머지 매개변수 (Rest Parameters)
파라미터하나에 나머지 모든 변수를 다 넣어서 나마지 매개변수 형식으로 사용할 수 있다.
```ts
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// employeeName 은 "Joseph Samuel Lucas MacKinzie" 가 될것입니다.
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

## this 매개변수

```ts
function f(this: void) {
    // 독립형 함수에서 `this`를 사용할 수 없는 것을 확인함
}
```

## 콜백에서 this 매개변수
콜백을 일반 함수처럼 호출하므로 `this`는 `undefined`가 된다. 일부 작업에서는 this 매개변수를 콜백 오류를 막는데 사용할 수 있다.
```ts
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClickGood = (e: Event) => { this.info = e.message }
}
```

## 오버로드
이해 안됌...