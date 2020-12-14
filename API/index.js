import express from 'express';
import router from './router.js';

const app = express();
const port = 3000;
const index = {
  index: 'index.html',
};

app.use(express.json());
app.use('/', express.static('view', index));
app.use('/', router);

app.listen(port, () => {
  console.log('API Started, at localhost 3000');
});
