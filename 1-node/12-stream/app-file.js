const fs = require('fs');

// file이 내가 가지고 있는 메모리보다 더 큰 사이즈의 메모리라면? 당연히 다 읽을 수 없다.
// readFile을 하고 나서, writeFile을 하는 건은 비효율적.
// => stream을 이용하면 하나씩 읽었다가, 버퍼 별로 반복하면서 데이터를 순차적으로 읽을 수 있다.
const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => {});
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});