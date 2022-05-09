const fs = require('fs');

// 조금씩 불러오기 때문에 이벤트 베이스다.
const data = [];
const readStream = fs.createReadStream('./file.txt', {
  // highWaterMark: 8,  // 한 번에 얼마만큼 데이터를 불러오는지 (default : 64 kbytes)
  // encoding: 'utf-8',
}).on('data', chunk => {
  data.push(chunk);
  console.count('data');
}).on('end', () => {
  console.log(data.join(''));
}).on('error', error => {
  console.log(error);
})

// on : 데이터가 발생할 때마다 콜백 함수가 실행된다.
// once : 처음에 받아온 데이터만 처리한다.