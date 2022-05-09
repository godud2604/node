const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
};
emitter.on('ellie', callback1);

emitter.on('ellie', (args) => {
  console.log('second callback - ', args);
});

// emit을 이용해서 이벤트 발생시킬 수 있다.
emitter.emit('ellie', { message: 1 });
emitter.emit('ellie', { message: 2 });
emitter.removeListener('ellie', callback1); // 이벤트 제거
// emitter.removeAllListeners(); // 모든 이벤트 제거
emitter.emit('ellie', { message: 3 });