// https createServer 메소드 사용
// 개인키, 공개키 파일 불러오기
const https = require('https');
const fs = require('fs');

https.createServer (
    {
        key : fs.readdirSync('./key.pem', 'utf-8'),
        cert : fs.readdirSync('./cert.pem', 'utf-8')
    },
    function (req, res) {
        res.write('Congrats! You mode https server now :)');
        res.end();
    }
)
.listen(3001);


const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

https
  .createServer(
    {
      key: fs.readFileSync('./key.pem', 'utf-8'),
      cert: fs.readFileSync('./cert.pem', 'utf-8'),
    },
    app.use('/', (req, res) => {
      res.send('Congrats! You made https server now :)');
    })
  )
  .listen(3001);