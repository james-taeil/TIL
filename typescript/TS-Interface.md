# First Interface

## interface 가장 기초적인 선언과 사용 방식
```ts
interface Car {
  name:  string;
}
function printCar (carObj: Car) {
  console.log(carObj.name);
}

let myObj = {size:10, label: 'Size 10 Object'};
printLabel(myObj);
```

## Optional Properties
타입 선언을 할때, 뒤에 `?`를 사용하여 타입을 선언해준다. `any`타입과 비슷하게 사용할 수 있다. 즉, 타입을 선언하지 않아도 사용할 수 있다.

```ts
interface Car {
  name?: string;
  price?: number;
}

function buyCar (userCar: Car): {name: string; carNumber: number} {
  let bmw = {name: 'audio', carNumber: 1};
  if (userCar.name) {
    bmw.name = userCar.name;
  }

  return bmw;
}
```

## Readonly Properties
타입을 선언 할 때, 앞에 `readonly`를 넣어준다.
```ts
interface Point {
    readonly x: number;
    readonly y: number;
}
```
> 읽기 전용타입으로 선언한 경우 값을 변경 해 줄 수 없다.

## Readonly vs Const
변수는 const를 사용하고 프로퍼티는 readonly를 사용

## Excess Property Checks
```ts
interface Car {
  name?: string;
  price?: number;
}

function buyCar (userCar: Car): {name: string; carNumber: number} {
  
}

let myCar = buyCar({names: 'audio', color: 'red'});
```
이렇게 선언을 할 경우 `초과 프로퍼티 검사 (excess property checking)`를 받는다.
이것을 해결하기 위해 `타입 단언`을 해주면 된다.
```ts
let myCar = buyCar({name: 'audio', color: 'red'} as buyCar);
```

## Function Types
```ts
interface Car {
  (name: string, price: number): boolean;
}

let carInfo = Car;
const myCar = function (n: string, p: number): boolean {
  let answer = n.search('bmw');
  return answer > -1;
}
```

## Indexable Types
Interface를 인덱스로 기술 할 수 있다.
```ts
interface Car {
  [index: number]: string;
}

let carNames = Car;
carNames = ['BMW', 'AUDIO'];

let bmw: string = carNames[0];
```

## Class Types
class에서도 interface를 적용 시킬 수 있다.
```ts
interface CarInterface {
  name: string;
}

class Car implements CarInterface {
  name: string = 'bmw';
  constructor(price: number, color: string) {}
}
```


## 클래스의 스태틱과 인스턴스의 차이점
이해가 잘 되지 않는다...


## Extending Interfaces
interface를 확장하여 여러개를 사용할 수 있다.
```ts
interface Carinterface {
  carName: string;
}

interface Foodinterface {
  foodName: string;
}

interface Carfood extends Carinterface, Foodinterface {
  price: number;
}

let carandfood = {} as Carfood;
carandfood.carName = 'bmw';
carandfood.foodName = 'banana';
carandfood.price = 9999999999999;
```

## Hybrid Types
유동적으로 사용하는 타입?
```ts
interface Carinterface {
  carName: string;
  reset(); void;
}

function carName (): Carinterface {
  let car = (function (price: number) {}) as Carinterface; // 이부분을 하이브리드라고 말하는 듯
  car.carName = 'bmw';
  car.reset = function () {};
  return car;
}

let C = carName();
C.name = 'audio';
C(10000000);
c.reset();
```

## Interfaces Extending Classes
클레스 상속과 비슷한 개념으로 interface는 기초 클래스의 private과 protected 멤버도 상속받습니다.
(뜻 이해 불가...)
```ts
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}
```