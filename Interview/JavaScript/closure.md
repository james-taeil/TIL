## closure에 대해 설명해 주시고 example이 있다면 이야기해 주세요
내부함수가 외부함수의 맥락에 접근하는 것을 가르킨다.

## 내부함수, 외부함수
```js
// 외부함수
function outter (){
  // 외부함수에 지역변수
  const test = 'test';
  // 내부함수
  function inner (a, b) {
    console.log(test); // 내부에 없을 경우 inner 밖에 있는 함수에서 변수를 찾음 => 클로져
    return a + b
  }
  inner(3, 2)
}
```
함수의 응집성을 높인다.

## closure
내부함수는 외부함수의 지역변수에 접근할 수 있다.
외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있다.

```js
function outter() {
  let str = 'hello world';
  return function() {
    console.log(str);
  } // return 시 외부함수 소멸
}

let inner = outter();
inner();
```

## 어디다가 쓰나요?
- private variable

외부함수의 파라미터의 값을 변경할 때 내부함수에 영향을 주지 않는다 => 안정성
내부함수로 수정 혹은 저장을 하면 => 외부 변수의 값이 안전하게 저장될 수 있다. 혹은 사용할 수 있다.
> 참고 Private 속성은 객체의 외부에서는 접근 할 수 없는 외부에 감춰진 속성이나 메소드를 의미한다. 
> 이를 통해서 객체의 내부에서만 사용해야 하는 값이 노출됨으로서 생길 수 있는 오류를 줄일 수 있다. 
> 자바와 같은 언어에서는 이러한 특성을 언어 문법 차원에서 지원하고 있다.
