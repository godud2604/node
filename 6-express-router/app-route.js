import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json()); // REST API -> Body
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body

const options = {
  dotfiles: 'ignore', // 숨겨진 파일은 보여지지 않도록
  etag: false,
  index: false,
  maxAge: '1d', // 캐시는 얼마나 지속될건지
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Data.now());
  },
};
app.use(express.static('public', options));

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(8080);