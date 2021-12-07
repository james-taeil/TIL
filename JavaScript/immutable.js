// 객체의 가변성에 따른 문제점
// let user = {
//     name : 'abc',
//     age : 19
// };

// const changeName = (user, newName) => {
//     let newUser = user;
//     newUser.name = newName;
//     return newUser;
// }

// let user2 = changeName(user, 'bbb');

// if (user !== user2) {
//     console.log('유저 정보 변경')
// }

// console.log(user.name, user2.name);
// console.log(user === user2)

//*! -------------------------------- */

// // 가변성 문제 해결 방법
// let user = {
//     name : 'abc',
//     age : 19
// };

// const changeName = (user, newName) => {
//     return {
//         name : newName,
//         age: user.age
//     };
// };

// let user2 = changeName(user, 'test');


// if (user !== user2) {
//     console.log('유저 정보 변경')
// }

// console.log(user.name, user2.name); // abc test
// console.log(user === user2) // false

// *! ------------------------------------ */
// 가변성 문제 해결 방법 (얕은 복사)
// let user = {
//     name : 'abc',
//     age : 19
// };

// const copyObj = (target) => {
//     let result = {};
//     for (let key in target) {
//         result[key] = target[key]
//     }
//     return result;
// }

// let user2 = copyObj(user);
// user2.name = 'test';

// if (user !== user2) {
//     console.log('유저 정보 변경')
// }

// console.log(user.name, user2.name);
// console.log(user === user2)


// let user = {
//     name : 'abc',
//     urls : {
//         blog : 'https://blog.com',
//         portfolio : 'https://github.com'
//     }
// };

// const copyObj = (target) => {
//     let result = {};
//     for (let key in target) {
//         result[key] = target[key]
//     }
//     return result;
// }

// let user2 = copyObj(user);
// user2.name = 'test';

// console.log(user.name, user2.name); // abc test

// user.urls.blog = 'https://github.io';

// console.log(user.urls.blog, user2.urls.blog) //https://github.io https://github.io
// console.log(user.urls.blog === user2.urls.blog) // true

let arr = [];
arr.length = 3;
console.log(arr);