import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(port, () => {
  console.log('API Started, at localhost 3000');
});
