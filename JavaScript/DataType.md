# 데이터타입

## 데이터타입의 종류 기본형 참조형
- 기본형
```js
let num = 1; // num >>> 1
let str = 'abcdefg'; // str >>> abcdefg
let bool = true; // bool >>> true;
let nothing = undefined; // nothing >>> undefined
let nothing2 = null; // nothing2 >>> null 
```

- 참조형
```js
let list = [1,2,3,4,5]; // 배열
let dict = {f : 'apple', b : [true, false], n : 123} //객체
function (...) {...} // 함수
```

`기본형`은 값이 담긴 주솟값을 바로 복제합니다. 반면 `참조형`은 값이 담긴 주솟값들로 이루어진 묶음을 가리키는 주솟값을 복제한다는 점이 차이점 입니다.
> 이 내용은 예시로 알아보는게 이해가 빠릅니다.

데이터타입을 알아가는 과정에서는 `식별자`와 `변수`를 구분하여 생각해야 합니다.
`변수`는 **변할 수 있는 무언가**라고 하며 여기서 `무언가`는 **데이터**를 말합니다. 식별자는 어떤 데이터를 식별하는데 사용하는 이름, 즉 **변수명**입니다.

&nbsp;

---

## 변수선언
변수명을 지어주고, 값을 10으로 할당해 줬다고 생각해보자.
변수명은 `변수 영역`에, 할당한 값`10`은 데이터 영역에 주소값으로 데이터가 저장된다.

