import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

// 콜백은 배열 형태로 들어갈 수 있다.
// body.lsLength. ... => 체이닝이 가능하다
app.post('/users', 
  [
    body('name').isLength({ min: 2 }).withMessage('이름은 두 글자 이상 !'),
    body('age').notEmpty().isInt().withMessage('숫자를 입력해'),
    body('email').isEmail().withMessage('이메일을 입력해'),
    body('job.name').notEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    console.log(req.body); 
    res.sendStatus(201);
});

app.get(
  '/:email', 
  param('email').isEmail().withMessage('이메일을 입력해'),
(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }
  res.send('Success !');
});

app.listen(8080);
