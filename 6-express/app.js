import express from 'express';
const app = express();


app.get('/sky/:id', (req, res, next) => {
  console.log('get');
  console.log(req.path);
  // console.log(req.headers);
  console.log(req.params.id);
  console.log(req.query.keyword);

  // res.json({ name: 'Hy' });
  res.setHeader('key', 'value');
  res.status(201).send('created');
  // res.sendStatus(400);
});

app.listen(8080);
