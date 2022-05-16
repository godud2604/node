console.log('code1');
console.time('timeout 0');

setTimeout(() => {
  console.timeEnd('timeout 0');
  console.log('setTimeout 0');
}, 0);

for (let i = 0; i < 10000000; i++) {

}