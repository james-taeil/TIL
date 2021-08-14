## **비동기 공부 목표**
- blocking 개념
- 동기적 개념(synchronous)
- non - blockin / 비동기 개념 (asynchronous)
- 비동기적으로 작동하는 기능
  - 로딩창 / 인터넷 서버 요청 후 응답 기다림 / 큰 용량 파일을 로딩
- callback / promise의 장점 단점
- promise 패턴 공부
  - resolve, reject 의미 then/catch 와의 관계
  - promise 인자 넘기는 법/세가지 상태/`promise.all` 이해
- `async/await` 작동 원리



---
## **blocking / non-blocking**
**blocking**
> `블로킹`은 Node.js 프로세스에서 추*가적인 JavaScript의 실행을 위해 JavaScript가 아닌 작업이 완료될 때까지 기다려야만 하는 상황입니다. 이는 이벤트 루프가 블로킹 작업을 하는 동안 JavaScript 실행을 계속할 수 없기 때문입니다. libuv를 사용하는 Node.js 표준 라이브러리의 동기 메서드가 가장 대표적인 블로킹 작업입니다.

그렇다면 **non-blocking**은 blocking과 반대되는 개념이겠다.

> 블로킹 메서드는 동기로 실행되고 논블로킹 메서드는 비동기로 실행됩니다.
**synchronous**
```js
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // 파일을 읽어 올때 까지 이 위치에서 blocking 된다.
console.log(data);
// moreWork();는 console.log 이후 실행될 것입니다.
```

**asynchronous**
```js
const fs = require('fs');
fs.readFile('file.md', (err, data) => {
  if (err) throw err;
   console.log(data);
})
// moreWork();는 console.log 이전에 실행될 것입니다.
```

>첫 예제가 두 번째보다 간단해 보이지만 두 번째 줄에서 전체 파일을 읽을 때까지 다른 JavaScript 실행이 **블로킹되는 단점**이 있습니다. 동기 예제에서 오류가 발생하면 반드시 처리해주어야 하고 그렇지 않으면 프로세스가 죽을 것입니다. 비동기 예제에서는 예제에 나왔듯이 에러를 던질지 아닐지는 작성자에게 달려있습니다.


---
## **비동기**
간단히 동기와 비동기의 차이점을 설명하자면, 동기는 `전화`라고 생각할 수 있고, 비동기는 `문자`라고 생각할 수 있다. 전화는 당장 일을 멈추고 전화를 받아야 한다. 하지만 문자는 시간이 얼마나 걸리던 미룰수가 있다. 
즉, 요청과 동시에 벌어지는 일은 `동기` 요청과 동시에 벌어지지 않은 일은 `비동기`라고 생각하면 쉽다.

비동기의 흐름을 알아야 한다.
비동기의 흐름은 크게 3가지가 있다.
- callback
- promise
- async/await 
3가지의 문법을 이용하여 구현할 수 있어야 한다.

대표적인 비동기 예시로는 유튜브 동영상이다.


---
## **callback 함수** 
차근 차근 알아보자

> 1. JavaScript is Synchronous.
JavaScript는 기본적으로 동기적인 아이다. 따라서 순차적으로 실행되는게 맞다.

> 2. Execute the code block in order after hoisting.
호이스팅이 된 이후 부터 코드가 작성된 순서에 맞춰서 순차적으로 진행된다.

> 3. Hoisting : var 변수, function declaration(함수선언)들이 제일 위로 올라가서 코드가 나타나는 순간부터 실행된다.

> `setTimeout()` : web API로 지정한 시간이 지나면 callback 함수를 호출하는 것 // 뒤에 시간은 웹 브라우저 시간으로 작성된다. 1000 msec = 1sec

#### **그럼 callback 함수는?**
```js
setTimeout(function () {
  console.log('Hello World)
}, 1000);
```

> `setTimeout` 우리가 만든 함수 파라미터 인자로 /// (끊고 생각) 우리가 만든 함수를 전달해 준다. 지정된 시간 후에 실행 함수를 실행시켜줘 라는 것을 `callback`이라고 한다.


고차 함수는 다른 함수의 인자를 전달 받을 수 있다. 또한, 리턴도 가능하다.
`caller`는 callback 함수를 전달 받는 함수로 함수 내부에서 `callback`함수를 호출하여 사용할 수 있다.

> callback 함수는 asynchrnous를 순차적으로 제하기 위해 만든 것

```js 
// 순차적으로 실행이 안된다.
const print = (string) => {
  setTime (() => {
    console.log(string))
  }, Math.floor(Math.random() * 100) + 1
  )
}
const printall = () => {
  print('a')
  print('b')
  print('c')
}
```

