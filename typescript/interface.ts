// interface 쓰는 이유: typescript에서 object 안에 특정 property를 사용하지 못한다
// 사용하기 위해서는 interface를 사용해야 한다.

// 문자열 리터럴 타입
type Score = 'A' | 'B' | 'C';

interface User {
    name: string;
    age: number;
    
    // 옵셔널 처리
    gender?: string;
    
    //read only 
    readonly birthYear: number;

    // 문자열 인덱스 서명 추가
    [grade: number]: Score;
}


let user: User = {
    name: 'kimcoding',
    age: 30,
    birthYear: 2000,
    // 1: 'F' // error 문자열 리터럴 타입에 F 가없음

}

user.age = 10;
user.gender = 'male';
// user.birthYear = 1000; // error

console.log(user.name)

// * ==========[add function]==========

interface Add {
    (num1: number, num2: number): number;
}

const add: Add = (x, y) => {
    return x + y;
}

// * ==========[boolean function]==========

interface IsAdult {
    (age: number): boolean;
}

const adult: IsAdult = (age) => {
    return age > 19;
}

adult(10); // false;


// * ==========[car function interface to class]==========
interface Car {
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car {
    color;
    constructor (c:string) {
        this.color = c;
    }
    
    wheels: 4;
    start () {
        console.log('go..!');
    }
}

const bCar = new Bmw('green');
console.log(bCar);