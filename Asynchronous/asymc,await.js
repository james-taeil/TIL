// async & await
// clear style of useing promise :)

// 1. async
async function fetchUser() {
    // do network reqeust in 10 secs...
    return 'kimcoding';
}

const user = fetchUser();
user.then(console.log)
console.log(user);

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