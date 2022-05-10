function sayHello() {
  console.log('hello');
}

function calculate(x, y) {
  console.log('calculating..');
  const result = x + y;
  console.log('result: ', result);
  sayHello();
  return result;
}

calculate(1, 2);

const stop = 4;
console.log('.... loopings .....');
for (let i = 0; i < 10; i++) {
  console.log('count', i);
  console.log('debug', i + 1);
  if (i === stop) {
    break;
  }
}