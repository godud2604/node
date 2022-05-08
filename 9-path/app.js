const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep); // 경로 구분자 (/)
console.log(path.delimiter); // 환경 변수 구분자 (:)

// basename
console.log(path.basename(__filename)); // app.js
console.log(path.basename(__filename, '.js')); // app

// dirname
console.log(path.dirname(__filename)); // /Users/ihaeyeong/Desktop/projects/node/9-path

// extension
console.log(path.extname(__filename)); // .js

// parse
const parsed = path.parse(__filename);
console.log(parsed);
// {
//   root: '/',
//   dir: '/Users/ihaeyeong/Desktop/projects/node/9-path',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }

const str = path.format(parsed); // /Users/ihaeyeong/Desktop/projects/node/9-path/app.js
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // 절대경로 => /Users/ 로 시작
console.log('isAbsolute?', path.isAbsolute('../')); // 상대경로

// normalize (잘못된 경로 자동으로 수정)
console.log(path.normalize('./folder////////sub')); // folder/sub

// join
// => join을 사용하면 더 편리하게 path를 연결할 수 있다.
console.log(__dirname + path.sep + 'image'); // /Users/ihaeyeong/Desktop/projects/node/9-path/image
console.log(path.join(__dirname, 'image')); // /Users/ihaeyeong/Desktop/projects/node/9-path/image