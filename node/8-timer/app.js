let num = 1;
// setInterval : 따로 중지하지 않는 이상, 계속 수행된다.
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log('timeout!');
  clearInterval(interval);
}, 6000);