```js
// callback 함수
const print = (string, callback) => {
  setTime (() => {
    console.log(string))
    callback()
  }, Math.floor(Math.random() * 100) + 1
  )
}
const printall = () => {
  print('a', () =>  {
    print('b', () => {
      print('c',() => {
      })
    })
  })
}
```

### **콜백함수 사용 원칙**
**익명의 함수 사용**

```js
let number = [1,2,3]

number.forEach(function(x) {
  console.log(x * 2);
})
```

**함수의 이름만 넘기기**
```js
function testFunction(number, callback) {
  console.log('number: ', number);
  callback();
}

function eatPizza() {
  console.log('치즈 피자 먹는중');
}

testFunction(3, eatPizza);

// 결과
// number: 3
// "치즈 피자 먹는중"
```


#### **동기 callback 함수 구현**
```js
console.log('a');
setTimeout(() => console.log('b'), 1000); 
console.log('c');

function printSynchronous (print) {
  print();
}

printSynchronous (() => console.log('hello'))
// 출력결과
// a
// c
// hello
// b
```

#### **비동기 callback 함수 구현**
```js
function printAsynchronous (print, timeout) {
  setTimeout(print, timeout);
}
printAsynchronous(() => console.log('async callback'), 2000);

// 출력 결과
// a
// c
// hello
// b
// async callback
```
---
### **underbar**
직접 구현해보는 프로젝트를 했다.
간단한 개념은 쉬웠으나, deep한 기능을 구현하는것은 쉽지 않았다.


---
### **promise**
callback으로 하드코딩을 하면 가독성도 떨어지고, 비즈니스 모델 성능도 좋지 않아진다. 또한 디버깅시 어디서 버그가 났는지 찾기가 힘들어 진다. 이를 위해 `promise`를 사용한다.

> `promise` : JS에서 제공하는 비동기를 간편하게 해결하기 위한 Object이다.

> 1. Promise is a JavaScript object for asynchronous operation.
`상태` : pending  -> fulfilled or rejected
`Producer / Consumer`

> Producer (제공자)
> new Promise가 인스턴스로 만들어 지는 순간, 자동적으로 executor가 실행된다.

```js
// Promise에 있는 callback 함수 2개 
// 1. resolve : 기능 정상 실행 후 마지막 데이터 전달
// 2. reject : 기능 실행하다가 문제 발생시 호출
const promise = new Promise((resolve, reject)=> { 
  // 무거운 업무  >>> 영상 등 용량이 큰 데이터 (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    // 주석 풀면서 사용해 보면 쉽다!
    // resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
}); 
```

#### **알 수 있는 사실**
> Promise를 만든 순간 executer가 바로 만들어지며, 네트워크를 같이 수행한다.
> 사용자가 요구하는 순간 네트워크가 실행되므로 적절한 기능에 사용해야 한다.


> Consumer
> then, catch, finally

```js
// 값이 정상적으로 수행 된다면 value는 resolve의 값인 'ellie'가 들어올 것이다
promise.then((value) => {
  //우리가 원하는 callback 함수 실행
  console.log(value);
})

promise
    .then((value) => {
        console.log(value);
})
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    })
```

### **Promise chaining**

```js
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})

// then은 값을 전달해도 되고 다른 promise를 전달해도 된다.

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    })
  })
  .then(num => {
      console.log(num);
  })
```

### **Error Handling**

```js
const getHen = () => 
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen => 
    new Promise ((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => egg`)), 1000);
    });

const cook = egg => 
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
    });


getHen()
  .then(hen => getEgg(hen))
  .catch(error => {
      return '빵';
  })
  .then(egg => cook(egg))
  .then(meal => console.log(meal));
```

---
### **async/await**
`promise`에서 작성했던 then, catch가 많아지면 난잡해 질 수 있는 것을 좀더 보기 편하게 만들어주기 위함이다.

> async

```js
// 1. async
async function fetchUser() {
    // do network reqeust in 10 secs...
    return 'kimcoding';
}

const user = fetchUser();
user.then(console.log)
console.log(user);
```
> await

```js
// 2.await
function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(2000);
    return '바나나';
}

function getBananaNon() {
    return delay(3000)
    .then(() => '바나나')
}

function basketFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`)
    })
}

// 병렬로 된다
async function basketFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}

basketFruits().then(console.log);
```

> 그 밖에 유용한 API

```js
// 3. userful Promise APIs

// all API
function basketFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '))
}

basketFruits().then(console.log);

// race API
function basketPickOnlyOne () {
    return Promise.race([getApple(), getBanana()]);
}
basketPickOnlyOne().then(console.log)
```

## Referance
[드림코딩 엘리님 - callback](https://www.youtube.com/watch?v=s1vpVCrT8f4)
[드림코딩 엘리님 - promise](https://www.youtube.com/watch?v=JB_yU6Oe2eE)
[드림코딩 엘리님 - async/await](https://www.youtube.com/watch?v=aoQSOZfz3vQ)