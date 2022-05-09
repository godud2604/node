const _fs = require('fs'); // file system
const fs = require('fs').promises;

// read a file
fs.readFile('./file.txt', 'utf-8')
  .then(data => console.log(data))
  .catch(console.error)




// writing a file

// then은 X, 하지만 오류가 발생할 수 있기 때문에 catch는 필수 !
// writeFile : 기존 text를 대체
fs.writeFile('./file.txt', 'Yo, Dream Coders !')
  .catch(console.error); 

// appendFile : 기존 text의 뒤에 작성
fs.appendFile('./file.txt', 'Yo, Dream Coders !') // 1. 데이터 추가 후
  .then(() => {
    // copy
    fs.copyFile('./file.txt', './file2.txt') // 2. 복사 실행
    .catch(console.error)  
  })
  .catch(console.error); 



// copy 
// => 단순히 appendFile 다음에 copyFile을 실행하게 되면 비동기적으로 실행되기 때문에 복사가 안 될수도 있다. 순차적으로 하고 싶다면 위의 appendFile에서 then 구간에 copy를 해주는 것이 안전한다.
fs.copyFile('./file.txt', './file2.txt')
  .catch(console.error)



// folder
fs.mkdir('sub-folder')
  .catch(console.error);



// 현재 경로에 있는 모든 파일과 폴더 출력
fs.readdir('./')
  .then(console.log)
  .catch(console.error);
