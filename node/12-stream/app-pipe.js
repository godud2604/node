const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip(); // 압축된 파일 생성
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream); // 데이터가 흘러갈 수 있도록
piping.on('finish', () => {
  console.log('done!!!');
});

const http = require('http');
const server = http.createServer((req, res) => {
  // (No) file을 다 읽은 후에, 메모리에 들어온 data를 반응해서 보내주는 방식
  // fs.readFile('file.txt', (err, data) => {
    // res.end(data);
  // });

  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res);
});
server.listen(3000);