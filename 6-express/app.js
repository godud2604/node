import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

// readFileSync : 동기 
// readFile : 비동기 => 마지막 안정망인 에러 메시지에 도달하지 못한다. 미들웨어 체어는 각각 동기적으로 연결되어 있기 때문이다. try...catch로 에러를 잡지 못한다. 그러므로 해당하는 콜백 함수 내에서 에러 메시지를 적절하게 처리해야 한다.
app.get('/file1', (req, res) => {
  // 동기
  // try {
  //   const data = fs.readFileSync('/file.txt');
  // } catch (error) {
  //   res.status(404).send('File not found');
  // }

  // 비동기
  fs.readFile('/file1.txt', (err, data) => {
    if (err) {
      res.status(404).send('File not found');   
    }
  });
});

// promise : 비동기
// 비동기는 내부에서 에러 메시지가 전달되기 때문에 외부에 설정해놓은 안정만인 에러 메시지에 접근하지 못한다. try..catch로 감싸도 catch에 에러가 전달되지 않는다,
app.get('/file2', (req, res, next) => {
  // 비동기는 try...catch로 에러를 잡을 수 없다
  // try {
  //   fsAsync.readFile('/file.txt')
  // } catch (error) {
  //   console.error(error);
  // }

  // promise에서 발생하는 내부적으로 발생하는 에러를 잡아서 그 다음의 미들웨어에 에러로 던졌기 때문에 에러를 전달되고 전달되어서 제일 마지막의 안정망 에러로 갈 수 있는 것.
  fsAsync.readFile('/file.txt')
    .catch((error) => res.status(404).send('File not found'));
});

app.get('/file3', async (req, res) => {
  // 이 코드 자체는 동기적. await으로 파일을 다 읽을 때까지 기다림.
  // 그러나, 안정망의 에러에는 가지 못한다.
  // => 함수 자체는 async로 지정해두어서 promise로 감싸지기 때문에, 위의 promise에서 에러가 발생하는 것과 동일하다.
  
  try {
    const data = await fsAsync.readFile('/file.txt');
  } catch (error) {
    res.status(404).send('File not found')
  }
});

app.use((errpr, req, res, next) => {
  // console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
