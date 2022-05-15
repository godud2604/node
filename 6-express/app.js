import express from 'express';
const app = express();


app.get('/sky/:id', (req, res, next) => {
  console.log('get');
  console.log(req.path);
  // console.log(req.headers);
  console.log(req.params.id);
  console.log(req.query.keyword);
  
  res.send('hi!')
});

app.listen(8080);
