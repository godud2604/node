// Fixed-size chuck of memory
// array of integers, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi');
console.log(buf); // 유니코드 형태
console.log(buf.length);
console.log(buf[0]); // 아스키코드 형태
console.log(buf[1]); // 아스키코드 형태
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2); // 메모리에서 사용가능한 메모리 덩어리를 찾아서 덩어리를 초기화시켜준다.
const buf3 = Buffer.allocUnsafe(2); // 기존에 다른 데이터가 있으나 사용되지 않는 메모리라면 공긴만 확보하고 초기화 하지는 않는다, 위의 코드보다 빠르다. 그러니, 데이터가 들어 있을수도 있으므로 초기화를 하는 것이 좋다.
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());