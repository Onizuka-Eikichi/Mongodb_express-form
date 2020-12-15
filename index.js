import express from 'express';
import bodyParser from 'body-parser';
import router from './API/router.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./view'));

app.use('/', router);

app.listen(port, () => {
  console.log('API Started, at localhost 3000');
});
