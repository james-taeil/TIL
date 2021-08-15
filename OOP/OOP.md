## **OOP 공부 목표(객체 지향 프로그래밍)**

- 클래스 개념 이해 / 인스턴스 개념 이해
  - [x] new 사용법 >>> 인스턴스
  - [x] class 사용법
  - [x] 추상화 / 현실을 바탕으로 메소드, 속성 디자인

- OOP(객체 지향 프로그래밍)
  - 다형성
  - 캡슐화
  - 상속
  - 추상화

- 프로토 타입 개념 이해
- 상속 개념 이해
  - [x] 클래스 상속 원리 이해
  - Prototype chain 이해
  - 상속 관계 현실 세계 모델을 코드로 작성


---
### **Class 모듈화**

> 앞서 필요한 개념
> 객체 개념 // 클로저 개념 // 객체 다루기


#### **메소드 호출 실습하기**

메소드 호출 방식에서는 `화살표 함수`를 쓰지 않습니다. 이유는 [mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions#%EB%B0%94%EC%9D%B8%EB%94%A9_%EB%90%98%EC%A7%80_%EC%95%8A%EC%9D%80_this)을 잠초

```js
let makeModule = {
    value1 : 1,
    add : function() {
        this.value1++;
    },
    minus: function() {
        this.value1--;
    },
    mutiplication: function() {
        this.value1 * 2;
    }
}

makeModule.add() // 2
makeModule.minus() // 1
makeModule.mutiplication() // 2
makeModule.mutiplication() // 4
```

#### **클로저 이용해 객체 생성**

```js
function makeModule () {
    return {
        value1 : 1,
        add : function() {
        this.value1++;
        },
        minus: function() {
            this.value1--;
        },
        mutiplication: function() {
            this.value1 * 2;
        }
    }
}

let module1 = makeModule()

module1.add() // 2
module1.minus()  // 1

let module2 = makeModule()

module2.mutiplication() // 2
module2.add() // 3
module2.mutiplication() // 6

```

> module1 과 module2는 서로 영향을 미치지 않는다.


---
### **Class VS 인스턴스**

> 제일 설명하기 좋은 모델은 붕어빵이라고 생각합니다.

`Class` : 붕어빵을 만드는 모든 기계 // 붕어빵 틀, 가스레인지 등등
`인스턴스` : 슈크림 붕아빵, 팥 붕어빵, 미니 붕어빵 등등


```js
//클래스
function FishBread (앙금) {
}

// 인스턴스
let chouBread = new FishBread(chou); // 슈크림 붕어빵
let redbeanBread = new FishBread(redbean) // 팥 붕어빵
let miniBread = new FishBread(mini) // 미니 붕어빵
```

#### **ES6**에서는 class라는 키워드로 정의할 수도 있다.

```js
class FishBread {
    constructor (앙금, 이름, 가격) {
        // 인스턴스 만들시 실행도는 코드
    }
}

let chouBread = new FishBread(chou, '슈크림 붕어빵', 1500); // 슈크림 붕어빵
let redbeanBread = new FishBread(redbean, '팥 붕어빵', 1000) // 팥 붕어빵
let miniBread = new FishBread(mini, '미니 붕어빵', 500) // 미니 붕어빵
```

`constructor` 
  - 생성자라고 하며 생성자는 `return` 을 해주지 않는다.
  - 인스턴스가 초기화 될 시 실행되는 생성자 함수

> 이렇게 생성된 인스턴스는 `Class FishBread`의 속성과 메소드를 갖는다.
> `속성` : 앙금, 이름, 가격 등등 // 하나를 만들기 위해 필요한 재료
> `메소드` : 틀모양, 불세기, 굽는 시간 등등 // 어떤 붕어빵이든 모든 다 적용됨


#### **this**

```js
class FishBread {
    constructor(앙금, 이름, 가격) {
        // 인스턴스의 앙금 객체 = 인스턴스의 파라미터 앙금
        this.앙금 = 앙금; 
        // 인스턴스의 이름 객체 = 인스턴스의 파라미터 이름
        this.이름 = 이름; 
        // 인스턴스의 가격 객체 = 인스턴스의 파라미터 가격
        this.가격 = 가격; 
    }
}
```
ES6 를 공부하다보면 항상 `this` 란 **녀석**이 등장한다.

`this` : 간단히 설명하자면 인스턴스의 객체를 의미한다.
파라미터로 넘어온 값을 인스턴스 생성시 지정하는 defualt 값이며, 만들어진 인스턴스에 앙금, 이름, 가격을 만들어주는 변수를 선언해 준 것이다!


---
## *객체 지향 프로그래밍**
초기 프로그래밍은 절차적 언어였다. 즉, 순차적인 명령을 조합한 언어라는 뜻이다.
하지만 시간의 흐름의 따라 불편한 것을 개선해 나갔는데, 절차적 언어를 극복하기 위해서 객체 지향 언어를 만들었다.

`class`라는 데이터 모델을 사용해 코드를 만들고, 사람이 의식하는 것처럼 코드를 작성할 수 있다.

객체 지향 프로그래밍을 가지고 지향하는 바는 재사용성 이다.

### **OOP**(객체 지향 프로그래밍)

`Class` 의 구성 요소로는 크게 두가지가 있다.
  - `속성` // Attrubute
  - `메소드` // Methods

#### **캡슐화** (Encapsulation)
  - **데이터와 기능**을 **하나의 단위**로 만들어 놓은 것
  - 동작은 노출 시킴
  - 코드를 **언제든 수정하기 쉽다는 것**이 장점이다.

#### **상속** (Inheritance)
  - 부모 클래스의 특징을 자식 클래스가 물려 받는 것
  - 식물 >>> 나무 // 동물 >>> 호랑이
  - 자식 클레스에는 기능을 추가하는 것이 쉽다.

#### **추상화** (Abstraction)
  - **내부 구조는 복잡하나 실제로 우리가 보는 부분은 단순하게 만든다는 개념**
  - 핸드폰을 볼때 스크린 하나 밖에 안보이며, 터치가 되고, 양 옆에는 버튼이 존재하지만 내부적으로는 여러 프로그램 및 기능이 있어야 한다.

#### **다형성** (Polymorphsim) // 개념 이해 부족..


#### **OOP의 장점**
`캡슐화` : 재사용성 높인다
`추상화` : 코드를 단순화 시킨다.
`상속` : 필요한 코드만 사용한다 >>> 재사용성을 높인다.
`다형성` : 조건문 사용 대신 객체 특성의 맞게 달리 작성한다.


## **prototype**
모델의 청사진을 만들때 쓰는 원형 객체이다.
사물의 공통모습, 본래의 모습을 원형이라고 한다.

공통적으로 만드는 함수, 속성은 어떻게 만들까?

```js
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

// Person.sum = function () {
//   return this.first + this.second;
// }

//공통적으로 만들 메소드를 만들기 위해 아래와 같이 만든다.
Person.prototype.sum = function () {
  return this.first + this.second;
}

let kim = new Person()
let lee = new Person()
```

> 왜 이렇게 사용하냐?
> 생성자 안에 prototype이 들어가 있지 않아 한번만 정의 되어 메모리 절약, 성능을 절약할 수 있다.
> 또한 중요한 효과인 sum만을 고쳐서 sum을 쓰는 모든 인스턴스를 고칠 수 있다.
> 하나만을 다르게 할 수 있게 만들 수 있다.

```js
kim.sum = function() {
  return this.first + this.second + 2;
}
```