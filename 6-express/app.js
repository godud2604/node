import express from 'express';
const app = express();

app.all('/api/*', (req, res, next) => {
  console.log('all');
  next();
});
app.use('/sky', (req, res, next) => {
  console.log('use');
  next();
});
app.get(
  '/',
  (req, res, next) => {
    console.log('first');
    // next(new Error('error')); // error 발생
    res.send('hello'); // 뒤에 연결된 미들웨어는 호출되지 않는다.
  },
  (req, res, next) => {
    console.log('first2');
    next();
  },
);

app.get('/', (req, res, next) => {
  console.log('second');
});

// 처리할 수 없는 경로에 대한 상태
app.use((req, res, next) => {
  res.status(404).send('Not available! ~_~')
});
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sorry, try later!'); 
});

app.listen(8080);
