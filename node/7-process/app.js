const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());


setTimeout(() => {
  console.log('setTimeout');
}, 0);

// nextTick : call stack에 있는 것들이 다 수행된 다음, task queue에 나의 콜백 함수를 넣었다가 수행해줘.
// => 포인트는, 태스크 큐에 이미 다른 콜백 함수(ex, setTimeout)가 들어있어도 그것들은 무시하고  nextTick의 콜백 함수 우선 순위를 제일 높여서 첫 번째로 실행한다.
process.nextTick(() => {
  console.log('nextTick');
});

for(let i = 0; i < 10; i++) {
  console.log('for loop')
}