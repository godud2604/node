import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan'; // 사용자에게 요청을 받을 때마다, 어떤 요청을 받았는지, 얼마나 걸렸는지 등 로그로 나타내고 싶을 때 사용
import helmet from 'helmet'; // 공통적으로 보안에 필요한 header들을 추가해준다.

const app = express();
const corsOptions = {
  origin: ['http://127.0.0.1:5500'],  
  optionsSuccessStatus: 200,
  credentials: true, // Access-Control-Allow-Credentials: true
}

app.use(express.json());
app.use(cookieParser()); 
app.use(morgan('tiny'));
app.use(cors(corsOptions));
app.use(helmet());

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies); // token
  res.send('Welcome!');
});

app.listen(8080);
