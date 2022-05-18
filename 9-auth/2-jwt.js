const jwt = require('jsonwebtoken');

const secret = 'sadsadsadsadsad'
const token = jwt.sign(
  {
    id: 'hy',
    isAdmin: false,
  }, 
  secret,
  { expiresIn: 2 }
);

console.log(token);

setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);