![](https://cdn.discordapp.com/attachments/900659683822555199/916235720266498058/unknown.png)

1. 처음 변수 영역에 빈 메모리 공간 확보
2. 확보한 공간에 식별자를 지정
3. 데이터 영역에 빈 메모리 공간 확보
4. 확보한 공간에 데이터 값 저장
5. 변수 영역에서 식별자의 주소값을 검색한다.
6. 검색한 식별자의 값을 데이터 영역의 주소값으로 저장한다.

> 기본 변수로 할당 되는 경우 이런 원리로 진행 됩니다.

&nbsp;

하지만 데이터가 **재할당** 된다면? 어떻게 진행 될까요?
식별자에 할당값을 다른 값을 `20`으로 **재할당**했다고 가정해 보자
![](https://cdn.discordapp.com/attachments/900659683822555199/916237238013157396/unknown.png)

1. 처음 변수 영역에 빈 메모리 공간 확보
2. 확보한 공간에 식별자를 지정
3. 데이터 영역에 빈 메모리 공간 확보
4. 확보한 공간에 데이터 값 저장
5. 변수 영역에서 식별자의 주소값을 검색한다.
6. 검색한 식별자의 값을 데이터 영역의 주소값으로 저장한다.

5번 까지는 같지만 아래 몇가지 경우가 더 생긴다.
7. 데이터 영역에 빈공간을 다시 확보한다.
8. 확보한 영역에 데이터 값을 `20`으로 저장한다.
9. 변수 영역에 식별자를 검색한다.
10. 검색한 식별자의 값을 데이터값 `20`의 값의 주소값으로 저장한다.

이런 로직으로 기본형 타입의 데이터를 할당합니다.

&nbsp;

그렇다면 참조형 데이터 타입은 어떻게 저장 될까?
![](https://cdn.discordapp.com/attachments/900659683822555199/916238715028914196/unknown.png)

참조형 데이터는 `객체 변수 영역`이 존재 합니다. 객체 변수 영역에 각 프로퍼티를 저장하고, 이 주소값을 데이터 영역에 참조하여 변수에 할당하는 형태로 데이터가 저장 되는 방식입니다.

1. 처음 변수 영역에 빈 메모리 공간 확보
2. 확보한 공간에 식별자를 지정
3. 데이터 영역에 빈 메모리 공간 확보
4. 객체 변수 영역에 빈 메모리 공간 확보
5. 객체 값안에 변수명을 객체 변수 영역에 할당
6. 데이터 영역에 빈공간 확보
7. 확보 된 데이터 영역 공간에 객체 변수 값을 저장
...

참조형 데이터 타입은 객체 변수 영역이 하나 더 확보 된 것이지, 크게 바뀐 것이 없다.

이로써 기본적인 데이터가 어떻게 저장되는지 알아보았습니다...!
<p align='center'>
<img src='https://media.discordapp.net/attachments/900659683822555199/916241073947414538/images.png' width='100%'>
</p>

&nbsp;

---

## 불변값 가변값
말의 의미로 불변값이란 변하지 않는 값인데, `재할당하면 바뀌자 않나?` 라고 생각할 수도 있습니다.
`불변값`을 판단 할 때는 **데이터 영역의 메모리**를 말합니다.
재할당을 하면 그 주소값에 데이터를 바꾸는 것이 아닌, 다시 공간을 확보하고 재할당한 값을 저장하는 것을 말합니다.
기존의 값은 지워지지 않았으므로, 불변성이라고 합니다.

&nbsp;

![](https://cdn.discordapp.com/attachments/900659683822555199/916244478510104616/unknown.png)

기존에 10이 저장되어 있었다면, 10을 다시 쓸때는 데이터 영역의 값을 다시 확보하는 것이 아닌, 기존에 값이 있는지 부터 찾고 있다면 재활용합니다.

그렇다면 가변값을 어떻게 바뀌는지 알아봅시다.
![](https://cdn.discordapp.com/attachments/900659683822555199/916246643349782599/unknown.png)

위 그림을 예시로 들자면, 원래 객체변수영역에 7002 주소값의 값으로 있는 주소는 @5005 였는데, 값을 변경해서 @5006으로 바뀌었습니다.
하지만, 변수명 obj에 값의 주소값은 @5003은 그대로 바뀌지 않았습니다.
즉 **객체변수영역의 데이터 값의 주소값만 바뀌었고**, 데이터 영역의 객체영역값의 주소값은 변하지 않았습니다.

이렇게 데이터 영역의 주소값은 변하지 않았지만, 객체 영역의 값은 변한 것을 `가변값`이라고 합니다.

> 배열의 변수 영역도 따로 존재한다고 생각하면 되고, 객체 영역처럼, 배열 영역도 데이터 영역에 주소값으로 저장된다고 생각하면 됩니다.

&nbsp;

---

## 가비지 컬렉팅
그럼 10을 안쓴다면 이 메모리 공간은 손해라고 생각할 수도 있습니다.
다른 언어는 일정한 생명주기를 가지지만, JS는 `쓸모가 없어졌을 때 자동으로 해체`합니다.

그렇다면 JS는 메모리가 필요가 없다는 것을 어떻게 알까요?
바로 `가비지 컬렉션`이라는 메모리 관리 방법을 사용해서 알 수 있습니다.
`가비지 컬렉션`이란, 가비지 컬렉터들이 메모리 할당을 추적하고, 만약 **더이상 쓰지 않는 메모리라면 판단하여 메모리를 해체하는 프로세스**를 말합니다.

&nbsp;

---

## 객체복사
객체 복사는 일반적으로 같은 객체 영역을 바라봅니다.
아래의 예시로 이해해 봅시다.

```js
let obj = { name : 'kim', age : 20}
let obj2 = obj
```
![](https://cdn.discordapp.com/attachments/900659683822555199/916250336170221578/unknown.png)

위와 같은 코드를 이해해 보자면, obj2는 obj와 같은 데이터 영역의 값을 할당 됩니다.
```js
obj === obj2 // ture
obj[name] = 'park';
console.log(obj2[name]) // park
```
즉 같은 데이터 영역을 보기 때문에 하나의 변수값이 달라지면 다른 객체까지 영향을 미칩니다.

그렇다면 불변 객체를 만드는 법은 뭘까요?

&nbsp;

---

## 불변객체
아래 코드를 보면, 여전히 같은 객체 영역주솔르 보고 있다는 것을 알 수 있다.
```js
// 객체의 가변성에 따른 문제점
let user = {
    name : 'abc',
    age : 19
};

const changeName = (user, newName) => {
    let newUser = user; // user 와 같은 객체 영역을 보고 있음
    newUser.name = newName;
    return newUser; // 같은 객체 영역을 보고 있는 것을 return 한 것이다.
}

let user2 = changeName(user, 'bbb'); // 결국 같은 객체 영역

if (user !== user2) {
    console.log('유저 정보 변경')
}

console.log(user.name, user2.name); // bbb bbb
console.log(user === user2) // true
```
결국 `return`값이 user 값이다. 즉, user와 같은 객체 영역 값이 있으므로, 불변 객체라고 생각 할 수 없다.

해결하기 위해서는 `user`를 할당해주는 것이 아닌, `return` 자체를 객체를 보내주면 된다.
```js
// 가변성 문제 해결 방법
let user = {
    name : 'abc',
    age : 19
};

const changeName = (user, newName) => {
    return {
        name : newName,
        age: user.age
    };
};

let user2 = changeName(user, 'test');


if (user !== user2) {
    console.log('유저 정보 변경')
}

console.log(user.name, user2.name); // abc test
console.log(user === user2) // false
```

&nbsp;

---

## 얕은복사 깊은복사
`얕은 복사`는 바로 아래 단계의 값만 복사하는 방법이고, `깊은 복사`는 내부의 모든 값들을 하나하나 찾아서 전부 복사하는 방법입니다.

우선 얕은복사부터 알아보겠습니다.
```js
// 중첩된 객체에 대한 얕은 복사
let user = {
    name : 'abc',
    urls : {
        blog : 'https://blog.com',
        portfolio : 'https://github.com'
    }
};

const copyObj = (target) => {
    let result = {};
    for (let key in target) {
        result[key] = target[key]
    }
    return result;
}

let user2 = copyObj(user);
user2.name = 'test';

console.log(user.name, user2.name); // abc test

user.urls.blog = 'https://github.io';

console.log(user.urls.blog, user2.urls.blog) //https://github.io https://github.io
console.log(user.urls.blog === user2.urls.blog) // true
```
`copyObj`는 얕은 복사만 수행했습니다. 중첩된 객체에서 참조형 데이터가 저장된 프로퍼티를 복사할 때, 그 주솟값만 복사한다는 의미입니다.

데이터 타입인 `user.name`은 값이 바뀌지만, 한단계 더 들어간 `user.urls`는 객체영역의 주소를 그대로 복사한 것이여서 원본과 사본을 어떤 것을 바꾸던 둘 다 영양을 미치게 됩니다.

그렇다면 깊은 복사는 어떻게 되는 것일까요?

```js
// 중첩 객체에 대한 깊은 복사
let user2 = copyObj(user);
user2.urls = copyObj(user.urls);
```
내부적으로 중첩된 객체를 한번 더 copy해주면 문제를 해결 할 수 있습니다..
이런 원리로 깊은 복사를 수행하는 함수 코드는 아래와 같습니다.

```js
let copyDeepObj = function(target) {
    let result = {}
    if (typeof target === 'object' && target !== null) {
        for (let key in target) {
            result[key] = copyDeepObj(target[key]);
        }
    } else {
        result = target;
    }

    return result;
}
```
target이 객체인 경우만 돌며, 내부 프로퍼티를 순회할 때, 함수적으로 재귀적으로 호출합니다.

&nbsp;

---

## JSON 활용한 깊은 복사
JSON을 활용하여 간단하게 깊은 복사가 가능합니다. 
```js
let copyObjJSON = function(target) {
    return JSON.parse(JSON.stringify(target));
}
```
JSON stringify를 왜 사용하는지 잘 몰랐으나 공부를 하면서 알게 되었습니다.

&nbsp;

---

## spread operartor

&nbsp;

---

## undefined와 null
JS에서 값이 없다는 것을 나타내는 것으로는 크게 `undefined`와 `null`이 있습니다.
하지만 이 둘은 사용목적도 다르고, 의미하는 것도 다릅니다.

`undefined`의 정확한 의미는 **값이 없음**을 의미합니다.
```js
let arr = [];
arr.length = 3;
console.log(arr); // [ <3 empty items> ]
let arr2 = [];
arr = [undefined, undefined, undefined];
```
정말 배열 안에 아무것도 없다면 `empty`가 출력 됩니다. 하지만 JS에서는 사용자가 명시적으로 `undefined`를 할당하지 않는 이상, JS가 반환하는 `undefined`는 어딘가 저장된 값이 아니라, **아직 존재하지 않는 프로퍼티에 접근했음**을 의미합니다.

따라서 JS에서는 명시적으로 없는 값을 넣어주려면, `undefined`보다 `null`을 사용하는게 맞습니다.

`null`의 타입은 객체와 같은 `object`타입이므로, `null`을 확인하기 위해서는 `==` 동등연산자가 아닌 `===` 일치연산자로 확인을 해야 구분이 가능합니다.

> 흔히 var는 값을 초기화 시켜주면서 undefined로 값이 초기화 된다고 알고 있지만, 엄밀히 말해서는 아닙니다.
> 정확히는 **아무것도 할당하지 않고 끝내고 변수에 접근 할 때, undefined를 반환**해주는 것입니다.

&nbsp;

---
## Referance
그림 참고
[solmii.velog](https://velog.io/@solmii/%EC%BD%94%EC%96%B4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%83%80%EC%9E%85%ED%95%98)

자료 참고
코어 스크립트 - 저자 정재남

> 정말 많이 참고 했습니다. 감사합니다.



