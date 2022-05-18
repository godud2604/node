const bcrypt = require('bcrypt');

const password = 'abcd1234';
// const hashed = bcrypt.hash // 비동기 
const hashed = bcrypt.hashSync(password, 10); // 동기
console.log(`password: ${password}, hashed: ${hashed}`);

// const result = bcrypt.compare(); // 비동기
const result = bcrypt.compareSync('abcd122234', hashed); // 동기
console.log(result)