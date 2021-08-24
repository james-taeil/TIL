### **스코프**

스코프(Scope)란? 영어 단어로 뜻은 '범위'라는 것은 다 알것 같습니다.
소프트웨어에서의 스코프도 '범위'라는 뜻으로 쓰입니다.

- 스코프 종류
- 스코프 규칙
- 스코프 의미 / 적용



```js
let name = 'kim';

if (name) {
    let hi = `hi, ${name}`;
    console.log(hi); //hi, kim
}
console.log(hi); // reference error
```
라는 코딩이 있다고 하면 결과는 어떻게 나올까요?
처음 출력은 잘 나오는데, 아래 출력은 레퍼런스 에러가 나옵니다.

`name`이라는 변수가 코딩 문장 전체의 스코프 이고 `hi`라는 변수는 if문 안에 변수이기 때문입니다.

`name` 같은 변수를 **전역 스코프(전역 변수)**라고 하며
`hi` 같은 변수를 **지역 스코프(지역 변수)**라고 합니다.

---
### **스코프 규칙**

그럼 전역변수만 쓰면 되지 않냐! 라는 의문도 생길수도 있고, 반대의 경우도 있다고 생각 할 수도 있습니다.
하지만 두가지를 적절하게 쓴다면 코딩에 많은 도움이 되겟죠?
스코프 규칙은 지역스코프와 전역스코프의 `우선순위`를 정하는 것입니다.

우선순위 : 지역스코프 > 전역스코프

즉 지역스코프와 전역스코프가 같이 쓰일 경우 지역스코프부터 우선순위를 가집니다.

```js
let fruit = 'apple';

function testFruit () {
    let fruit = 'banana';
    console.log(fruit); 
}
console.log(fruit); //apple
testFruit(); //banana
console.log(fruit); //apple
```

VS

```js
let fruit = 'apple';

function testFruit () {
    fruit = 'banana';
    console.log(fruit); 
}
console.log(fruit); //apple
testFruit(); //banana
console.log(fruit); //banana
```

---
### let VS var VS const


#### **let**

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i) // reference error
```

#### **var**

```js
for (var i = 0; i < 5; i++) {
    console.log(i);   
}
console.log(i); // 5
```

즉 var 은 함수 스코프로 스코프 밖까지 선언이 됩니다.
하지만 let 은 값은 재할당은 되지만, 재선언 안되는 특징이 있습니다. 또한 지역 스코프에서 썼을시 지역스코프가 벗어나는 범위라면 변수로 쓰지를 못합니다.

이를 통해 **var 보다는 let이 좀더 안정적**이라고 생각합니다.

`const`는 아시다시피, **재선언**도 안되며, **재할당**도 안됩니다.