const fs = require('fs');

// 3
// rename(...., callback(error, data)) : 비동기
// try { renameSync(....) } catch(e) { } : blocking , 따로 콜백함수를 전달하지 않는다. 끝날 때까지 다음 줄로 넘어가지 않는다. 프로그램이 죽는 상황이 발생하는 것을 대비하여 항상 try-catch로 작성해야 한다. => 가급적 사용하지 않는 것이 좋다.
// promises.rename().then().catch(0)

// 1. renameSync (동기)
try {
  fs.renameSync('./file.txt', './file-new.txt');
} catch (error) {
  console.error(error);
}
console.log('hello');

// 2. rename (비동기)
fs.rename('./file-new.txt', './file.txt', (error) => {
  console.log(error);
});
console.log('hello2');

// 3. promises
fs.promises
  .rename('./text2.txt', './text-new.txt')
  .then(() => console.log('Done !'))
  .catch(console.error);